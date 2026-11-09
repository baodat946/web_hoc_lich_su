(function () {
// ==================== TIMELINE HUB + ERA STUDY PAGE ====================

const THESIS_ERA = 'chong-phap';

const CHONG_PHAP_TOP_IMAGE = 'data:image/jpeg;base64,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';

let currentEra = THESIS_ERA;
let activeNodeId = null;
let selectedDetailNodeId = null;
let appData = historicalData;
const expandedEraMaps = new Set();

const ERA_STUDY_CONTENT = {
    'chong-phap': {
        introTitle: 'Kháng chiến chống Pháp 1945-1954',
        introSummary: 'Đây là giai đoạn Việt Nam vừa giành được chính quyền, vừa phải bảo vệ nền độc lập non trẻ, từng bước xây dựng lực lượng và đi đến thắng lợi năm 1954.',
        sections: [
            {
                title: 'Bối cảnh quốc tế',
                text: 'Chiến tranh thế giới thứ hai kết thúc làm trật tự thế giới biến động mạnh. Phát xít Nhật đầu hàng, thực dân Pháp tìm cách quay lại Đông Dương, còn quân Đồng minh kéo vào giải giáp quân Nhật. Vấn đề độc lập của Việt Nam vì thế gắn chặt với cục diện quốc tế sau chiến tranh.'
            },
            {
                title: 'Bối cảnh trong nước',
                text: 'Sau Cách mạng Tháng Tám, nước Việt Nam Dân chủ Cộng hòa ra đời nhưng chính quyền còn non trẻ, kinh tế kiệt quệ, nạn đói và nạn dốt nặng nề, thù trong giặc ngoài luôn đe dọa. Cách mạng Việt Nam phải đồng thời giải quyết nhiệm vụ xây dựng nhà nước mới và bảo vệ thành quả giành được.'
            },
            {
                title: 'Tình hình Việt Nam giai đoạn 1945-1954',
                text: 'Toàn bộ giai đoạn này là một quá trình phát triển liên tục: giành chính quyền năm 1945, giữ vững chính quyền, bước vào kháng chiến toàn quốc, xây dựng thế và lực, rồi giành thắng lợi quân sự - ngoại giao năm 1954. Vì vậy, các sự kiện không nên bị nhìn như những mốc rời rạc.'
            }
        ],
        outcomes: [
            'Hiểu vì sao sau thắng lợi năm 1945, dân tộc Việt Nam vẫn phải tiếp tục bước vào một cuộc kháng chiến lâu dài.',
            'Nắm được mạch phát triển từ Cách mạng Tháng Tám đến Điện Biên Phủ và Hiệp định Geneva.',
            'Thấy rõ vai trò của từng sự kiện trọng tâm trong toàn bộ tiến trình lịch sử 1945-1954.'
        ]
    }
};

function getAppData() {
    return appData || historicalData;
}

function getTimelineMode() {
    return document.body?.dataset?.timelineMode || 'hub';
}

function isEraPage() {
    return getTimelineMode() === 'era';
}

const ERA_MAP_PRESENTATION = {
    all: {
        title: 'Toàn cảnh bản đồ thời gian 1945–1975',
        description: 'Các mốc tiêu biểu trong tiến trình lịch sử Việt Nam từ 1945 đến 1975.'
    },
    'chong-phap': {
        title: 'Kháng chiến chống Pháp 1945–1954',
        description: 'Các mốc tiêu biểu của cuộc kháng chiến chống Pháp và quá trình bảo vệ chính quyền cách mạng.'
    },
    'chong-my': {
        title: 'Kháng chiến chống Mỹ 1954–1975',
        description: 'Các mốc tiêu biểu của cuộc kháng chiến chống Mỹ và sự nghiệp thống nhất đất nước.'
    },
    'thong-nhat': {
        title: 'Tổng tiến công và thống nhất đất nước 1975',
        description: 'Các mốc then chốt của cuộc Tổng tiến công và nổi dậy mùa Xuân 1975.'
    }
};

const ERA_REFERENCE_BACKGROUNDS = {
    'chong-phap': {
        imageUrl: 'assets/era-stages/stage-1/image4.jpeg',
        topImageUrl: 'assets/era-stages/stage-1/image6.jpeg',
        thirdImageUrl: 'assets/era-stages/stage-4/image4.jpeg',
        fourthImageUrl: 'assets/era-stages/stage-6/image5.jpeg',
        fifthImageUrl: 'assets/era-stages/stage-7/image5.jpeg',
        label: 'Ban do nen giai doan khang chien chong Phap'
    }
};

const EVENT_MAP_META = {
    'cach-mang-thang-8': { location: 'Hà Nội' },
    'doc-lap-1945': { location: 'Quảng trường Ba Đình' },
    'khang-chien-1946': { location: 'Hà Nội' },
    'chien-dich-bien-gioi': { location: 'Đông Khê - Cao Bằng' },
    'dien-bien-phu': { location: 'Điện Biên' },
    'hiep-dinh-geneva': { location: 'Geneva, Thụy Sĩ', external: true },
    'duong-truong-son': { location: 'Dãy Trường Sơn' },
    'tet-mau-than': { location: 'Huế - Sài Gòn' },
    'hiep-dinh-paris': { location: 'Paris, Pháp', external: true },
    'phuoc-long': { location: 'Phước Long' },
    'chien-dich-ho-chi-minh': { location: 'Sài Gòn' },
    'giai-phong-1975': { location: 'Dinh Độc Lập' }
};

function getBrowseEras() {
    return getAppData().eras.filter(era => era.id !== 'all');
}

function getInitialEraFromUrl() {
    if (!isEraPage()) {
        return 'all';
    }

    const params = new URLSearchParams(window.location.search);
    const requestedEra = params.get('era');
    const validEraIds = new Set(getBrowseEras().map(era => era.id));
    return validEraIds.has(requestedEra) ? requestedEra : THESIS_ERA;
}

function shouldOpenMapOnLoad() {
    if (!isEraPage()) {
        return false;
    }

    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'map' || Boolean(params.get('node'));
}

function getInitialSelectedNodeIdFromUrl() {
    if (!isEraPage()) {
        return null;
    }

    const params = new URLSearchParams(window.location.search);
    return params.get('node');
}

function syncEraUrl(eraId) {
    const nextUrl = new URL(window.location.href);

    if (!eraId || eraId === 'all') {
        nextUrl.searchParams.delete('era');
    } else {
        nextUrl.searchParams.set('era', eraId);
    }

    if (isEraPage()) {
        if (isMapExpandedForCurrentEra() || selectedDetailNodeId) {
            nextUrl.searchParams.set('view', 'map');
        } else {
            nextUrl.searchParams.delete('view');
        }

        if (selectedDetailNodeId) {
            nextUrl.searchParams.set('node', selectedDetailNodeId);
        } else {
            nextUrl.searchParams.delete('node');
        }
    }

    window.history.replaceState({}, '', nextUrl);
}

function getEraPageHref(eraId) {
    if (!eraId || eraId === 'all') {
        return 'timeline.html';
    }

    return `era.html?era=${encodeURIComponent(eraId)}`;
}

function navigateToEra(eraId) {
    window.location.href = getEraPageHref(eraId);
}

function setCurrentEra(nextEra, shouldSyncUrl = true) {
    currentEra = nextEra;
    activeNodeId = null;
    selectedDetailNodeId = null;

    if (shouldSyncUrl) {
        syncEraUrl(nextEra);
    }

    renderFocusPanel();
    renderEraFilter();
    renderMapExplorer();
    setTimeout(() => window.AOS?.refresh(), 100);
}

function getEraById(eraId) {
    return getAppData().eras.find(era => era.id === eraId);
}

function getThesisEvents() {
    return getAppData().events.filter(event => event.era === THESIS_ERA);
}

function getCurrentEvents() {
    return currentEra === 'all'
        ? getAppData().events
        : getAppData().events.filter(event => event.era === currentEra);
}

function getMapMeta(event) {
    return EVENT_MAP_META[event.id] || { location: event.title };
}

function getPresentationForCurrentEra() {
    return ERA_MAP_PRESENTATION[currentEra] || ERA_MAP_PRESENTATION.all;
}

function getStudyContentForCurrentEra() {
    return getAppData().eraDetails?.[currentEra] || ERA_STUDY_CONTENT[currentEra] || null;
}

function isMapExpandedForCurrentEra() {
    if (!getStudyContentForCurrentEra()) {
        return true;
    }

    return expandedEraMaps.has(currentEra);
}

function getReferenceBackground() {
    return ERA_REFERENCE_BACKGROUNDS[currentEra] || null;
}

function getReferenceBackgroundStyle(referenceBackground) {
    if (!referenceBackground) {
        return '';
    }

    const secondImageUrl = referenceBackground.secondImageUrl || referenceBackground.imageUrl;
    const firstImageUrl = referenceBackground.topImageUrl || secondImageUrl;
    const thirdImageUrl = referenceBackground.thirdImageUrl || referenceBackground.bottomImageUrl || secondImageUrl;
    const fourthImageUrl = referenceBackground.fourthImageUrl || thirdImageUrl;
    const fifthImageUrl = referenceBackground.fifthImageUrl || fourthImageUrl;

    return [
        `--timeline-map-reference-image-1: url('${firstImageUrl}')`,
        `--timeline-map-reference-image-2: url('${secondImageUrl}')`,
        `--timeline-map-reference-image-3: url('${thirdImageUrl}')`,
        `--timeline-map-reference-image-4: url('${fourthImageUrl}')`,
        `--timeline-map-reference-image-5: url('${fifthImageUrl}')`
    ].join('; ');
}

function renderReferenceBackground(referenceBackground) {
    if (!referenceBackground) {
        return '';
    }

    return `
        <div class="timeline-map-reference" style="${getReferenceBackgroundStyle(referenceBackground)}" aria-label="${referenceBackground.label}">
            <span class="timeline-map-reference-layer is-top" aria-hidden="true"></span>
            <span class="timeline-map-reference-layer is-upper" aria-hidden="true"></span>
            <span class="timeline-map-reference-layer is-center" aria-hidden="true"></span>
            <span class="timeline-map-reference-layer is-lower" aria-hidden="true"></span>
            <span class="timeline-map-reference-layer is-bottom" aria-hidden="true"></span>
        </div>
    `;
}

function parseDateParts(dateText, fallbackYear = 1900) {
    if (!dateText || typeof dateText !== 'string') {
        return { day: 1, month: 1, year: fallbackYear };
    }

    const [day, month, year] = dateText.split('/').map(Number);
    return {
        day: day || 1,
        month: month || 1,
        year: year || fallbackYear
    };
}

function getDateTimestamp(dateText, fallbackYear = 1900) {
    const { day, month, year } = parseDateParts(dateText, fallbackYear);
    return new Date(year, month - 1, day).getTime();
}

function getEventTimestamp(event) {
    return getDateTimestamp(event.date, event.year || 1900);
}

function getSortedEvents(events) {
    return [...events].sort((a, b) => getEventTimestamp(a) - getEventTimestamp(b));
}

function getTimelineNodeTimestamp(node) {
    return getDateTimestamp(node.date, node.year || 1900);
}

function getNodePriority(node) {
    if (node.kind === 'primary' && node.featured) return 0;
    if (node.kind === 'primary') return 1;
    return 2;
}

function clipText(text, maxLength = 78) {
    if (!text) return '';
    return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}…` : text;
}

function normalizeTimelineCompareText(text) {
    return String(text || '')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\b(ky|ký)\b/g, '')
        .replace(/[^a-z0-9]+/g, ' ')
        .trim();
}

function isDuplicateRelatedMoment(relatedNode, event) {
    if (!relatedNode || !event || relatedNode.date !== event.date) {
        return false;
    }

    const relatedTitle = normalizeTimelineCompareText(relatedNode.title);
    const eventTitle = normalizeTimelineCompareText(event.title);

    if (!relatedTitle || !eventTitle) {
        return false;
    }

    return relatedTitle === eventTitle
        || relatedTitle.includes(eventTitle)
        || eventTitle.includes(relatedTitle);
}

function getEraStageNarratives(eraId) {
    const stageDetails = getAppData().eraDetails?.[eraId]?.stageDetails;

    if (!stageDetails || typeof stageDetails !== 'object') {
        return {};
    }

    return Object.values(stageDetails).reduce((merged, stage) => {
        if (stage?.mapNodeNarratives && typeof stage.mapNodeNarratives === 'object') {
            Object.assign(merged, stage.mapNodeNarratives);
        }

        return merged;
    }, {});
}

function getTimelineNarrativeOverride(event, key) {
    if (!event?.era || !key) {
        return null;
    }

    return getEraStageNarratives(event.era)[key] || null;
}

function normalizeRelatedMoment(moment, event, index) {
    const meta = getMapMeta(event);

    if (typeof moment === 'string') {
        const parts = moment.split(' - ');
        const date = /^\d{2}\/\d{2}\/\d{4}$/.test(parts[0] || '') ? parts[0] : event.date;
        const description = parts.length > 1 ? parts.slice(1).join(' - ').trim() : moment.trim();
        return {
            id: `${event.id}-related-${index}`,
            kind: 'related',
            featured: false,
            year: parseDateParts(date, event.year).year,
            date,
            title: clipText(description, 72),
            description,
            significance: '',
            location: meta.location,
            external: meta.external,
            image: event.image,
            materials: event.materials || [],
            sourceEvent: event
        };
    }

    if (!moment || typeof moment !== 'object') {
        return null;
    }

    const date = moment.date || event.date;
    const override = getTimelineNarrativeOverride(event, `moment:${moment.id || `${event.id}-related-${index}`}`);

    return {
        id: moment.id || `${event.id}-related-${index}`,
        kind: 'related',
        featured: false,
        year: parseDateParts(date, event.year).year,
        date,
        title: override?.title || moment.title || clipText(moment.description || event.title, 72),
        description: override?.description || moment.description || moment.title || '',
        significance: override?.significance || moment.significance || '',
        location: moment.location || meta.location,
        external: typeof moment.external === 'boolean' ? moment.external : meta.external,
        image: override?.image || moment.image || event.image,
        materials: moment.materials || event.materials || [],
        sourceEvent: event
    };
}

function createPrimaryNode(event) {
    const meta = getMapMeta(event);
    const override = getTimelineNarrativeOverride(event, `event:${event.id}`);

    return {
        id: `primary-${event.id}`,
        kind: 'primary',
        featured: Boolean(event.featured),
        year: event.year,
        date: event.date,
        title: override?.title || event.title,
        description: override?.description || event.description,
        significance: override?.significance || event.significance,
        location: meta.location,
        external: meta.external,
        image: override?.image || event.image,
        materials: event.materials || [],
        sourceEvent: event
    };
}

function getTimelineNodes(events) {
    return getSortedEvents(events)
        .flatMap(event => {
            const primaryNode = createPrimaryNode(event);
            const relatedNodes = (event.relatedMoments || [])
                .map((moment, index) => normalizeRelatedMoment(moment, event, index))
                .filter(Boolean)
                .filter(node => !isDuplicateRelatedMoment(node, event));

            return [primaryNode, ...relatedNodes];
        })
        .sort((a, b) => {
            const timeDelta = getTimelineNodeTimestamp(a) - getTimelineNodeTimestamp(b);
            if (timeDelta !== 0) return timeDelta;

            const priorityDelta = getNodePriority(a) - getNodePriority(b);
            if (priorityDelta !== 0) return priorityDelta;

            return a.title.localeCompare(b.title, 'vi');
        });
}

function getNodeMaterials(node) {
    if (Array.isArray(node.materials) && node.materials.length > 0) {
        return node.materials;
    }

    if (node.kind === 'related') {
        return [];
    }

    return node.sourceEvent?.materials || [];
}

function getYouTubeEmbedUrl(url) {
    try {
        const parsed = new URL(url);
        let videoId = '';

        if (parsed.hostname.includes('youtu.be')) {
            videoId = parsed.pathname.replace('/', '');
        } else if (parsed.hostname.includes('youtube.com')) {
            videoId = parsed.searchParams.get('v') || '';
        }

        return videoId ? `https://www.youtube.com/embed/${videoId}` : '';
    } catch (error) {
        return '';
    }
}

