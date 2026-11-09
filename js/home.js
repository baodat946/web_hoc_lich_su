// ==================== HOME PAGE: Particles, Counter, Typing, Features ====================

function getAppData() {
    return window.appDataService?.getSyncData?.() || historicalData;
}

let heroAnimationsStarted = false;
const HERO_SUBTITLE_TEXT = 'Từ Cách mạng Tháng Tám năm 1945 đến mùa Xuân 1975, theo dõi các giai đoạn, sự kiện và nhân vật tiêu biểu qua hệ thống học tập trực quan.';

function clipText(text = '', limit = 150) {
    const normalized = (text || '').toString().replace(/\s+/g, ' ').trim();
    if (normalized.length <= limit) {
        return normalized;
    }

    return `${normalized.slice(0, limit).trimEnd()}...`;
}

function getEraById(eraId, appData = getAppData()) {
    return Array.isArray(appData?.eras)
        ? appData.eras.find(era => era.id === eraId)
        : undefined;
}

function seedHeroSubtitle() {
    const subtitle = document.getElementById('heroSubtitle');
    if (subtitle && !subtitle.textContent.trim()) {
        subtitle.textContent = HERO_SUBTITLE_TEXT;
    }
}

function setHomeSectionState(grid, hasContent) {
    const section = grid?.closest?.('section');
    if (!section) return;

    section.classList.toggle('home-section-ready', hasContent);
    section.classList.toggle('home-section-empty', !hasContent);
}

function renderGridMarkup(grid, markupItems, emptyTitle, emptyDescription) {
    if (!grid) return;

    const html = (Array.isArray(markupItems) ? markupItems : [])
        .filter(Boolean)
        .join('');

    if (html.trim()) {
        grid.innerHTML = html;
        setHomeSectionState(grid, true);
        return;
    }

    grid.innerHTML = `
        <div class="home-empty-state">
            <h3 class="home-empty-state-title">${emptyTitle}</h3>
            <p class="home-empty-state-desc">${emptyDescription}</p>
        </div>
    `;
    setHomeSectionState(grid, false);
}

async function resolveHomeData() {
    try {
        if (window.appDataService?.getData) {
            const appData = await window.appDataService.getData();
            if (appData) {
                return appData;
            }
        }
    } catch (error) {
        console.warn('[home] Falling back to local data.', error);
    }

    return historicalData;
}

// ==================== LOADING SCREEN ====================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loadingScreen');
        if (loader) {
            loader.classList.add('hidden');
            document.body.style.overflow = '';
            startHeroAnimations();
        }
    }, 1800);
});
document.body.style.overflow = 'hidden';

