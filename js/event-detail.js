// ==================== EVENT / MOMENT / ERA-STAGE DETAIL PAGE ====================

let appData = historicalData;

function getAppData() {
    return appData || historicalData;
}

function getEventId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function getMomentId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('moment');
}

function getEraId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('era');
}

function getStageId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('stage');
}

function getEventById(id) {
    return getAppData().events.find(eventItem => eventItem.id === id);
}

function getEraById(id) {
    return getAppData().eras.find(eraItem => eraItem.id === id);
}

function getEraDetailById(id) {
    return getAppData().eraDetails?.[id] || null;
}

function getStageById(eraId, stageId) {
    return getEraDetailById(eraId)?.stageDetails?.[stageId] || null;
}

function getAdjacentEvents(id) {
    const events = getAppData().events;
    const index = events.findIndex(eventItem => eventItem.id === id);

    return {
        prev: index > 0 ? events[index - 1] : null,
        next: index < events.length - 1 ? events[index + 1] : null
    };
}

function getMomentStableId(event, moment, index) {
    if (!moment || typeof moment !== 'object') {
        return `${event.id}-related-${index}`;
    }

    return moment.id || `${event.id}-related-${index}`;
}

function getMomentById(event, momentId) {
    if (!event || !momentId || !Array.isArray(event.relatedMoments)) {
        return null;
    }

    const index = event.relatedMoments.findIndex(
        (moment, idx) => getMomentStableId(event, moment, idx) === momentId
    );

    if (index === -1) {
        return null;
    }

    return {
        ...event.relatedMoments[index],
        stableId: getMomentStableId(event, event.relatedMoments[index], index),
        index
    };
}

function getAdjacentMoments(event, currentMomentId) {
    if (!event || !Array.isArray(event.relatedMoments)) {
        return { prev: null, next: null };
    }

    const normalizedMoments = event.relatedMoments.map((moment, index) => ({
        ...moment,
        stableId: getMomentStableId(event, moment, index),
        index
    }));

    const currentIndex = normalizedMoments.findIndex(moment => moment.stableId === currentMomentId);

    return {
        prev: currentIndex > 0 ? normalizedMoments[currentIndex - 1] : null,
        next: currentIndex < normalizedMoments.length - 1 ? normalizedMoments[currentIndex + 1] : null
    };
}

