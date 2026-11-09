// ==================== FIGURES PAGE ====================

function getAppData() {
    return window.appDataService?.getSyncData?.() || historicalData;
}

function renderFigures(appData = getAppData()) {
    const grid = document.getElementById('figuresGrid');
    if (!grid) return;
    grid.innerHTML = appData.figures.map((fig, i) => `
        <div class="figure-card" data-aos="fade-up" data-aos-delay="${(i % 4) * 100}">
            <div class="figure-image">
                <img src="${fig.image}" alt="${fig.name}" loading="lazy">
            </div>
            <div class="figure-body">
                <div class="figure-title-wrap">
                    <h3 class="figure-name">${fig.name}</h3>
                    <span class="figure-role">${fig.title}</span>
                </div>
                <p class="figure-years">${fig.years}</p>
                <p class="figure-desc">${fig.description}</p>
                <div class="figure-actions">
                    <button class="figure-ai-btn" type="button" data-figure-id="${fig.id}">
                        Hỏi AI về nhân vật này
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', async () => {
    const appData = window.appDataService?.getData
        ? await window.appDataService.getData()
        : historicalData;

    renderFigures(appData);
    document.getElementById('figuresGrid')?.addEventListener('click', event => {
        const button = event.target.closest('.figure-ai-btn');
        if (!button) {
            return;
        }

        const figureId = button.dataset.figureId || '';
        window.historyAIChat?.openFigureDetail?.(figureId);
    });
    setTimeout(() => AOS.refresh(), 200);
});