// ==================== PARTICLES ====================
function initParticles() {
    const canvas = document.getElementById('heroParticles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 60;

    function resize() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(220, 38, 38, ${this.opacity})`;
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(220, 38, 38, ${0.06 * (1 - dist / 120)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// ==================== ANIMATED COUNTER ====================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'), 10);
        const duration = 2000;
        const startTime = performance.now();

        function tick(now) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            counter.textContent = Math.round(target * eased);

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(tick);
    });
}

// ==================== TYPING EFFECT ====================
function typeText(element, text, speed = 40) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i += 1;
            setTimeout(type, speed);
        }
    }

    type();
}

function startHeroAnimations() {
    heroAnimationsStarted = true;
    initParticles();
    animateCounters();

    const subtitle = document.getElementById('heroSubtitle');
    if (subtitle) {
        typeText(subtitle, HERO_SUBTITLE_TEXT, 28);
    }
}

function renderHomeEras(appData = getAppData()) {
    const grid = document.getElementById('homeErasGrid');
    if (!grid) return;

    const eras = Array.isArray(appData?.eras)
        ? appData.eras.filter(era => era.id !== 'all')
        : [];
    const events = Array.isArray(appData?.events) ? appData.events : [];

    renderGridMarkup(
        grid,
        eras.map((era, index) => {
            const detail = appData.eraDetails?.[era.id];
            const eventCount = events.filter(event => event.era === era.id).length;
            const featuredCount = events.filter(event => event.era === era.id && event.featured).length;
            const stageCount = Array.isArray(detail?.developmentStages) ? detail.developmentStages.length : 0;
            const description = clipText(
                detail?.introSummary || `${era.name} là một giai đoạn quan trọng trong tiến trình lịch sử Việt Nam hiện đại.`,
                168
            );

            return `
                <a href="era.html?era=${encodeURIComponent(era.id)}" class="home-era-card" data-aos="fade-up" data-aos-delay="${index * 120}">
                    <div class="home-era-top">
                        <span class="home-era-badge">${era.icon} ${era.name}</span>
                        ${era.period ? `<span class="home-era-period">${era.period}</span>` : ''}
                    </div>
                    <div class="home-era-copy">
                        <h3 class="home-era-title">${era.name}</h3>
                        <p class="home-era-desc">${description}</p>
                    </div>
                    <div class="home-era-meta">
                        <span class="home-era-pill">${eventCount} sự kiện</span>
                        <span class="home-era-pill">${stageCount || featuredCount} ${stageCount ? 'chặng học' : 'nổi bật'}</span>
                    </div>
                    <span class="home-card-link">Vào học giai đoạn →</span>
                </a>
            `;
        }),
        'Các giai đoạn đang được sắp xếp lại',
        'Bạn vẫn có thể bắt đầu từ dòng thời gian tổng quan hoặc quay lại sau để xem đầy đủ các chặng học.'
    );
}

function renderFeaturedEvents(appData = getAppData()) {
    const grid = document.getElementById('homeFeaturedGrid');
    if (!grid) return;

    const featuredEvents = (Array.isArray(appData?.events) ? appData.events : [])
        .filter(event => event.featured)
        .slice(0, 4);

    renderGridMarkup(
        grid,
        featuredEvents.map((event, index) => {
            const era = getEraById(event.era, appData);
            const significance = clipText(event.significance, 138);

            return `
                <a href="event.html?id=${encodeURIComponent(event.id)}" class="home-event-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="home-event-image">
                        <img src="${event.image}" alt="${event.title}" loading="lazy">
                        <span class="home-event-badge">Sự kiện nổi bật</span>
                    </div>
                    <div class="home-event-body">
                        <div class="home-event-meta">
                            <span class="home-event-era">${era ? `${era.icon} ${era.name}` : 'Sự kiện lịch sử'}</span>
                            <span class="home-event-date">${event.date}</span>
                        </div>
                        <h3 class="home-event-title">${event.title}</h3>
                        <p class="home-event-desc">${clipText(event.description, 150)}</p>
                        ${significance ? `<p class="home-event-significance">${significance}</p>` : ''}
                        <span class="home-card-link">Xem sự kiện →</span>
                    </div>
                </a>
            `;
        }),
        'Chưa có mốc nổi bật để hiển thị',
        'Nội dung điểm nhấn sẽ xuất hiện tại đây khi dữ liệu sự kiện sẵn sàng.'
    );
}

function renderQuickLinks() {
    const grid = document.getElementById('quickLinksGrid');
    if (!grid) return;

    const quickLinks = [
        {
            icon: '🕰️',
            title: 'Dòng thời gian',
            description: 'Theo dõi các mốc lịch sử theo trình tự phát triển của từng giai đoạn.',
            href: 'timeline.html',
            cta: 'Mở dòng thời gian'
        },
        {
            icon: '🧭',
            title: 'Bản đồ sự kiện',
            description: 'Xem các mốc tiêu biểu trên bản đồ sự kiện của giai đoạn đang học.',
            href: 'era.html?era=chong-phap&view=map',
            cta: 'Mở bản đồ'
        },
        {
            icon: '👤',
            title: 'Nhân vật lịch sử',
            description: 'Tìm lại các nhân vật tiêu biểu gắn với từng thời kỳ và sự kiện.',
            href: 'figures.html',
            cta: 'Xem nhân vật'
        },
        {
            icon: '🧠',
            title: 'Kiểm tra kiến thức',
            description: 'Ôn tập nhanh bằng câu hỏi trắc nghiệm để ghi nhớ nội dung đã học.',
            href: 'quiz.html',
            cta: 'Làm quiz'
        }
    ];

    renderGridMarkup(
        grid,
        quickLinks.map((item, index) => `
            <a href="${item.href}" class="quick-link-card" data-aos="fade-up" data-aos-delay="${index * 90}">
                <span class="quick-link-icon">${item.icon}</span>
                <h3 class="quick-link-title">${item.title}</h3>
                <p class="quick-link-desc">${item.description}</p>
                <span class="home-card-link">${item.cta} →</span>
            </a>
        `),
        'Các lối vào nhanh đang cập nhật',
        'Những liên kết học tập chính sẽ xuất hiện lại ngay khi trang hoàn tất tải dữ liệu.'
    );
}

// ==================== RENDER FEATURES ====================
function hydrateHomeStats(stats) {
    if (!stats) return;

    const statValues = {
        events: stats.events,
        years: stats.years,
        figures: stats.figures,
        battles: stats.battles
    };

    document.querySelectorAll('.stat-number[data-stat-key]').forEach(counter => {
        const statKey = counter.dataset.statKey;
        const nextValue = statValues[statKey];

        if (typeof nextValue === 'number') {
            counter.setAttribute('data-count', String(nextValue));
            counter.textContent = '0';
        }
    });
}

function renderFeatures(appData = getAppData()) {
    const grid = document.getElementById('featuresGrid');
    if (!grid) return;

    const features = Array.isArray(appData?.features) ? appData.features : [];

    renderGridMarkup(
        grid,
        features.map((feature, index) => `
            <div class="feature-card" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="feature-icon">${feature.icon}</div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-desc">${feature.description}</p>
            </div>
        `),
        'Công cụ học tập đang được làm gọn',
        'Phần này sẽ hiển thị lại khi các khối nội dung hỗ trợ được nạp xong.'
    );
}

// ==================== INITIALIZE HOME ====================
document.addEventListener('DOMContentLoaded', async () => {
    seedHeroSubtitle();
    renderQuickLinks();

    const appData = await resolveHomeData();

    hydrateHomeStats(appData?.stats);

    if (heroAnimationsStarted) {
        animateCounters();
    }

    renderHomeEras(appData);
    renderFeaturedEvents(appData);
    renderFeatures(appData);
    document.body.classList.add('home-page-hydrated');

    if (window.AOS?.refresh) {
        setTimeout(() => window.AOS.refresh(), 200);
    }
});