function getVideoMaterial(node) {
    return getNodeMaterials(node).find(material => /youtu\.be|youtube\.com/i.test(material.url || '')) || null;
}

function getNodeKindLabel(node) {
    if (node.featured) return 'Sự kiện nổi bật';
    return '';
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function getNodeAlignment(x, centerX, index, node) {
    const distanceFromCenter = Math.abs(x - centerX);

    // Centered featured cards look good in sparse zones, but in dense 1954 clusters
    // they become vertically taller and can overlap nearby milestones.
    if (distanceFromCenter < 72) {
        return index % 2 === 0 ? 'right' : 'left';
    }

    if (node.featured && distanceFromCenter < 120) {
        return x < centerX ? 'right' : 'left';
    }

    return x < centerX ? 'right' : 'left';
}

function buildVerticalOffsets(nodes) {
    const oneDay = 24 * 60 * 60 * 1000;
    const offsets = [];
    let cumulativeOffset = 0;

    nodes.forEach((node, index) => {
        if (index === 0) {
            offsets.push(0);
            return;
        }

        const previousNode = nodes[index - 1];
        const timeGap = Math.abs(getTimelineNodeTimestamp(node) - getTimelineNodeTimestamp(previousNode));
        const sameDate = node.date === previousNode.date;
        const sharedSourceEvent = node.sourceEvent?.id && node.sourceEvent.id === previousNode.sourceEvent?.id;

        let extraGap = 0;

        // Same-day milestones need extra room, especially when one of them is featured.
        if (sameDate) {
            extraGap = node.featured || previousNode.featured ? 48 : 32;
        } else if (sharedSourceEvent && timeGap <= oneDay * 8) {
            extraGap = 16;
        }

        cumulativeOffset += extraGap;
        offsets.push(cumulativeOffset);
    });

    return {
        offsets,
        totalOffset: cumulativeOffset
    };
}

function getRouteLayout(nodes) {
    const width = 1320;
    const count = Math.max(nodes.length, 1);
    const baseHeight = Math.max(1280, 260 + (count - 1) * 118);
    const centerX = width / 2;
    const topPadding = 110;
    const bottomPadding = 110;
    const panelBottomReserve = 90;
    const usableHeight = baseHeight - topPadding - bottomPadding - panelBottomReserve;
    const { offsets, totalOffset } = buildVerticalOffsets(nodes);
    const height = baseHeight + totalOffset + panelBottomReserve;

    const laidOutNodes = nodes.map((node, index) => {
        const progress = count === 1 ? 0.5 : index / (count - 1);
        const y = topPadding + usableHeight * progress + offsets[index];

        const waveOne = Math.sin(progress * Math.PI * 2.45 + 0.28) * 188;
        const waveTwo = Math.sin(progress * Math.PI * 5.4 + 0.9) * 64;
        const waveThree = Math.cos(progress * Math.PI * 1.25 - 0.52) * 46;
        let x = centerX + waveOne + waveTwo + waveThree;

        if (node.kind === 'related') {
            x = centerX + (x - centerX) * 0.8;
        }

        if (node.featured) {
            x = centerX + (x - centerX) * 1.06;
        }

        x = clamp(x, 210, width - 210);

        const align = getNodeAlignment(x, centerX, index, node);
        const openUpByProgress = progress >= (node.featured ? 0.58 : node.kind === 'primary' ? 0.66 : 0.74);
        const panelOpenThreshold = node.featured ? 540 : node.kind === 'primary' ? 460 : 380;
        const panelDirection = openUpByProgress || height - y < panelOpenThreshold ? 'up' : 'down';

        return {
            ...node,
            align,
            panelDirection,
            x,
            y,
            xPercent: `${((x / width) * 100).toFixed(3)}%`,
            yPercent: `${((y / height) * 100).toFixed(3)}%`
        };
    });

    const pathD = buildSmoothRoutePath(laidOutNodes);
    const decorativeDots = buildDecorativeDots(laidOutNodes, width, height);

    return {
        width,
        height,
        pathD,
        nodes: laidOutNodes,
        decorativeDots
    };
}

function buildSmoothRoutePath(nodes) {
    if (!nodes.length) return '';

    let d = `M ${nodes[0].x} ${nodes[0].y}`;

    for (let index = 1; index < nodes.length; index += 1) {
        const previous = nodes[index - 1];
        const current = nodes[index];
        const deltaY = current.y - previous.y;
        const cp1x = previous.x;
        const cp1y = previous.y + deltaY * 0.42;
        const cp2x = current.x;
        const cp2y = current.y - deltaY * 0.42;
        d += ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${current.x} ${current.y}`;
    }

    return d;
}

function buildDecorativeDots(nodes, width, height) {
    const centerX = width / 2;
    const count = Math.min(nodes.length, 12);

    return Array.from({ length: count }, (_, index) => {
        const progress = (index + 1) / (count + 1);
        const y = 90 + progress * (height - 180);
        const x = centerX + Math.cos(progress * Math.PI * 4.2 + 0.7) * 270;
        return {
            id: `decorative-${index}`,
            xPercent: `${((clamp(x, 70, width - 70) / width) * 100).toFixed(3)}%`,
            yPercent: `${((y / height) * 100).toFixed(3)}%`
        };
    });
}

function renderFocusPanel() {
    const panel = document.getElementById('timelineFocusPanel');
    if (!panel) return;

    if (currentEra === 'all') {
        const eras = getBrowseEras();
        const totalEvents = eras.reduce((sum, era) => {
            return sum + getAppData().events.filter(event => event.era === era.id).length;
        }, 0);

        panel.innerHTML = `
            <div class="timeline-focus-copy">
                <span class="timeline-focus-chip">Các giai đoạn lịch sử</span>
                <h2 class="timeline-focus-title">Các giai đoạn lịch sử Việt Nam</h2>
                <p class="timeline-focus-desc">Khái quát các giai đoạn lịch sử hiện có.</p>
            </div>
            <div class="timeline-focus-stats">
                <div class="timeline-focus-stat">
                    <strong>${eras.length}</strong>
                    <span>giai đoạn hiện có</span>
                </div>
                <div class="timeline-focus-stat">
                    <strong>${totalEvents}</strong>
                    <span>sự kiện đã nhập</span>
                </div>
            </div>
        `;
        return;
    }

    const eraInfo = getEraById(currentEra);
    const eraNodes = getTimelineNodes(getCurrentEvents());
    const primaryCount = eraNodes.filter(node => node.kind === 'primary').length;
    const relatedCount = eraNodes.filter(node => node.kind === 'related').length;
    const chipLabel = currentEra === THESIS_ERA ? 'Bài học giai đoạn mẫu' : 'Trang giai đoạn';
    const studyContent = getStudyContentForCurrentEra();

    panel.innerHTML = `
        <div class="timeline-focus-copy">
            <span class="timeline-focus-chip">${chipLabel}</span>
            <h2 class="timeline-focus-title">${eraInfo?.name || 'Giai đoạn lịch sử'} ${eraInfo?.period ? `<small>${eraInfo.period}</small>` : ''}</h2>
            <p class="timeline-focus-desc">
                ${studyContent?.introSummary || 'Khái quát các mốc tiêu biểu của giai đoạn lịch sử này.'}
            </p>
        </div>
            <div class="timeline-focus-stats">
                <div class="timeline-focus-stat">
                    <strong>${eraNodes.length}</strong>
                    <span>tổng mốc hiển thị</span>
                </div>
                <div class="timeline-focus-stat">
                    <strong>${primaryCount}</strong>
                    <span>sự kiện trọng tâm</span>
                </div>
                <div class="timeline-focus-stat">
                    <strong>${relatedCount}</strong>
                    <span>mốc liên quan</span>
                </div>
            </div>
    `;
}

function renderEraFilter() {
    const filter = document.getElementById('eraFilter');
    if (!filter) return;

    const erasToRender = currentEra === 'all'
        ? getAppData().eras.filter(era => era.id === 'all')
        : getAppData().eras;

    filter.innerHTML = erasToRender.map(era => `
        <button class="era-btn ${era.id === currentEra ? 'active' : ''} ${era.id === THESIS_ERA ? 'thesis-era-btn' : ''}" data-era="${era.id}">
            <span>${era.icon}</span>
            <span>${era.name}</span>
            ${era.period ? `<small class="era-period">${era.period}</small>` : ''}
        </button>
    `).join('');

    filter.querySelectorAll('.era-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextEra = btn.dataset.era;

            if (isEraPage()) {
                navigateToEra(nextEra);
                return;
            }

            setCurrentEra(nextEra);
        });
    });
}

function renderMapBackdrop() {
    return `
        <svg class="era-map-svg" viewBox="0 0 1000 760" aria-hidden="true">
            <defs>
                <radialGradient id="mapGlow" cx="55%" cy="45%" r="72%">
                    <stop offset="0%" stop-color="rgba(255, 214, 137, 0.18)" />
                    <stop offset="100%" stop-color="rgba(255, 214, 137, 0)" />
                </radialGradient>
            </defs>
            <rect x="0" y="0" width="1000" height="760" fill="url(#mapGlow)"></rect>
            <path class="era-map-mainland"
                d="M520 58 C504 92 510 124 490 158 C474 188 478 214 464 248 C452 281 456 315 446 349 C437 382 440 417 432 452 C424 487 427 519 431 552 C436 588 431 629 412 689 C456 666 485 622 510 577 C529 543 563 515 586 483 C612 446 624 408 621 372 C619 337 631 303 654 273 C677 242 695 204 694 164 C693 121 668 85 626 63 C589 45 552 45 520 58 Z" />
            <path class="era-map-mainland-accent"
                d="M548 89 C541 118 548 148 537 179 C527 211 531 239 527 269 C523 306 534 343 529 378 C525 414 530 450 530 490 C530 530 535 568 525 607" />
            <path class="era-map-world-link"
                d="M650 118 C725 100 805 102 888 126" />
        </svg>
    `;
}

function renderSourceChips(node) {
    const materials = getNodeMaterials(node);

    if (!materials.length) {
        return '<div class="map-event-empty">Tư liệu cho mốc này đang được bổ sung thêm.</div>';
    }

    return `
        <div class="map-event-sources">
            ${materials.slice(0, 3).map(material => `
                <a href="${material.url}" class="map-event-source" target="_blank" rel="noopener noreferrer">
                    <span>${material.type}</span>
                    <strong>${material.source || 'Nguồn mở'}</strong>
                </a>
            `).join('')}
        </div>
    `;
}

function renderDecorativeDots(layout) {
    return layout.decorativeDots.map(dot => `
        <span class="timeline-route-decor-dot" style="--decor-x: ${dot.xPercent}; --decor-y: ${dot.yPercent};"></span>
    `).join('');
}

function renderRouteSvg(layout) {
    return `
        <svg class="timeline-route-svg" viewBox="0 0 ${layout.width} ${layout.height}" preserveAspectRatio="none" aria-hidden="true">
            <path class="timeline-route-path-shadow" d="${layout.pathD}"></path>
            <path class="timeline-route-path-glow" d="${layout.pathD}"></path>
            <path class="timeline-route-path" d="${layout.pathD}"></path>
        </svg>
    `;
}

function getNodeDetailHref(node) {
    if (node.kind === 'related') {
        return `event.html?id=${node.sourceEvent.id}&moment=${encodeURIComponent(node.id)}`;
    }

    return `event.html?id=${node.sourceEvent.id}`;
}

function getNodePanelSummary(node) {
    const summaryParts = [node.description, node.significance].filter(Boolean);
    return clipText(summaryParts.join(' '), node.kind === 'related' ? 180 : 220);
}

function getDetailNodeSelection(node) {
    if (!node?.sourceEvent?.id) {
        return null;
    }

    if (node.kind === 'related') {
        return {
            eventId: node.sourceEvent.id,
            momentId: node.id
        };
    }

    return {
        eventId: node.sourceEvent.id
    };
}

function getNodeIdForDetailSelection(eventId, momentId = '') {
    if (momentId) {
        return momentId;
    }

    return eventId ? `primary-${eventId}` : null;
}

function renderInlineDetailPane(node) {
    const detailSelection = getDetailNodeSelection(node);
    const detailResult = detailSelection && window.eventDetailRenderer?.buildRenderResult
        ? window.eventDetailRenderer.buildRenderResult(detailSelection, getAppData())
        : null;
    const detailTitle = node.kind === 'related' ? 'Chi tiáº¿t má»‘c lá»‹ch sá»­' : 'Chi tiáº¿t sá»± kiá»‡n';
    const detailHtml = detailResult?.html || renderEventNotFound();

    return `
        <aside class="timeline-map-detail-pane" aria-label="${detailTitle}">
            <div class="timeline-map-detail-header">
                <div class="timeline-map-detail-copy">
                    <span class="timeline-map-chip">${node.kind === 'related' ? 'Má»‘c Ä‘ang xem' : 'Sá»± kiá»‡n Ä‘ang xem'}</span>
                    <h3 class="timeline-map-detail-title">${node.title}</h3>
                    <p class="timeline-map-detail-desc">${node.date}${node.location ? ` â€¢ ${node.location}` : ''}</p>
                </div>
                <button class="timeline-map-detail-close" type="button" data-inline-detail-close aria-label="ÄÃ³ng khung chi tiáº¿t">âœ•</button>
            </div>
            <div class="timeline-map-detail-body">
                <div class="event-detail-page event-detail-page--inline">
                    ${detailHtml}
                </div>
            </div>
        </aside>
    `;
}

function renderMapMarker(node) {
    const isOpen = activeNodeId === node.id;
    const isSelected = selectedDetailNodeId === node.id;
    const isRelated = node.kind === 'related';
    const nodeClass = isRelated ? 'is-related' : node.featured ? 'is-featured' : 'is-primary';
    const nodeKindLabel = getNodeKindLabel(node);
    const detailHref = getNodeDetailHref(node);
    const detailLinkLabel = node.kind === 'related'
        ? 'Xem chi ti&#7871;t m&#7889;c n&agrave;y &rarr;'
        : 'Xem chi ti&#7871;t s&#7921; ki&#7879;n &rarr;';
    const panelSummary = getNodePanelSummary(node);

    return `
        <article class="map-event-node ${nodeClass} is-${node.align} is-panel-${node.panelDirection} ${isOpen ? 'is-open' : ''} ${isSelected ? 'is-selected' : ''}"
            style="--node-x: ${node.xPercent}; --node-y: ${node.yPercent};">
            <span class="map-event-dot" aria-hidden="true"></span>
            <div class="map-event-callout">
                <button class="map-event-trigger" type="button" data-node-id="${node.id}" aria-expanded="${isOpen ? 'true' : 'false'}">
                    ${nodeKindLabel ? `<span class="map-event-kind">${nodeKindLabel}</span>` : ''}
                    <span class="map-event-date">${node.date}</span>
                    <span class="map-event-name">${clipText(node.title, isRelated ? 58 : 74)}</span>
                    <span class="map-event-location-inline">${node.location}${node.external ? ' • quoc te' : ''}</span>
                </button>
                <div class="map-event-panel">
                    <span class="map-event-location">${node.location}</span>
                    <h3 class="map-event-panel-title">${node.title}</h3>
                    <div class="map-event-media">
                        <div class="map-event-image-wrap">
                            <img src="${node.image}" alt="${node.title}" loading="lazy">
                        </div>
                    </div>
                    <p class="map-event-panel-text">${panelSummary}</p>
                    <button
                        type="button"
                        class="map-event-detail-link"
                        data-inline-detail="${node.id}"
                        data-detail-href="${detailHref}"
                        aria-pressed="${isSelected ? 'true' : 'false'}">${detailLinkLabel}</button>
                </div>
            </div>
        </article>
    `;
}

function renderMapOverview(nodes, selectedDetailNode = null) {
    const presentation = getPresentationForCurrentEra();
    const activeNode = selectedDetailNode || nodes.find(node => node.id === activeNodeId);
    const eraInfo = getEraById(currentEra);
    const relatedCount = nodes.filter(node => node.kind === 'related').length;
    const primaryCount = nodes.filter(node => node.kind === 'primary').length;
    const overviewNote = selectedDetailNode
        ? `&#272;ang xem: ${selectedDetailNode.title} (${selectedDetailNode.date}).`
        : activeNode
            ? `&#272;ang ghim: ${activeNode.title} (${activeNode.date}).`
            : 'Di chuy&#7875;n chu&#7897;t v&agrave;o m&#7889;c &#273;&#7875; xem nhanh, b&#7845;m xem chi ti&#7871;t &#273;&#7875; m&#7903; b&agrave;i h&#7885;c ngay b&ecirc;n c&#7841;nh.';

    return `
        <aside class="timeline-map-overview">
            <span class="timeline-map-chip">Ch&uacute; gi&#7843;i b&#7843;n &#273;&#7891;</span>
            <h3 class="timeline-map-overview-title">${presentation.title}</h3>
            <p class="timeline-map-overview-desc">${presentation.description}</p>

            <div class="timeline-map-overview-stats">
                <div class="timeline-map-overview-stat">
                    <strong>${nodes.length}</strong>
                    <span>${currentEra === 'all' ? 't&#7893;ng m&#7889;c to&agrave;n k&#7923;' : 't&#7893;ng m&#7889;c hi&#7875;n th&#7883;'}</span>
                </div>
                <div class="timeline-map-overview-stat">
                    <strong>${primaryCount}</strong>
                    <span>s&#7921; ki&#7879;n ch&iacute;nh</span>
                </div>
                <div class="timeline-map-overview-stat">
                    <strong>${relatedCount}</strong>
                    <span>m&#7889;c ph&#7909; / li&ecirc;n &#273;&#7899;i</span>
                </div>
                <div class="timeline-map-overview-stat">
                    <strong>${nodes.filter(node => node.featured).length}</strong>
                    <span>s&#7921; ki&#7879;n l&#7899;n</span>
                </div>
            </div>

            <div class="timeline-map-overview-note is-accent">
                <h4>${eraInfo ? `${eraInfo.icon} ${eraInfo.name}` : 'To&agrave;n c&#7843;nh'}</h4>
                <p>${overviewNote}</p>
            </div>
        </aside>
    `;
}

function renderEraHub() {
    const container = document.getElementById('eventsGrid');
    if (!container) return;

    const eras = getBrowseEras();

    container.className = 'timeline-era-hub';
    container.innerHTML = `
        <section class="timeline-era-hub-shell">
            <div class="timeline-era-hub-header">
                <div>
                    <span class="timeline-map-chip">Các giai đoạn hiện có</span>
                    <h3 class="timeline-era-hub-title">Các giai đoạn lịch sử</h3>
                </div>
            </div>
            <div class="timeline-era-grid">
                ${eras.map(era => {
                    const eventCount = getAppData().events.filter(event => event.era === era.id).length;
                    const featuredCount = getAppData().events.filter(event => event.era === era.id && event.featured).length;
                    const presentation = ERA_MAP_PRESENTATION[era.id] || ERA_MAP_PRESENTATION.all;
                    const studyContent = getAppData().eraDetails?.[era.id];

                    return `
                        <a href="${getEraPageHref(era.id)}" class="timeline-era-card">
                            <span class="timeline-era-card-badge">${era.icon} ${era.name}</span>
                            <h4 class="timeline-era-card-title">${era.name}</h4>
                            ${era.period ? `<p class="timeline-era-card-period">${era.period}</p>` : ''}
                            <p class="timeline-era-card-desc">${clipText(studyContent?.introSummary || presentation.description, 190)}</p>
                            <div class="timeline-era-card-meta">
                                <span class="timeline-era-card-pill">${eventCount} sự kiện</span>
                                <span class="timeline-era-card-pill">${featuredCount} nổi bật</span>
                            </div>
                            <span class="timeline-era-card-cta">Mở trang giai đoạn →</span>
                        </a>
                    `;
                }).join('')}
            </div>
        </section>
    `;
}

function renderEraStudyIntro() {
    const studyContent = getStudyContentForCurrentEra();

    if (!studyContent) {
        return '';
    }

    const sections = studyContent.sections || [];
    const developmentStages = studyContent.developmentStages || [];
    const outcomes = studyContent.outcomes || [];
    const isExpanded = isMapExpandedForCurrentEra();
    const togglePrimaryLabel = isExpanded
        ? 'Ẩn bản đồ sự kiện'
        : (studyContent.mapLabel || 'Mở bản đồ sự kiện');
    const toggleSecondaryLabel = isExpanded
        ? 'Thu gọn bản đồ'
        : 'Hiển thị các mốc thời gian';
    const mapLauncher = `
        <aside class="timeline-map-launcher is-bottom" aria-label="Lối vào bản đồ sự kiện">
            <span class="timeline-map-launcher-badge">Bản đồ sự kiện</span>
            <h4 class="timeline-map-launcher-title">Các mốc chính</h4>
            <p class="timeline-map-launcher-desc">Các mốc thời gian tiêu biểu của giai đoạn.</p>
            <button class="timeline-map-toggle timeline-map-toggle-featured" type="button" data-map-toggle="${currentEra}" aria-expanded="${isExpanded ? 'true' : 'false'}">
                <span class="timeline-map-toggle-icon" aria-hidden="true">${isExpanded ? '✦' : '🧭'}</span>
                <span class="timeline-map-toggle-copy">
                    <strong>${togglePrimaryLabel}</strong>
                    <small>${toggleSecondaryLabel}</small>
                </span>
            </button>
        </aside>
    `;

    return `
        <section class="timeline-study-intro" data-aos="fade-up" data-aos-delay="220">
            <div class="timeline-study-hero is-header-only">
                <div class="timeline-study-header">
                    <span class="timeline-map-chip">Tổng quan giai đoạn</span>
                    <h3 class="timeline-study-title">${studyContent.title || studyContent.introTitle || 'Giai đoạn lịch sử'}</h3>
                    ${studyContent.subtitle ? `<p class="timeline-study-kicker">${studyContent.subtitle}</p>` : ''}
                    <p class="timeline-study-desc">${studyContent.introSummary}</p>
                </div>
            </div>

            ${sections.length ? `
            <div class="timeline-study-grid">
                ${sections.map(section => `
                    <article class="timeline-study-card">
                        <h4>${section.title}</h4>
                        <p>${section.text}</p>
                    </article>
                `).join('')}
            </div>
            ` : ''}

            ${developmentStages.length ? `
            <div class="timeline-stage-outline">
                <h4>${studyContent.stageHeading || 'Các chặng phát triển chính của giai đoạn'}</h4>
                <div class="timeline-stage-list">
                    ${developmentStages.map(stage => `
                        <${stage.href ? 'a' : 'article'} class="timeline-stage-item ${stage.href ? 'is-linked' : ''}" ${stage.href ? `href="${stage.href}"` : ''}>
                            <span class="timeline-stage-roman">${stage.roman || ''}</span>
                            <div class="timeline-stage-copy">
                                <h5>${stage.title}</h5>
                                ${stage.description ? `<p>${stage.description}</p>` : ''}
                                ${stage.href ? '<span class="timeline-stage-open">Mở bài học chi tiết →</span>' : ''}
                            </div>
                        </${stage.href ? 'a' : 'article'}>
                    `).join('')}
                </div>
            </div>
            ` : ''}

            ${outcomes.length ? `
            <div class="timeline-study-summary">
                <h4>Trọng tâm cần nhớ</h4>
                <ul class="timeline-study-list">
                    ${outcomes.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            ` : ''}

            ${mapLauncher}
        </section>
    `;
}

function renderMapExplorer() {
    const container = document.getElementById('eventsGrid');
    if (!container) return;

    if (currentEra === 'all') {
        renderEraHub();
        return;
    }

    const nodes = getTimelineNodes(getCurrentEvents());
    const presentation = getPresentationForCurrentEra();
    const referenceBackground = getReferenceBackground();
    const layout = getRouteLayout(nodes);
    const isExpanded = isMapExpandedForCurrentEra();

    if (!nodes.some(node => node.id === activeNodeId)) {
        activeNodeId = null;
    }

    container.className = 'timeline-map-explorer';
    container.innerHTML = `
        ${renderEraStudyIntro()}
        ${isExpanded ? `
            <div class="timeline-map-shell">
                <div class="timeline-map-main">
                    <div class="timeline-map-toolbar">
                        <span class="timeline-map-badge">${presentation.title}</span>
                        <p class="timeline-map-toolbar-desc">Các mốc sự kiện chính của giai đoạn.</p>
                    </div>
                    <div class="timeline-map-stage ${referenceBackground ? 'has-reference-map' : ''}" id="timelineMapStage">
                        ${renderMapBackdrop()}
                        ${renderReferenceBackground(referenceBackground)}
                        <div class="timeline-map-flow timeline-map-route-layout" style="--route-canvas-height: ${layout.height}px;">
                            ${renderRouteSvg(layout)}
                            ${renderDecorativeDots(layout)}
                            <div class="timeline-route-nodes">
                                ${layout.nodes.map(node => renderMapMarker(node)).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                ${renderMapOverview(nodes)}
            </div>
        ` : ''}
    `;

    bindMapInteractions(container);
}

function scrollMapExplorerIntoView(container) {
    const shell = container.querySelector('.timeline-map-shell');
    if (!shell) return;

    const navbar = document.getElementById('navbar');
    const navOffset = (navbar?.offsetHeight || 88) + 18;
    const shellTop = shell.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
        top: Math.max(0, shellTop),
        behavior: 'smooth'
    });
}

function pulseMapExplorer(container) {
    const shell = container.querySelector('.timeline-map-shell');
    if (!shell) return;

    shell.classList.remove('is-revealed');
    // Force reflow so the animation can replay on repeated opens.
    void shell.offsetWidth;
    shell.classList.add('is-revealed');

    window.setTimeout(() => {
        shell.classList.remove('is-revealed');
    }, 1500);
}

function bindMapInteractions(container) {
    container.querySelectorAll('[data-map-toggle]').forEach(button => {
        button.addEventListener('click', event => {
            event.stopPropagation();
            const willExpand = !expandedEraMaps.has(currentEra);

            if (!willExpand) {
                expandedEraMaps.delete(currentEra);
                activeNodeId = null;
            } else {
                expandedEraMaps.add(currentEra);
            }

            renderMapExplorer();
            setTimeout(() => {
                if (willExpand) {
                    scrollMapExplorerIntoView(container);
                    pulseMapExplorer(container);
                }
                window.AOS?.refresh();
            }, 120);
        });
    });

    container.querySelectorAll('.map-event-trigger').forEach(button => {
        button.addEventListener('click', event => {
            event.stopPropagation();
            const nodeId = button.dataset.nodeId;
            activeNodeId = activeNodeId === nodeId ? null : nodeId;
            renderMapExplorer();
            setTimeout(() => window.AOS?.refresh(), 100);
        });
    });

    const stage = container.querySelector('#timelineMapStage');
    if (!stage) return;

    stage.addEventListener('click', event => {
        if (event.target.closest('.map-event-trigger') || event.target.closest('.map-event-panel')) {
            return;
        }

        if (activeNodeId) {
            activeNodeId = null;
            renderMapExplorer();
            setTimeout(() => window.AOS?.refresh(), 100);
        }
    });
}

function openInlineDetail(nodeId, container, shouldScroll = false) {
    if (!nodeId) {
        return;
    }

    expandedEraMaps.add(currentEra);
    selectedDetailNodeId = nodeId;
    activeNodeId = nodeId;
    renderMapExplorer();

    setTimeout(() => {
        if (shouldScroll) {
            scrollMapExplorerIntoView(container);
        }

        window.AOS?.refresh();
    }, 120);
}

function closeInlineDetail(container) {
    selectedDetailNodeId = null;
    activeNodeId = null;
    renderMapExplorer();
    setTimeout(() => window.AOS?.refresh(), 100);
}

function toggleInlineDetail(nodeId, container) {
    if (!nodeId) {
        return;
    }

    if (selectedDetailNodeId === nodeId) {
        selectedDetailNodeId = null;
        activeNodeId = nodeId;
        renderMapExplorer();
        setTimeout(() => window.AOS?.refresh(), 100);
        return;
    }

    openInlineDetail(nodeId, container);
}

function handleInlineDetailNavigation(urlLike, container) {
    const targetUrl = urlLike instanceof URL ? urlLike : new URL(urlLike, window.location.href);
    const fileName = (targetUrl.pathname.split('/').pop() || '').toLowerCase();

    if (fileName === 'event.html') {
        const eventId = targetUrl.searchParams.get('id');
        const momentId = targetUrl.searchParams.get('moment') || '';
        const targetEvent = getAppData().events.find(event => event.id === eventId);

        if (!eventId || !targetEvent) {
            window.location.href = targetUrl.toString();
            return;
        }

        if (targetEvent.era !== currentEra) {
            window.location.href = `era.html?era=${encodeURIComponent(targetEvent.era)}&view=map&node=${encodeURIComponent(getNodeIdForDetailSelection(eventId, momentId))}`;
            return;
        }

        openInlineDetail(getNodeIdForDetailSelection(eventId, momentId), container);
        return;
    }

    if (fileName === 'era.html') {
        const targetEra = targetUrl.searchParams.get('era') || currentEra;

        if (targetEra === currentEra) {
            closeInlineDetail(container);
            return;
        }
    }

    window.location.href = targetUrl.toString();
}

function renderInlineDetailPane(node) {
    const detailSelection = getDetailNodeSelection(node);
    const detailResult = detailSelection && window.eventDetailRenderer?.buildRenderResult
        ? window.eventDetailRenderer.buildRenderResult(detailSelection, getAppData())
        : null;
    const detailTitle = node.kind === 'related'
        ? 'Chi ti&#7871;t m&#7889;c l&#7883;ch s&#7917;'
        : 'Chi ti&#7871;t s&#7921; ki&#7879;n';
    const detailHtml = detailResult?.html || renderEventNotFound();

    return `
        <aside class="timeline-map-detail-pane" aria-label="${detailTitle}">
            <div class="timeline-map-detail-header">
                <div class="timeline-map-detail-copy">
                    <span class="timeline-map-chip">${node.kind === 'related' ? 'M&#7889;c &#273;ang xem' : 'S&#7921; ki&#7879;n &#273;ang xem'}</span>
                    <h3 class="timeline-map-detail-title">${node.title}</h3>
                    <p class="timeline-map-detail-desc">${node.date}${node.location ? ` • ${node.location}` : ''}</p>
                </div>
                <button class="timeline-map-detail-close" type="button" data-inline-detail-close aria-label="Dong khung chi tiet">x</button>
            </div>
            <div class="timeline-map-detail-body">
                <div class="event-detail-page event-detail-page--inline">
                    ${detailHtml}
                </div>
            </div>
        </aside>
    `;
}

function bindMapInteractions(container) {
    container.querySelectorAll('[data-map-toggle]').forEach(button => {
        button.addEventListener('click', event => {
            event.stopPropagation();
            const willExpand = !expandedEraMaps.has(currentEra);

            if (!willExpand) {
                expandedEraMaps.delete(currentEra);
                activeNodeId = null;
                selectedDetailNodeId = null;
            } else {
                expandedEraMaps.add(currentEra);
            }

            renderMapExplorer();
            setTimeout(() => {
                if (willExpand) {
                    scrollMapExplorerIntoView(container);
                    pulseMapExplorer(container);
                }
                window.AOS?.refresh();
            }, 120);
        });
    });

    container.querySelectorAll('.map-event-trigger').forEach(button => {
        button.addEventListener('click', event => {
            event.stopPropagation();
            const nodeId = button.dataset.nodeId;

            if (selectedDetailNodeId === nodeId) {
                selectedDetailNodeId = null;
                activeNodeId = nodeId;
                renderMapExplorer();
                setTimeout(() => window.AOS?.refresh(), 100);
                return;
            }

            const shouldClosePin = activeNodeId === nodeId && selectedDetailNodeId !== nodeId;
            activeNodeId = shouldClosePin ? null : nodeId;
            renderMapExplorer();
            setTimeout(() => window.AOS?.refresh(), 100);
        });
    });

    container.querySelectorAll('[data-inline-detail]').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            toggleInlineDetail(button.dataset.inlineDetail, container);
        });
    });

    container.querySelectorAll('[data-inline-detail-close]').forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            closeInlineDetail(container);
        });
    });

    const detailPane = container.querySelector('.timeline-map-detail-pane');
    if (detailPane) {
        detailPane.addEventListener('click', event => {
            const anchor = event.target.closest('a[href]');

            if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) {
                return;
            }

            const targetUrl = new URL(anchor.href, window.location.href);

            if (targetUrl.origin !== window.location.origin) {
                return;
            }

            const fileName = (targetUrl.pathname.split('/').pop() || '').toLowerCase();
            if (fileName !== 'event.html' && fileName !== 'era.html') {
                return;
            }

            event.preventDefault();
            handleInlineDetailNavigation(targetUrl, container);
        });
    }

    const stage = container.querySelector('#timelineMapStage');
    if (!stage) return;

    stage.addEventListener('click', event => {
        if (event.target.closest('.map-event-trigger') || event.target.closest('.map-event-panel')) {
            return;
        }

        if (activeNodeId && !selectedDetailNodeId) {
            activeNodeId = null;
            renderMapExplorer();
            setTimeout(() => window.AOS?.refresh(), 100);
        }
    });
}