function normalizeText(value = '') {
    return String(value)
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();
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

function getDetailParagraphs(record) {
    if (Array.isArray(record?.detailParagraphs) && record.detailParagraphs.length > 0) {
        return record.detailParagraphs.filter(Boolean);
    }

    return [];
}

function getDetailFlow(record) {
    if (Array.isArray(record?.detailFlow) && record.detailFlow.length > 0) {
        return record.detailFlow.filter(Boolean);
    }

    return getDetailParagraphs(record).map(text => ({
        type: 'paragraph',
        text
    }));
}

function getSectionFlow(section) {
    if (Array.isArray(section?.flow) && section.flow.length > 0) {
        return section.flow.filter(Boolean);
    }

    if (Array.isArray(section?.paragraphs) && section.paragraphs.length > 0) {
        return section.paragraphs.filter(Boolean).map(text => ({
            type: 'paragraph',
            text
        }));
    }

    return [];
}

function renderFlowBlocks(flow) {
    return flow.map(block => {
        if (!block || typeof block !== 'object') {
            return '';
        }

        if (block.type === 'image' && block.url) {
            return `
                <figure class="event-detail-inline-figure">
                    <img src="${block.url}" alt="${block.alt || block.title || 'Tư liệu minh họa'}" loading="lazy">
                    ${(block.title || block.caption || block.source) ? `
                        <figcaption class="event-detail-inline-caption">
                            ${block.title ? `<strong>${block.title}</strong>` : ''}
                            ${block.caption ? `<span>${block.caption}</span>` : ''}
                            ${block.source ? `<em>Nguồn: ${block.source}</em>` : ''}
                        </figcaption>
                    ` : ''}
                </figure>
            `;
        }

        if (block.type === 'video' && block.url) {
            const embedUrl = getYouTubeEmbedUrl(block.url);

            if (!embedUrl) {
                return '';
            }

            return `
                <article class="event-detail-inline-video">
                    <div class="detail-video-frame">
                        <iframe
                            src="${embedUrl}"
                            title="${block.title || 'Video minh họa'}"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            loading="lazy"></iframe>
                    </div>
                    ${(block.title || block.caption || block.source) ? `
                        <div class="event-detail-inline-caption is-video">
                            ${block.title ? `<strong>${block.title}</strong>` : ''}
                            ${block.caption ? `<span>${block.caption}</span>` : ''}
                            ${block.source ? `<em>Nguồn: ${block.source}</em>` : ''}
                        </div>
                    ` : ''}
                </article>
            `;
        }

        if (block.type === 'paragraph' && block.text) {
            return `<p>${block.text}</p>`;
        }

        if (block.type === 'list' && Array.isArray(block.items) && block.items.length > 0) {
            const tag = block.ordered ? 'ol' : 'ul';
            const className = block.ordered ? 'event-detail-inline-list is-ordered' : 'event-detail-inline-list';

            return `
                <${tag} class="${className}">
                    ${block.items.map(item => `<li>${item}</li>`).join('')}
                </${tag}>
            `;
        }

        return '';
    }).join('');
}

function getInlineMediaUrls(record) {
    const urls = new Set();

    getDetailFlow(record).forEach(block => {
        if (!block || typeof block !== 'object') {
            return;
        }

        const mediaUrl = block.url || block.src || '';

        if ((block.type === 'image' || block.type === 'video') && mediaUrl) {
            urls.add(mediaUrl);
        }
    });

    if (Array.isArray(record?.studySections)) {
        record.studySections.forEach(section => {
            getSectionFlow(section).forEach(block => {
                if (!block || typeof block !== 'object') {
                    return;
                }

                const mediaUrl = block.url || block.src || '';

                if ((block.type === 'image' || block.type === 'video') && mediaUrl) {
                    urls.add(mediaUrl);
                }
            });
        });
    }

    return urls;
}

function getImageMaterials(record, heroImage = '', excludedUrls = new Set()) {
    if (!Array.isArray(record?.materials)) {
        return [];
    }

    const seen = new Set(heroImage ? [heroImage] : []);
    excludedUrls.forEach(url => seen.add(url));

    return record.materials.filter(material => {
        const type = normalizeText(material.type);
        const url = material.url || '';
        const looksLikeImage = type.includes('anh')
            || /\.(png|jpe?g|gif|webp|avif|svg)(\?|$)/i.test(url)
            || /imgraw|thumb_w|image\//i.test(url);

        if (!looksLikeImage || seen.has(url)) {
            return false;
        }

        seen.add(url);
        return true;
    });
}

function getVideoMaterials(record, excludedUrls = new Set()) {
    if (!Array.isArray(record?.materials)) {
        return [];
    }

    return record.materials
        .map(material => ({
            ...material,
            embedUrl: getYouTubeEmbedUrl(material.url || '')
        }))
        .filter(material => Boolean(material.embedUrl) && !excludedUrls.has(material.url || ''));
}

function isUsableMaterialUrl(url = '') {
    const normalizedUrl = String(url || '').trim();
    return Boolean(normalizedUrl) && normalizedUrl !== '#';
}

function renderMaterials(
    materialOwner,
    headingTitle = 'Tham khảo thêm',
    headingDesc = 'Danh mục tư liệu và nguồn tham khảo.',
    variant = 'subtle'
) {
    if (!Array.isArray(materialOwner.materials) || materialOwner.materials.length === 0) {
        return '';
    }

    const sectionClass = variant === 'subtle' ? 'event-detail-sources is-subtle' : 'event-detail-sources';
    const listClass = variant === 'subtle' ? 'detail-source-list is-subtle' : 'detail-source-list';

    return `
        <div class="${sectionClass}" data-aos="fade-up" data-aos-delay="320">
            <div class="detail-panel-heading">
                <h3 class="detail-panel-title">${headingTitle}</h3>
                ${headingDesc ? `<p class="detail-panel-desc">${headingDesc}</p>` : ''}
            </div>
            <div class="${listClass}">
                ${materialOwner.materials.map(material => `
                    <article class="detail-source-card">
                        <div class="detail-source-top">
                            <span class="detail-source-kind">${material.type}</span>
                            ${material.source ? `<span class="detail-source-meta">${material.source}</span>` : ''}
                        </div>
                        ${isUsableMaterialUrl(material.url)
                            ? `
                                <a href="${material.url}" class="detail-source-link" target="_blank" rel="noopener noreferrer">
                                    ${material.title}
                                </a>
                            `
                            : `
                                <span class="detail-source-link is-unavailable" aria-disabled="true">
                                    ${material.title}
                                </span>
                            `}
                        ${material.note ? `<p class="detail-source-note">${material.note}</p>` : ''}
                        ${!isUsableMaterialUrl(material.url)
                            ? '<p class="detail-source-note is-status">Lien ket goc dang duoc bo sung de tranh vo demo.</p>'
                            : ''}
                    </article>
                `).join('')}
            </div>
        </div>
    `;
}

function renderNarrativeBlock(record, headingTitle = 'Nội dung chi tiết') {
    const flow = getDetailFlow(record);

    if (!flow.length) {
        return '';
    }

    return `
        <section class="event-detail-story" data-aos="fade-up" data-aos-delay="280">
            <div class="detail-panel-heading">
                <h3 class="detail-panel-title">${headingTitle}</h3>
            </div>
            <div class="event-detail-story-copy">${renderFlowBlocks(flow)}</div>
        </section>
    `;
}

function renderStudySections(record, headingTitle = 'Nội dung cần nắm') {
    if (!Array.isArray(record?.studySections) || record.studySections.length === 0) {
        return '';
    }

    const sections = record.studySections
        .map(section => {
            const flow = getSectionFlow(section);

            if (!flow.length) {
                return '';
            }

            return `
                <article class="event-study-card">
                    <div class="detail-panel-heading is-compact">
                        <h3 class="detail-panel-title">${section.title || 'Nội dung học tập'}</h3>
                        ${section.description ? `<p class="detail-panel-desc">${section.description}</p>` : ''}
                    </div>
                    <div class="event-detail-story-copy is-study-card">
                        ${renderFlowBlocks(flow)}
                    </div>
                </article>
            `;
        })
        .filter(Boolean);

    if (!sections.length) {
        return '';
    }

    return `
        <section class="event-study-sections" data-aos="fade-up" data-aos-delay="280">
            <div class="detail-panel-heading">
                <h3 class="detail-panel-title">${headingTitle}</h3>
            </div>
            <div class="event-study-grid">
                ${sections.join('')}
            </div>
        </section>
    `;
}

function renderLearningList(title, items, delay = 360, ordered = false) {
    const safeItems = Array.isArray(items) ? items.filter(Boolean) : [];

    if (!safeItems.length) {
        return '';
    }

    const tag = ordered ? 'ol' : 'ul';
    const itemClass = ordered ? 'event-learning-list is-ordered' : 'event-learning-list';

    return `
        <section class="event-learning-card" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="detail-panel-heading">
                <h3 class="detail-panel-title">${title}</h3>
            </div>
            <${tag} class="${itemClass}">
                ${safeItems.map(item => `<li>${item}</li>`).join('')}
            </${tag}>
        </section>
    `;
}

function renderMediaShowcase(record, heroImage = '', headingTitle = 'Hình ảnh và video minh họa') {
    const inlineMediaUrls = getInlineMediaUrls(record);
    const imageMaterials = getImageMaterials(record, heroImage, inlineMediaUrls);
    const videoMaterials = getVideoMaterials(record, inlineMediaUrls);

    if (!imageMaterials.length && !videoMaterials.length) {
        return '';
    }

    return `
        <section class="event-detail-media" data-aos="fade-up" data-aos-delay="340">
            <div class="detail-panel-heading">
                <h3 class="detail-panel-title">${headingTitle}</h3>
            </div>
            ${imageMaterials.length ? `
                <div class="detail-media-grid">
                    ${imageMaterials.map(material => `
                        <figure class="detail-media-card">
                            <img src="${material.url}" alt="${material.title}" loading="lazy">
                            <figcaption>
                                <strong>${material.title}</strong>
                                ${material.note ? `<span>${material.note}</span>` : ''}
                            </figcaption>
                        </figure>
                    `).join('')}
                </div>
            ` : ''}
            ${videoMaterials.length ? `
                <div class="detail-video-grid">
                    ${videoMaterials.map(material => `
                        <article class="detail-video-card">
                            <div class="detail-video-frame">
                                <iframe
                                    src="${material.embedUrl}"
                                    title="${material.title}"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    loading="lazy"></iframe>
                            </div>
                            <div class="detail-video-copy">
                                <strong>${material.title}</strong>
                                ${material.note ? `<span>${material.note}</span>` : ''}
                            </div>
                        </article>
                    `).join('')}
                </div>
            ` : ''}
        </section>
    `;
}

function renderRelatedMoments(event) {
    if (!Array.isArray(event.relatedMoments) || event.relatedMoments.length === 0) {
        return '';
    }

    return `
        <div class="event-detail-related" data-aos="fade-up" data-aos-delay="260">
            <h3 class="detail-panel-title">Bối cảnh / sự kiện liên đới</h3>
            <ul class="detail-bullet-list">
                ${event.relatedMoments.map((moment, index) => {
                    const momentId = getMomentStableId(event, moment, index);
                    const headline = [moment.title, moment.description]
                        .filter(Boolean)
                        .join(moment.title && moment.description ? ': ' : '');
                    const locationText = moment.location ? ` (${moment.location})` : '';

                    return `
                        <li class="detail-bullet-item">
                            <a href="event.html?id=${event.id}&moment=${encodeURIComponent(momentId)}" class="detail-source-link">
                                ${moment.date ? `${moment.date} - ` : ''}${headline}${locationText}
                            </a>
                        </li>
                    `;
                }).join('')}
            </ul>
        </div>
    `;
}

function renderEventNotFound() {
    return `
        <div class="event-not-found">
            <h2>Không tìm thấy nội dung</h2>
            <p>Sự kiện hoặc mốc lịch sử bạn đang tìm không tồn tại.</p>
            <a href="timeline.html" class="btn btn-primary">← Quay lại Dòng thời gian</a>
        </div>
    `;
}

function renderFactCard(title, items, delay = 220) {
    const rows = Array.isArray(items) ? items.filter(item => item && item.value) : [];

    if (!rows.length) {
        return '';
    }

    return `
        <section class="event-detail-side-card" data-aos="fade-left" data-aos-delay="${delay}">
            <div class="detail-panel-heading is-compact">
                <h3 class="detail-panel-title">${title}</h3>
            </div>
            <div class="event-detail-fact-list">
                ${rows.map(item => `
                    <div class="event-detail-fact-row">
                        <span class="event-detail-fact-label">${item.label}</span>
                        <span class="event-detail-fact-value">${item.value}</span>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}

function renderSideLinksCard(title, links, delay = 280, description = '') {
    const safeLinks = Array.isArray(links) ? links.filter(link => link && link.href && link.title) : [];

    if (!safeLinks.length) {
        return '';
    }

    return `
        <section class="event-detail-side-card" data-aos="fade-left" data-aos-delay="${delay}">
            <div class="detail-panel-heading is-compact">
                <h3 class="detail-panel-title">${title}</h3>
                ${description ? `<p class="detail-panel-desc">${description}</p>` : ''}
            </div>
            <div class="event-detail-side-links">
                ${safeLinks.map(link => `
                    <a
                        href="${link.href}"
                        class="event-detail-side-link ${link.accent ? 'is-accent' : ''}"
                        ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
                        ${link.meta ? `<span class="event-detail-side-link-meta">${link.meta}</span>` : ''}
                        <strong class="event-detail-side-link-title">${link.title}</strong>
                        ${link.copy ? `<span class="event-detail-side-link-copy">${link.copy}</span>` : ''}
                    </a>
                `).join('')}
            </div>
        </section>
    `;
}

function renderMiniTimeline(event) {
    return `
        <div class="event-mini-timeline" data-aos="fade-up" data-aos-delay="420">
            <h3 class="mini-timeline-title">Vị trí trong dòng thời gian</h3>
            <div class="mini-timeline-track">
                ${getAppData().events.map(eventItem => `
                    <a
                        href="event.html?id=${eventItem.id}"
                        class="mini-timeline-dot ${eventItem.id === event.id ? 'active' : ''}"
                        title="${eventItem.year} - ${eventItem.title}">
                        <span class="mini-dot-year">${eventItem.year}</span>
                        <div class="mini-dot-circle"></div>
                        <span class="mini-dot-label">${eventItem.title.length > 20 ? `${eventItem.title.substring(0, 18)}...` : eventItem.title}</span>
                    </a>
                `).join('')}
            </div>
        </div>
    `;
}

function renderPrimaryEventSidebar(event, eraInfo, prev, next) {
    const relatedLinks = Array.isArray(event.relatedMoments)
        ? event.relatedMoments.map((moment, index) => ({
            href: `event.html?id=${event.id}&moment=${encodeURIComponent(getMomentStableId(event, moment, index))}`,
            meta: moment.date || '',
            title: moment.title || 'Mốc liên quan',
            copy: moment.location || ''
        }))
        : [];

    const navigationLinks = [
        prev ? {
            href: `event.html?id=${prev.id}`,
            meta: 'Sự kiện trước',
            title: prev.title,
            copy: prev.date || prev.year || ''
        } : null,
        {
            href: `era.html?era=${encodeURIComponent(event.era)}`,
            meta: 'Quay lại bản đồ thời gian',
            title: eraInfo ? eraInfo.name : 'Dòng thời gian',
            copy: 'Xem lại toàn bộ mạch diễn biến của giai đoạn này.',
            accent: true
        },
        next ? {
            href: `event.html?id=${next.id}`,
            meta: 'Sự kiện tiếp theo',
            title: next.title,
            copy: next.date || next.year || ''
        } : null
    ].filter(Boolean);

    return `
        <aside class="event-detail-sidebar">
            <div class="event-detail-sidebar-inner">
                ${renderFactCard('Thông tin nhanh', [
                    { label: 'Thời gian', value: event.date },
                    { label: 'Giai đoạn', value: eraInfo ? `${eraInfo.icon} ${eraInfo.name}` : '' },
                    { label: 'Chủ đề', value: event.category || '' },
                    { label: 'Mốc liên đới', value: Array.isArray(event.relatedMoments) ? `${event.relatedMoments.length} mốc` : '' }
                ], 220)}
                ${renderSideLinksCard(
                    'Các mốc trong sự kiện',
                    relatedLinks,
                    280,
                    'Danh sách các mốc liên quan trong cùng sự kiện.'
                )}
                ${renderSideLinksCard('Di chuyển nhanh', navigationLinks, 340)}
            </div>
        </aside>
    `;
}

function renderMomentSidebar(event, moment, eraInfo, prev, next) {
    const overviewLinks = [
        {
            href: `event.html?id=${event.id}`,
            meta: 'Sự kiện chủ đạo',
            title: event.title,
            copy: 'Quay về bài tổng quan để nhìn toàn cảnh và các mốc liên quan.'
        },
        {
            href: `era.html?era=${encodeURIComponent(event.era)}`,
            meta: 'Bản đồ thời gian',
            title: eraInfo ? eraInfo.name : 'Dòng thời gian',
            copy: 'Xem lại vị trí của mốc này trong toàn bộ giai đoạn.',
            accent: true
        }
    ];

    const navigationLinks = [
        prev ? {
            href: `event.html?id=${event.id}&moment=${encodeURIComponent(prev.stableId)}`,
            meta: 'Mốc trước',
            title: prev.title,
            copy: prev.date || ''
        } : {
            href: `event.html?id=${event.id}`,
            meta: 'Quay về sự kiện chính',
            title: event.title,
            copy: event.date || ''
        },
        next ? {
            href: `event.html?id=${event.id}&moment=${encodeURIComponent(next.stableId)}`,
            meta: 'Mốc tiếp theo',
            title: next.title,
            copy: next.date || ''
        } : {
            href: `event.html?id=${event.id}`,
            meta: 'Khép lại chuỗi mốc',
            title: event.title,
            copy: 'Quay lại trang tổng quan của sự kiện.'
        }
    ];

    return `
        <aside class="event-detail-sidebar">
            <div class="event-detail-sidebar-inner">
                ${renderFactCard('Thông tin nhanh', [
                    { label: 'Thời gian', value: moment.date || event.date },
                    { label: 'Địa điểm', value: moment.location || '' },
                    { label: 'Giai đoạn', value: eraInfo ? `${eraInfo.icon} ${eraInfo.name}` : '' },
                    {
                        label: 'Vị trí trong chuỗi',
                        value: Array.isArray(event.relatedMoments) ? `${moment.index + 1}/${event.relatedMoments.length}` : ''
                    }
                ], 220)}
                ${renderSideLinksCard('Nhìn rộng hơn', overviewLinks, 280)}
                ${renderSideLinksCard('Di chuyển qua các mốc', navigationLinks, 340)}
            </div>
        </aside>
    `;
}

function renderEraStageSidebar(stage, eraInfo, relatedLinks = []) {
    const navigationLinks = [
        {
            href: `era.html?era=${encodeURIComponent(eraInfo?.id || '')}`,
            meta: 'Bài học giai đoạn',
            title: eraInfo ? eraInfo.name : 'Bài học giai đoạn',
            copy: 'Bối cảnh và các chặng phát triển của giai đoạn.'
        },
        {
            href: `era.html?era=${encodeURIComponent(eraInfo?.id || '')}&view=map`,
            meta: 'Bản đồ sự kiện',
            title: 'Xem bản đồ sự kiện',
            copy: 'Các mốc sự kiện của giai đoạn.',
            accent: true
        }
    ];

    return `
        <aside class="event-detail-sidebar">
            <div class="event-detail-sidebar-inner">
                ${renderFactCard('Thông tin nhanh', [
                    { label: 'Thời gian', value: stage.period || '' },
                    { label: 'Giai đoạn', value: eraInfo ? `${eraInfo.icon} ${eraInfo.name}` : '' },
                    { label: 'Vị trí trong giai đoạn', value: stage.label || '' },
                    { label: 'Trọng tâm', value: stage.focus || '' }
                ], 220)}
                ${renderSideLinksCard(
                    'Sự kiện tiêu biểu của chặng',
                    relatedLinks,
                    280,
                    'Các sự kiện tiêu biểu trong cùng giai đoạn.'
                )}
                ${renderSideLinksCard('Di chuyển nhanh', navigationLinks, 340)}
            </div>
        </aside>
    `;
}

function renderPrimaryEventDetail(event) {
    const eraInfo = getAppData().eras.find(era => era.id === event.era);
    const { prev, next } = getAdjacentEvents(event.id);

    return `
        <nav class="breadcrumb" data-aos="fade-down">
            <a href="index.html">🏠 Trang chủ</a>
            <span class="breadcrumb-sep">›</span>
            <a href="${eraInfo ? `era.html?era=${encodeURIComponent(event.era)}` : 'timeline.html'}">📜 Dòng thời gian</a>
            <span class="breadcrumb-sep">›</span>
            <span class="breadcrumb-current">${event.title}</span>
        </nav>

        <div class="event-detail-hero" data-aos="fade-up">
            <div class="event-detail-image">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-detail-overlay"></div>
                <div class="event-detail-meta">
                    <span class="event-detail-date-badge">🗓️ ${event.date}</span>
                    ${eraInfo ? `<span class="event-detail-era-badge">${eraInfo.icon} ${eraInfo.name}</span>` : ''}
                    ${event.featured ? '<span class="event-detail-featured-badge">⭐ Sự kiện nổi bật</span>' : ''}
                </div>
            </div>
        </div>

        <section class="event-detail-layout">
            <article class="event-detail-main">
                <div class="event-detail-content event-detail-intro" data-aos="fade-up" data-aos-delay="200">
                    <span class="event-detail-tag">${event.category}</span>
                    <h1 class="event-detail-title">${event.title}</h1>
                    <div class="event-detail-description">
                        <p>${event.description}</p>
                    </div>
                </div>

                <div class="event-detail-significance" data-aos="fade-up" data-aos-delay="240">
                    <h3>Ý nghĩa lịch sử</h3>
                    <p>${event.significance}</p>
                </div>

                ${renderNarrativeBlock(event, 'Nội dung khái quát')}
                ${renderStudySections(event)}
                ${renderMediaShowcase(event, event.image)}
                ${renderRelatedMoments(event)}
                ${renderLearningList('Ghi nhớ nhanh', event.keyTakeaways, 400)}
                ${renderLearningList('Câu hỏi tự ôn tập', event.reviewQuestions, 440, true)}

                ${event.stats ? `
                    <div class="event-detail-stats" data-aos="fade-up" data-aos-delay="380">
                        <div class="detail-stat">
                            <span class="detail-stat-value">${event.stats.days}</span>
                            <span class="detail-stat-label">Ngày chiến đấu</span>
                        </div>
                        <div class="detail-stat">
                            <span class="detail-stat-value">${event.stats.casualties.toLocaleString()}</span>
                            <span class="detail-stat-label">Địch bị tiêu diệt</span>
                        </div>
                    </div>
                ` : ''}
            </article>

            ${renderPrimaryEventSidebar(event, eraInfo, prev, next)}
        </section>

        ${renderMiniTimeline(event)}
        ${renderMaterials(
            event,
            'Tham khảo thêm',
            'Nguồn tham khảo nằm ở cuối trang để tiện tra cứu khi cần, không làm gián đoạn mạch đọc chính.',
            'subtle'
        )}
    `;
}

function renderMomentDetail(event, moment) {
    const eraInfo = getAppData().eras.find(era => era.id === event.era);
    const { prev, next } = getAdjacentMoments(event, moment.stableId);
    const detailImage = moment.image || event.image;
    const detailTitle = moment.title || event.title;
    const detailDescription = moment.description || event.description;
    const detailSignificance = moment.significance || '';

    return `
        <nav class="breadcrumb" data-aos="fade-down">
            <a href="index.html">🏠 Trang chủ</a>
            <span class="breadcrumb-sep">›</span>
            <a href="${eraInfo ? `era.html?era=${encodeURIComponent(event.era)}` : 'timeline.html'}">📜 Dòng thời gian</a>
            <span class="breadcrumb-sep">›</span>
            <a href="event.html?id=${event.id}">${event.title}</a>
            <span class="breadcrumb-sep">›</span>
            <span class="breadcrumb-current">${detailTitle}</span>
        </nav>

        <div class="event-detail-hero" data-aos="fade-up">
            <div class="event-detail-image">
                <img src="${detailImage}" alt="${detailTitle}">
                <div class="event-detail-overlay"></div>
                <div class="event-detail-meta">
                    <span class="event-detail-date-badge">🗓️ ${moment.date || event.date}</span>
                    ${eraInfo ? `<span class="event-detail-era-badge">${eraInfo.icon} ${eraInfo.name}</span>` : ''}
                    <span class="event-detail-featured-badge">Mốc lịch sử</span>
                </div>
            </div>
        </div>

        <section class="event-detail-layout">
            <article class="event-detail-main">
                <div class="event-detail-content event-detail-intro" data-aos="fade-up" data-aos-delay="200">
                    <span class="event-detail-tag">Mốc lịch sử</span>
                    <h1 class="event-detail-title">${detailTitle}</h1>
                    <div class="event-detail-description">
                        <p>${detailDescription}</p>
                    </div>
                </div>

                ${detailSignificance ? `
                    <div class="event-detail-significance" data-aos="fade-up" data-aos-delay="240">
                        <h3>Ý nghĩa của mốc này</h3>
                        <p>${detailSignificance}</p>
                    </div>
                ` : ''}

                ${renderStudySections(moment) || renderNarrativeBlock(moment, 'Diễn biến và ý nghĩa mở rộng')}
                ${renderMediaShowcase(moment, detailImage, 'Hình ảnh và tư liệu minh họa')}
                ${renderLearningList('Ghi nhớ nhanh', moment.keyTakeaways, 380)}
                ${renderLearningList('Câu hỏi tự ôn tập', moment.reviewQuestions, 420, true)}
            </article>

            ${renderMomentSidebar(event, moment, eraInfo, prev, next)}
        </section>

        ${renderMaterials(
            moment,
            'Tham khảo thêm',
            'Các link gốc của mốc này được giữ ở cuối trang để đối chiếu hoặc tra cứu sâu hơn khi cần.',
            'subtle'
        )}
    `;
}

function renderEraStageDetail(eraInfo, eraDetail, stage) {
    const relatedLinks = Array.isArray(stage.relatedEventIds)
        ? stage.relatedEventIds
            .map(id => getEventById(id))
            .filter(Boolean)
            .map(event => ({
                href: `event.html?id=${event.id}`,
                meta: event.date || event.year || '',
                title: event.title,
                copy: event.description || ''
            }))
        : [];
    const heroMarkup = stage.image ? `
        <div class="event-detail-hero" data-aos="fade-up">
            <div class="event-detail-image">
                <img src="${stage.image}" alt="${stage.title}">
                <div class="event-detail-overlay"></div>
                <div class="event-detail-meta">
                    ${stage.period ? `<span class="event-detail-date-badge">🗓️ ${stage.period}</span>` : ''}
                    ${eraInfo ? `<span class="event-detail-era-badge">${eraInfo.icon} ${eraInfo.name}</span>` : ''}
                    <span class="event-detail-featured-badge">${stage.label || 'Chặng học tập'}</span>
                </div>
            </div>
        </div>
    ` : `
        <section class="event-stage-hero is-text-only" data-aos="fade-up">
            <div class="event-stage-hero-meta">
                ${stage.period ? `<span class="event-detail-date-badge">🗓️ ${stage.period}</span>` : ''}
                ${eraInfo ? `<span class="event-detail-era-badge">${eraInfo.icon} ${eraInfo.name}</span>` : ''}
                <span class="event-detail-featured-badge">${stage.label || 'Chặng học tập'}</span>
            </div>
            <p class="event-stage-hero-copy">${stage.focus || stage.description || ''}</p>
        </section>
    `;

    return `
        <nav class="breadcrumb" data-aos="fade-down">
            <a href="index.html">🏠 Trang chủ</a>
            <span class="breadcrumb-sep">›</span>
            <a href="timeline.html">📜 Dòng thời gian</a>
            <span class="breadcrumb-sep">›</span>
            <a href="era.html?era=${encodeURIComponent(eraInfo?.id || '')}">${eraDetail?.title || eraInfo?.name || 'Giai đoạn lịch sử'}</a>
            <span class="breadcrumb-sep">›</span>
            <span class="breadcrumb-current">${stage.title}</span>
        </nav>

        ${heroMarkup}

        <section class="event-detail-layout">
            <article class="event-detail-main">
                <div class="event-detail-content event-detail-intro" data-aos="fade-up" data-aos-delay="200">
                    <span class="event-detail-tag">${stage.tag || 'Chặng phát triển'}</span>
                    <h1 class="event-detail-title">${stage.title}</h1>
                    <div class="event-detail-description">
                        <p>${stage.description}</p>
                    </div>
                </div>

                ${stage.significance ? `
                    <div class="event-detail-significance" data-aos="fade-up" data-aos-delay="240">
                        <h3>Ý nghĩa của chặng này</h3>
                        <p>${stage.significance}</p>
                    </div>
                ` : ''}

                ${renderStudySections(stage, 'Nội dung trọng tâm của chặng')}
                ${renderNarrativeBlock(stage, 'Diễn biến khái quát')}
                ${renderMediaShowcase(stage, stage.image, 'Tư liệu minh họa')}
                ${renderLearningList('Ghi nhớ nhanh', stage.keyTakeaways, 380)}
                ${renderLearningList('Câu hỏi tự ôn tập', stage.reviewQuestions, 420, true)}
            </article>

            ${renderEraStageSidebar(stage, eraInfo, relatedLinks)}
        </section>

        ${renderMaterials(
            stage,
            'Tham khảo thêm',
            'Danh mục tư liệu và nguồn tham khảo.',
            'subtle'
        )}
    `;
}

function getDetailSelectionFromQuery(search = window.location.search) {
    const params = search instanceof URLSearchParams ? search : new URLSearchParams(search);

    return {
        eventId: params.get('id'),
        momentId: params.get('moment'),
        eraId: params.get('era'),
        stageId: params.get('stage')
    };
}

function buildDetailRenderResult(selection = {}, data = null) {
    if (data) {
        appData = data;
    }

    const eventId = selection.eventId || selection.id || '';
    const momentId = selection.momentId || selection.moment || '';
    const eraId = selection.eraId || selection.era || '';
    const stageId = selection.stageId || selection.stage || '';
    const fallbackTitle = 'Chi tiết sự kiện | Lịch Sử Việt Nam';

    if (stageId) {
        const eraInfo = getEraById(eraId);
        const eraDetail = getEraDetailById(eraId);
        const stage = getStageById(eraId, stageId);

        if (!eraInfo || !eraDetail || !stage) {
            return {
                found: false,
                type: 'not-found',
                title: fallbackTitle,
                html: renderEventNotFound()
            };
        }

        return {
            found: true,
            type: 'stage',
            title: `${stage.title} | Lịch Sử Việt Nam`,
            html: renderEraStageDetail(eraInfo, eraDetail, stage),
            stage,
            eraInfo,
            eraDetail
        };
    }

    const event = getEventById(eventId);

    if (!event) {
        return {
            found: false,
            type: 'not-found',
            title: fallbackTitle,
            html: renderEventNotFound()
        };
    }

    if (momentId) {
        const moment = getMomentById(event, momentId);

        if (!moment) {
            return {
                found: false,
                type: 'not-found',
                title: fallbackTitle,
                html: renderEventNotFound()
            };
        }

        return {
            found: true,
            type: 'moment',
            title: `${moment.title} | Lịch Sử Việt Nam`,
            html: renderMomentDetail(event, moment),
            event,
            moment
        };
    }

    return {
        found: true,
        type: 'event',
        title: `${event.title} | Lịch Sử Việt Nam`,
        html: renderPrimaryEventDetail(event),
        event
    };
}

function renderSelectionIntoContainer(container, selection, data = null, options = {}) {
    if (!container) {
        return null;
    }

    const result = buildDetailRenderResult(selection, data);
    container.innerHTML = result.html;

    if (options.updateDocumentTitle !== false && result.title) {
        document.title = result.title;
    }

    return result;
}

function renderEventDetail() {
    const container = document.getElementById('eventDetailContainer');

    if (!container) {
        return null;
    }

    return renderSelectionIntoContainer(container, getDetailSelectionFromQuery(), null, {
        updateDocumentTitle: true
    });
}

window.eventDetailRenderer = {
    getSelectionFromQuery: getDetailSelectionFromQuery,
    buildRenderResult: buildDetailRenderResult,
    renderIntoContainer: renderSelectionIntoContainer,
    setData(data) {
        if (data) {
            appData = data;
        }

        return appData;
    }
};

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('eventDetailContainer');

    if (!container) {
        return;
    }

    appData = window.appDataService?.getData
        ? await window.appDataService.getData()
        : historicalData;

    renderEventDetail();

    setTimeout(() => {
        if (window.AOS?.refresh) {
            window.AOS.refresh();
        }
    }, 200);
});
