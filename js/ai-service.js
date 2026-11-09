(function initHistoryAIService() {
    const DEFAULT_MODEL = 'gemini-1.5-flash';
    const MAX_PASSAGES = 8;
    const MAX_SOURCES = 4;
    const HISTORY_ONLY_MESSAGE = 'Tôi là AI được huấn luyện để trả lời các vấn đề lịch sử VN, vì vậy hãy hỏi tôi các chủ đề liên quan tới lịch sử VN.';
    const HISTORY_KEYWORDS = [
        'lich su', 'khang chien', 'cach mang', 'giai phong', 'tong tuyen cu',
        'tuyen ngon', 'doc lap', 'dien bien', 'geneva', 'paris', 'ba dinh',
        'dong khoi', 'mau than', 'truong son', 'hiep dinh', 'chien dich',
        'tong khoi nghia', 'viet minh', 'viet nam dan chu cong hoa',
        'dien bien phu', 'thuc dan', 'de quoc', 'quan tinh', 'quan doi',
        'vua', 'chua', 'trieu dai', 'nha ly', 'nha tran', 'nha le', 'nha nguyen',
        'tay son', 'trung vuong', 'ngo quyen', 'dinh bo linh', 'le loi',
        'quang trung', 'nguyen hue', 'bac bo', 'trung bo', 'nam bo',
        'dong duong', 'viet bac', 'at dau', 'binh xuyen', 'viet quoc',
        'viet cach', 'quoc gia', 'dan toc', 'to quoc', 'dong chi'
    ];
    const STOP_WORDS = new Set([
        'la', 'va', 'cua', 'cho', 'trong', 'mot', 'nhung', 'nhu', 'nay',
        'kia', 've', 'toi', 'ban', 'hay', 'voi', 'thi', 'duoc', 'co',
        'khong', 'gi', 'nao', 'tai', 'sao', 'the', 'chi', 'anh', 'ong',
        'ba', 'em', 'roi', 'tren', 'duoi'
    ]);
    const HIGH_TRUST_SOURCE_PATTERNS = [
        /\.gov\.vn$/i,
        /\.edu\.vn$/i,
        /nhandan\.vn$/i,
        /dangcongsan\.vn$/i,
        /baochinhphu\.vn$/i,
        /vietnamplus\.vn$/i,
        /hochiminh\.vn$/i,
        /baotang/i,
        /tulieuvankien/i,
        /mod\.gov\.vn$/i
    ];
    const LOW_VALUE_SOURCE_PATTERNS = [
        /google\./i,
        /facebook\.com$/i,
        /m\.facebook\.com$/i,
        /instagram\.com$/i,
        /tiktok\.com$/i,
        /twitter\.com$/i,
        /x\.com$/i
    ];

    let cachedAppData = null;
    let cachedPassageIndex = null;

    function getAppData() {
        if (window.appDataService?.getSyncData) {
            const syncData = window.appDataService.getSyncData();
            if (syncData) {
                return syncData;
            }
        }

        return typeof historicalData !== 'undefined' ? historicalData : null;
    }

    function getConfig() {
        return window.APP_GEMINI_CONFIG || {};
    }

    function isConfigured() {
        const config = getConfig();
        return Boolean(config.enabled && config.apiKey);
    }

    function normalizeText(value = '') {
        return String(value)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'd')
            .toLowerCase();
    }

    function tokenize(value = '') {
        return Array.from(
            new Set(
                normalizeText(value)
                    .split(/[^a-z0-9]+/g)
                    .map(token => token.trim())
                    .filter(token => token.length > 1 && !STOP_WORDS.has(token))
            )
        );
    }

    function clipText(value = '', maxLength = 420) {
        const clean = String(value || '').replace(/\s+/g, ' ').trim();
        if (clean.length <= maxLength) {
            return clean;
        }

        return `${clean.slice(0, maxLength - 1).trim()}…`;
    }

    function toUsableUrl(url = '') {
        const normalized = String(url || '').trim();
        return normalized && normalized !== '#' ? normalized : '';
    }

    function getHostname(url = '') {
        try {
            return new URL(url).hostname.toLowerCase();
        } catch (error) {
            return '';
        }
    }

    function formatHostLabel(hostname = '') {
        return hostname
            .replace(/^www\./i, '')
            .replace(/^m\./i, '');
    }

    function inferSourceLabel(url = '') {
        const hostname = getHostname(url);
        return hostname ? formatHostLabel(hostname) : '';
    }

    function uniqueBy(list, getKey) {
        const seen = new Set();

        return list.filter(item => {
            const key = getKey(item);
            if (!key || seen.has(key)) {
                return false;
            }

            seen.add(key);
            return true;
        });
    }

    function makeSource(source = {}, fallback = {}) {
        const rawUrl = toUsableUrl(source.url || fallback.url || '');
        const inferredLabel = inferSourceLabel(rawUrl);

        return {
            title: source.title || fallback.title || inferredLabel || 'Tư liệu lịch sử',
            source: source.source || fallback.source || inferredLabel || 'Dữ liệu website',
            url: rawUrl,
            note: source.note || fallback.note || '',
            domain: inferredLabel
        };
    }

    function isWebsiteSource(source = {}) {
        if (!source) {
            return false;
        }

        const sourceLabel = normalizeText(source.source || '');
        return !source.url || sourceLabel.includes('website');
    }

    function scoreSource(source = {}) {
        const domain = formatHostLabel(getHostname(source.url || '') || source.domain || '');
        let score = 40;

        if (isWebsiteSource(source)) {
            score += 18;
        }

        if (domain) {
            score += 10;
        }

        if (HIGH_TRUST_SOURCE_PATTERNS.some(pattern => pattern.test(domain))) {
            score += 35;
        }

        if (LOW_VALUE_SOURCE_PATTERNS.some(pattern => pattern.test(domain))) {
            score -= 18;
        }

        if ((source.note || '').length > 18) {
            score += 4;
        }

        if ((source.title || '').match(/nguồn web \d+/i)) {
            score -= 8;
        }

        return score;
    }

    function rankAndLimitSources(sources = [], fallbackSources = []) {
        const normalized = Array.isArray(sources)
            ? sources.map(source => makeSource(source))
            : [];
        const fallback = Array.isArray(fallbackSources)
            ? fallbackSources.map(source => makeSource(source))
            : [];
        const combined = normalized.length ? normalized : fallback;

        return uniqueBy(combined, source => `${source.title}|${source.source}|${source.url}`)
            .sort((left, right) => scoreSource(right) - scoreSource(left))
            .slice(0, MAX_SOURCES)
            .map(source => ({
                title: source.title,
                source: source.source,
                url: source.url,
                note: source.note
            }));
    }

    function figureFallbackSource(figure) {
        return makeSource(
            {},
            {
                title: `Hồ sơ nhân vật: ${figure.name}`,
                source: 'Mục Nhân vật lịch sử của website',
                note: `Thông tin tổng quan về ${figure.name} trong dữ liệu nội bộ của website.`
            }
        );
    }

    function eventFallbackSource(eventItem) {
        return makeSource(
            {},
            {
                title: `Sự kiện: ${eventItem.title}`,
                source: 'Dữ liệu sự kiện của website',
                note: `Bản tóm tắt sự kiện ${eventItem.title} trong hệ thống học liệu.`
            }
        );
    }

    function stageFallbackSource(stage) {
        return makeSource(
            {},
            {
                title: `Chặng học tập: ${stage.title}`,
                source: 'Dữ liệu giai đoạn của website',
                note: `Nội dung tổng hợp về chặng ${stage.title} trong website.`
            }
        );
    }

    function createPassage({
        id,
        text,
        title,
        kind,
        eraId = '',
        figureId = '',
        tags = [],
        sources = []
    }) {
        const safeText = clipText(text, 520);
        const safeTitle = String(title || '').trim();
        const searchSeed = [safeTitle, safeText, kind, eraId, figureId, ...tags].join(' ');

        return {
            id,
            title: safeTitle,
            text: safeText,
            kind,
            eraId,
            figureId,
            tags,
            sources: sources.filter(Boolean),
            searchText: normalizeText(searchSeed)
        };
    }

    function collectPassages(appData) {
        const passages = [];
        const eras = Array.isArray(appData?.eras) ? appData.eras : [];
        const eraNameById = new Map(eras.map(eraItem => [eraItem.id, eraItem.name]));

        (appData?.figures || []).forEach(figure => {
            const eraName = eraNameById.get(figure.era) || '';
            passages.push(createPassage({
                id: `figure:${figure.id}`,
                title: figure.name,
                text: `${figure.name} (${figure.years}) - ${figure.title}. ${figure.description}`,
                kind: 'Nhân vật',
                eraId: figure.era || '',
                figureId: figure.id,
                tags: [figure.name, figure.title, eraName],
                sources: [figureFallbackSource(figure)]
            }));
        });

        (appData?.events || []).forEach(eventItem => {
            const baseSources = Array.isArray(eventItem.materials) && eventItem.materials.length
                ? eventItem.materials.map(material => makeSource(material))
                : [eventFallbackSource(eventItem)];

            passages.push(createPassage({
                id: `event:${eventItem.id}`,
                title: eventItem.title,
                text: `${eventItem.description || ''} ${eventItem.significance || ''}`.trim(),
                kind: 'Sự kiện',
                eraId: eventItem.era || '',
                tags: [eventItem.title, eventItem.category, eventItem.date, eventItem.year],
                sources: baseSources
            }));

            (eventItem.detailParagraphs || []).forEach((paragraph, index) => {
                if (!paragraph) {
                    return;
                }

                passages.push(createPassage({
                    id: `event:${eventItem.id}:paragraph:${index}`,
                    title: eventItem.title,
                    text: paragraph,
                    kind: 'Chi tiết sự kiện',
                    eraId: eventItem.era || '',
                    tags: [eventItem.title, eventItem.category],
                    sources: baseSources
                }));
            });

            (eventItem.detailFlow || []).forEach((block, index) => {
                if (!block || block.type !== 'paragraph' || !block.text) {
                    return;
                }

                passages.push(createPassage({
                    id: `event:${eventItem.id}:flow:${index}`,
                    title: eventItem.title,
                    text: block.text,
                    kind: 'Chi tiết sự kiện',
                    eraId: eventItem.era || '',
                    tags: [eventItem.title, eventItem.category],
                    sources: baseSources
                }));
            });
        });

        const eraDetails = appData?.eraDetails || {};
        Object.entries(eraDetails).forEach(([eraId, eraDetail]) => {
            const eraName = eraNameById.get(eraId) || eraDetail?.title || eraId;
            const detailSources = Array.isArray(eraDetail?.materials) && eraDetail.materials.length
                ? eraDetail.materials.map(material => makeSource(material))
                : [
                    makeSource(
                        {},
                        {
                            title: eraDetail?.title || eraName,
                            source: 'Dữ liệu giai đoạn của website',
                            note: 'Nội dung tổng quan giai đoạn trong website.'
                        }
                    )
                ];

            if (eraDetail?.introSummary) {
                passages.push(createPassage({
                    id: `era:${eraId}:summary`,
                    title: eraDetail.title || eraName,
                    text: eraDetail.introSummary,
                    kind: 'Tổng quan giai đoạn',
                    eraId,
                    tags: [eraName, eraDetail?.subtitle || ''],
                    sources: detailSources
                }));
            }

            (eraDetail?.sections || []).forEach((section, index) => {
                passages.push(createPassage({
                    id: `era:${eraId}:section:${index}`,
                    title: `${eraDetail.title || eraName} - ${section.title || 'Nội dung'}`,
                    text: `${section.description || ''} ${section.text || ''}`.trim(),
                    kind: 'Phần học giai đoạn',
                    eraId,
                    tags: [eraName, section.title || ''],
                    sources: detailSources
                }));
            });

            Object.values(eraDetail?.stageDetails || {}).forEach(stage => {
                const stageSources = Array.isArray(stage?.materials) && stage.materials.length
                    ? stage.materials.map(material => makeSource(material))
                    : detailSources.length
                        ? detailSources
                        : [stageFallbackSource(stage)];

                passages.push(createPassage({
                    id: `stage:${eraId}:${stage.id}`,
                    title: stage.title,
                    text: `${stage.description || ''} ${stage.significance || ''} ${stage.focus || ''}`.trim(),
                    kind: 'Chặng học tập',
                    eraId,
                    tags: [eraName, stage.label || '', stage.period || ''],
                    sources: stageSources
                }));

                (stage.studySections || []).forEach((section, sectionIndex) => {
                    const flowParagraphs = (section.flow || [])
                        .filter(block => block?.type === 'paragraph' && block.text)
                        .map(block => block.text)
                        .join(' ');
                    const body = `${section.description || ''} ${flowParagraphs}`.trim();

                    if (!body) {
                        return;
                    }

                    passages.push(createPassage({
                        id: `stage:${eraId}:${stage.id}:section:${sectionIndex}`,
                        title: `${stage.title} - ${section.title || 'Nội dung học tập'}`,
                        text: body,
                        kind: 'Nội dung chặng',
                        eraId,
                        tags: [eraName, stage.title, section.title || ''],
                        sources: stageSources
                    }));
                });

                (stage.keyTakeaways || []).forEach((takeaway, takeawayIndex) => {
                    passages.push(createPassage({
                        id: `stage:${eraId}:${stage.id}:takeaway:${takeawayIndex}`,
                        title: `${stage.title} - Điểm cần nhớ`,
                        text: takeaway,
                        kind: 'Điểm cần nhớ',
                        eraId,
                        tags: [eraName, stage.title, 'điểm cần nhớ'],
                        sources: stageSources
                    }));
                });
            });
        });

        (appData?.quizQuestions || []).forEach(questionItem => {
            passages.push(createPassage({
                id: `quiz:${questionItem.id}`,
                title: questionItem.question,
                text: questionItem.explanation,
                kind: 'Câu hỏi ôn tập',
                tags: [questionItem.correct || ''],
                sources: [
                    makeSource(
                        {},
                        {
                            title: `Giải thích câu hỏi ${questionItem.id}`,
                            source: 'Mục kiểm tra kiến thức của website',
                            note: 'Lời giải thích dùng cho phần ôn tập kiến thức lịch sử.'
                        }
                    )
                ]
            }));
        });

        return passages;
    }

    function getPassageIndex(appData) {
        if (!appData) {
            return [];
        }

        if (cachedAppData === appData && Array.isArray(cachedPassageIndex)) {
            return cachedPassageIndex;
        }

        cachedAppData = appData;
        cachedPassageIndex = collectPassages(appData);
        return cachedPassageIndex;
    }

    function getFigureById(figureId, appData = getAppData()) {
        return (appData?.figures || []).find(figure => figure.id === figureId) || null;
    }

    function getKnownTopicPhrases(appData) {
        const stageTitles = Object.values(appData?.eraDetails || {})
            .flatMap(eraDetail => Object.values(eraDetail?.stageDetails || {}))
            .map(stage => stage?.title || '');

        return [
            ...(appData?.figures || []).map(item => item.name),
            ...(appData?.events || []).map(item => item.title),
            ...(appData?.eras || []).map(item => item.name),
            ...stageTitles
        ]
            .map(name => normalizeText(name))
            .filter(name => name && (name.includes(' ') || name.length >= 8));
    }

    function looksHistoryQuestion(question, options = {}) {
        if (options.figureId) {
            return true;
        }

        const normalizedQuestion = normalizeText(question);
        if (!normalizedQuestion) {
            return false;
        }

        if (/\b(194[5-9]|195\d|196\d|197[0-5])\b/.test(normalizedQuestion)) {
            return true;
        }

        if (HISTORY_KEYWORDS.some(keyword => normalizedQuestion.includes(keyword))) {
            return true;
        }

        const appData = getAppData();
        return getKnownTopicPhrases(appData).some(phrase => normalizedQuestion.includes(phrase));
    }

    function scorePassage(passage, questionTokens, normalizedQuestion, contextFigure) {
        let score = 0;

        // Tăng trọng số cho các từ khóa từ câu hỏi
        questionTokens.forEach(token => {
            if (passage.searchText.includes(token)) {
                score += token.length >= 6 ? 10 : 5; // Tăng điểm từ 5->10 và 3->5
            }
        });

        // Nếu khớp chính xác cụm từ dài, ưu tiên cực cao
        if (passage.searchText.includes(normalizedQuestion)) {
            score += 40; // Tăng từ 16 -> 40
        }

        if (contextFigure) {
            const figureName = normalizeText(contextFigure.name);
            // Giảm ưu tiên nhân vật để tránh trả lời lạc đề
            if (passage.searchText.includes(figureName)) {
                score += 5; // Giảm từ 18 -> 5
            }

            if (passage.figureId === contextFigure.id) {
                score += 3; // Giảm từ 12 -> 3
            }

            if (contextFigure.era && passage.eraId === contextFigure.era) {
                score += 2;
            }
        }

        return score;
    }

    function buildContext(question, options = {}) {
        const appData = getAppData();
        const contextFigure = options.figureId ? getFigureById(options.figureId, appData) : null;

        // Chỉ dùng tên nhân vật để tìm passages liên quan,
        // KHÔNG ghép description vào câu hỏi để tránh AI trả lời sai chủ đề.
        const searchSeed = contextFigure
            ? `${question} ${contextFigure.name} ${contextFigure.title}`
            : question;
        const normalizedQuestion = normalizeText(searchSeed);
        const tokens = tokenize(searchSeed);
        const passages = getPassageIndex(appData);

        const rankedPassages = passages
            .map(passage => ({
                ...passage,
                score: scorePassage(passage, tokens, normalizedQuestion, contextFigure)
            }))
            .filter(passage => passage.score > 0)
            .sort((left, right) => right.score - left.score)
            .slice(0, contextFigure ? MAX_PASSAGES : Math.max(5, MAX_PASSAGES - 2));

        const sources = uniqueBy(
            [
                ...(contextFigure ? [figureFallbackSource(contextFigure)] : []),
                ...rankedPassages.flatMap(passage => passage.sources)
            ].map(source => makeSource(source)),
            source => `${source.title}|${source.source}|${source.url}`
        ).slice(0, MAX_SOURCES);

        return {
            appData,
            figure: contextFigure,
            passages: rankedPassages,
            sources
        };
    }

    function buildSystemInstruction() {
        return [
            'BẠN LÀ AI:',
            '- Bạn là chuyên gia Trợ lý Lịch sử AI chuyên sâu về Lịch sử Việt Nam.',
            '- Bạn làm việc trên website "Học Lịch sử Việt Nam", hỗ trợ học sinh và người nghiên cứu.',
            '',
            'PHONG CÁCH GIAO TIẾP:',
            '- Ngôn ngữ: Tiếng Việt, gần gũi, truyền cảm hứng nhưng phải đảm bảo tính học thuật và chính xác.',
            '- Xưng hô: "Trợ lý", "Mình" hoặc "Tôi". Tránh xưng hô quá máy móc.',
            '',
            'QUY TẮC NỘI DUNG (CỰC KỲ QUAN TRỌNG):',
            '- CHỈ trả lời các vấn đề liên quan đến Lịch sử Việt Nam (Sự kiện, nhân vật, mốc thời gian, văn hóa, địa danh lịch sử VN).',
            '- TUYỆT ĐỐI KHÔNG trả lời các câu hỏi về lập trình, toán học, ngoại ngữ, địa lý thế giới (không liên quan VN), hoặc các vấn đề xã hội không thuộc phạm vi lịch sử.',
            `- Nếu câu hỏi không thuộc phạm vi Lịch sử VN, hãy trả lời chính xác câu này: "${HISTORY_ONLY_MESSAGE}"`,
            '- ƯU TIÊN DỮ LIỆU NỘI BỘ: Luôn kiểm tra các "Tư liệu" được cung cấp bên dưới trước khi dùng kiến thức chung.',
            '- TRUNG THỰC: Nếu dữ liệu nội bộ và kiến thức của bạn không đủ để khẳng định một chi tiết (như ngày giờ cụ thể chưa rõ ràng), hãy nói rõ "theo các nguồn tin hiện có" hoặc "vẫn còn nhiều tranh luận", tránh khẳng định sai.',
            '- KHÔNG HALLUCINATION: Tuyệt đối không tự bịa đặt mốc thời gian hoặc tên nhân vật không có thật.',
            '',
            'QUY TẮC NGUỒN TRÍCH DẪN:',
            '- Mặc định KHÔNG hiển thị danh sách nguồn ở cuối câu trả lời.',
            '- CHỈ hiển thị nguồn khi người dùng hỏi: "nguồn ở đâu", "lấy ở đâu", "trích dẫn từ đâu", hoặc các câu hỏi tương tự yêu cầu minh chứng.'
        ].join('\n');
    }

    function buildPrompt(question, context) {
        const figureInfo = context.figure 
            ? `[NGỮ CẢNH: Người dùng đang xem thông tin về nhân vật ${context.figure.name}]` 
            : '';
        const eraInfo = context.passages.find(p => p.eraId)?.eraId || '';
        const eraContext = eraInfo ? `[GIAI ĐOẠN LIÊN QUAN: ${eraInfo}]` : '';

        const passagesSection = context.passages.length
            ? context.passages.map((p, i) => `Tư liệu ${i+1} (${p.kind}): ${p.text}`).join('\n')
            : 'Không có tư liệu nội bộ cụ thể.';

        return [
            figureInfo,
            `CÂU HỎI CỦA NGƯỜI DÙNG: "${question}"`,
            '',
            'Yêu cầu bài làm:',
            '1. Trả lời trực tiếp vào câu hỏi trên một cách tự nhiên và chính xác.',
            '2. Sử dụng tư liệu bên dưới để làm phong phú câu trả lời:',
            passagesSection,
            '',
            '3. Sử dụng Google Search để kiểm chứng mốc thời gian và chi tiết lịch sử nếu cần.'
        ].join('\n');
    }

    function extractResponseText(apiResponse) {
        const parts = apiResponse?.candidates?.[0]?.content?.parts || [];
        return parts
            .map(part => part?.text || '')
            .join('')
            .trim();
    }

    function normalizeSourceList(sources = [], fallbackSources = []) {
        return rankAndLimitSources(sources, fallbackSources);
    }

    function extractGroundingSources(apiResponse, fallbackSources = []) {
        const chunks = apiResponse?.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
        const supports = apiResponse?.candidates?.[0]?.groundingMetadata?.groundingSupports || [];
        const citedChunkIndexes = Array.from(
            new Set(
                supports.flatMap(support => Array.isArray(support?.groundingChunkIndices)
                    ? support.groundingChunkIndices
                    : [])
            )
        );
        const prioritizedChunks = citedChunkIndexes.length
            ? citedChunkIndexes.map(index => chunks[index]).filter(Boolean)
            : chunks;
        const groundedSources = prioritizedChunks
            .map((chunk, index) => {
                const web = chunk?.web || {};
                const url = web.uri || '';
                const hostLabel = inferSourceLabel(url);
                const sourceLabel = hostLabel || 'Nguồn web công khai';

                return makeSource(
                    {
                        title: web.title || hostLabel || `Nguồn web ${index + 1}`,
                        source: sourceLabel,
                        url,
                        note: HIGH_TRUST_SOURCE_PATTERNS.some(pattern => pattern.test(hostLabel))
                            ? 'Nguồn ngoài website được Gemini truy xuất và có độ tin cậy tương đối cao.'
                            : 'Nguồn ngoài website do Gemini truy xuất qua Google Search.'
                    }
                );
            })
            .filter(source => source.title || source.url);

        return normalizeSourceList(groundedSources, fallbackSources);
    }

    function buildFallbackAnswer(question, context, error = null) {
        const contextFigure = context.figure;
        const relevantPassages = context.passages.slice(0, 4);
        const answerParts = [];

        // 1. Tìm các đoạn văn thực sự liên quan đến từ khóa trong câu hỏi
        const normalizedQ = normalizeText(question);
        const qTokens = tokenize(question);
        
        const bestPassages = relevantPassages.filter(p => {
            return qTokens.some(token => p.searchText.includes(token));
        });

        if (bestPassages.length > 0) {
            bestPassages.forEach(p => answerParts.push(p.text));
        } else if (contextFigure) {
            // Chỉ đưa tiểu sử nhân vật nếu không tìm thấy gì liên quan trực tiếp đến câu hỏi
            answerParts.push(`${contextFigure.name} (${contextFigure.years}) là ${contextFigure.title.toLowerCase()}. ${contextFigure.description}`);
        }

        if (!answerParts.length) {
            answerParts.push('Mình chưa tìm thấy thông tin chi tiết cụ thể về vấn đề này trong dữ liệu nội bộ.');
        }

        if (error) {
            answerParts.unshift('⚠️ [Chế độ offline] Kết nối tới AI đang gián đoạn, mình trả lời dựa trên dữ liệu website:');
        }

        return {
            ok: true,
            isHistoryQuestion: true,
            text: answerParts.join('\n\n'),
            sources: context.sources
        };
    }

    async function callGemini(question, context) {
        const config = getConfig();
        const model = config.model || DEFAULT_MODEL;
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`;
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-goog-api-key': config.apiKey
            },
            body: JSON.stringify({
                systemInstruction: {
                    parts: [{ text: buildSystemInstruction() }]
                },
                contents: [
                    {
                        role: 'user',
                        parts: [{ text: buildPrompt(question, context) }]
                    }
                ],
                /* Tạm tắt công cụ search để tránh lỗi vùng địa lý/quyền hạn key 
                tools: [
                    {
                        google_search: {}
                    }
                ],
                */
                generationConfig: {
                    temperature: 0.2,
                    topP: 0.9,
                    maxOutputTokens: 1024
                }
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Gemini API error ${response.status}: ${errorText}`);
        }

        const payload = await response.json();
        const responseText = extractResponseText(payload);
        const text = String(responseText || '').trim();

        if (!text) {
            throw new Error('Gemini response text is empty.');
        }

        const isHistoryQuestion = normalizeText(text) !== normalizeText(HISTORY_ONLY_MESSAGE);

        return {
            ok: true,
            isHistoryQuestion,
            text: text || (isHistoryQuestion ? 'Tôi chưa thể tạo câu trả lời từ dữ liệu hiện có.' : HISTORY_ONLY_MESSAGE),
            sources: isHistoryQuestion ? extractGroundingSources(payload, context.sources) : []
        };
    }

    async function ask(question, options = {}) {
        const trimmedQuestion = String(question || '').trim();

        if (!trimmedQuestion) {
            return {
                ok: false,
                isHistoryQuestion: false,
                text: 'Bạn hãy nhập câu hỏi trước khi gửi.',
                sources: []
            };
        }

        const context = buildContext(trimmedQuestion, options);
        
        // Kiểm tra xem đây có phải câu hỏi lịch sử không trước khi gọi AI
        if (!looksHistoryQuestion(trimmedQuestion, options)) {
            return {
                ok: true,
                isHistoryQuestion: false,
                text: HISTORY_ONLY_MESSAGE,
                sources: []
            };
        }

        // Kiểm tra xem người dùng có yêu cầu nguồn không
        const normalizedQ = normalizeText(trimmedQuestion);
        const asksForSources = /\b(nguon|trich dan|tham khao|o dau|lay tu dau)\b/i.test(normalizedQ);

        if (!isConfigured()) {
            return {
                ...buildFallbackAnswer(trimmedQuestion, context),
                asksForSources
            };
        }

        try {
            const result = await callGemini(trimmedQuestion, context);
            return {
                ...result,
                asksForSources
            };
        } catch (error) {
            return {
                ...buildFallbackAnswer(trimmedQuestion, context, error),
                asksForSources
            };
        }
    }

    function getGreeting() {
        return 'Tôi là trợ lý AI lịch sử Việt Nam. Nếu bạn có thắc mắc nào trong quá trình học tôi sẽ giải đáp cho bạn';
    }

    function getFigurePrompt(figureId) {
        const figure = getFigureById(figureId);
        if (!figure) {
            return 'Hãy giới thiệu chi tiết hơn về nhân vật này và dẫn nguồn tham khảo.';
        }

        return `Hãy giới thiệu chi tiết hơn về ${figure.name}, nêu vai trò, đóng góp, bối cảnh hoạt động và dẫn nguồn tham khảo.`;
    }

    function getHistoryOnlyMessage() {
        return HISTORY_ONLY_MESSAGE;
    }

    window.historyAIService = {
        ask,
        isConfigured,
        getGreeting,
        getHistoryOnlyMessage,
        getFigureById,
        getFigurePrompt
    };
})();