function renderMapExplorer() {
    const container = document.getElementById('eventsGrid');
    if (!container) return;

    if (currentEra === 'all') {
        renderEraHub();
        return;
    }

    const nodes = getTimelineNodes(getCurrentEvents());
    const presentation = getPresentationForCurrentEra();
    const referenceBackground = getReferenceBackground();
    const layout = getRouteLayout(nodes);
    const isExpanded = isMapExpandedForCurrentEra();
    const selectedDetailNode = nodes.find(node => node.id === selectedDetailNodeId) || null;

    if (selectedDetailNodeId && !selectedDetailNode) {
        selectedDetailNodeId = null;
    }

    if (!nodes.some(node => node.id === activeNodeId)) {
        activeNodeId = selectedDetailNode ? selectedDetailNode.id : null;
    }

    container.className = 'timeline-map-explorer';
    container.innerHTML = `
        ${renderEraStudyIntro()}
        ${isExpanded ? `
            <div class="timeline-map-shell ${selectedDetailNode ? 'has-inline-detail' : ''}">
                <div class="timeline-map-primary-column">
                    <div class="timeline-map-main">
                        <div class="timeline-map-toolbar">
                            <span class="timeline-map-badge">${presentation.title}</span>
                            <p class="timeline-map-toolbar-desc">CÃ¡c má»‘c sá»± kiá»‡n chÃ­nh cá»§a giai Ä‘oáº¡n.</p>
                        </div>
                        <div class="timeline-map-stage ${referenceBackground ? 'has-reference-map' : ''}" id="timelineMapStage">
                            ${renderMapBackdrop()}
                            ${renderReferenceBackground(referenceBackground)}
                            <div class="timeline-map-flow timeline-map-route-layout" style="--route-canvas-height: ${layout.height}px;">
                                ${renderRouteSvg(layout)}
                                ${renderDecorativeDots(layout)}
                                <div class="timeline-route-nodes">
                                    ${layout.nodes.map(node => renderMapMarker(node)).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                    ${renderMapOverview(nodes, selectedDetailNode)}
                </div>
                ${selectedDetailNode ? renderInlineDetailPane(selectedDetailNode) : ''}
            </div>
        ` : ''}
    `;

    if (isEraPage()) {
        syncEraUrl(currentEra);
    }

    bindMapInteractions(container);
}

function renderMapExplorer() {
    const container = document.getElementById('eventsGrid');
    if (!container) return;

    if (currentEra === 'all') {
        renderEraHub();
        return;
    }

    const nodes = getTimelineNodes(getCurrentEvents());
    const presentation = getPresentationForCurrentEra();
    const referenceBackground = getReferenceBackground();
    const layout = getRouteLayout(nodes);
    const isExpanded = isMapExpandedForCurrentEra();
    const selectedDetailNode = nodes.find(node => node.id === selectedDetailNodeId) || null;

    if (selectedDetailNodeId && !selectedDetailNode) {
        selectedDetailNodeId = null;
    }

    if (!nodes.some(node => node.id === activeNodeId)) {
        activeNodeId = selectedDetailNode ? selectedDetailNode.id : null;
    }

    container.className = 'timeline-map-explorer';
    container.innerHTML = `
        ${renderEraStudyIntro()}
        ${isExpanded ? `
            <div class="timeline-map-shell ${selectedDetailNode ? 'has-inline-detail' : ''}">
                <div class="timeline-map-primary-column">
                    <div class="timeline-map-main">
                        <div class="timeline-map-toolbar">
                            <span class="timeline-map-badge">${presentation.title}</span>
                            <p class="timeline-map-toolbar-desc">C&aacute;c m&#7889;c s&#7921; ki&#7879;n ch&iacute;nh c&#7911;a giai &#273;o&#7841;n.</p>
                        </div>
                        <div class="timeline-map-stage ${referenceBackground ? 'has-reference-map' : ''}" id="timelineMapStage">
                            ${renderMapBackdrop()}
                            ${renderReferenceBackground(referenceBackground)}
                            <div class="timeline-map-flow timeline-map-route-layout" style="--route-canvas-height: ${layout.height}px;">
                                ${renderRouteSvg(layout)}
                                ${renderDecorativeDots(layout)}
                                <div class="timeline-route-nodes">
                                    ${layout.nodes.map(node => renderMapMarker(node)).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                    ${renderMapOverview(nodes, selectedDetailNode)}
                </div>
                ${selectedDetailNode ? renderInlineDetailPane(selectedDetailNode) : ''}
            </div>
        ` : ''}
    `;

    if (isEraPage()) {
        syncEraUrl(currentEra);
    }

    bindMapInteractions(container);
}

// ==================== INITIALIZE TIMELINE PAGE ====================
document.addEventListener('DOMContentLoaded', async () => {
    appData = window.appDataService?.getData
        ? await window.appDataService.getData()
        : historicalData;
    window.eventDetailRenderer?.setData?.(appData);
    currentEra = getInitialEraFromUrl();
    selectedDetailNodeId = getInitialSelectedNodeIdFromUrl();
    activeNodeId = selectedDetailNodeId;

    if (shouldOpenMapOnLoad()) {
        expandedEraMaps.add(currentEra);
    }

    renderFocusPanel();
    renderEraFilter();
    renderMapExplorer();
    setTimeout(() => window.AOS?.refresh(), 200);
});
})();
