// ==================== SHARED: Dùng chung cho tất cả trang ====================

function getAppData() {
    return window.appDataService?.getSyncData?.() || historicalData;
}

window.appDataService?.getData?.().catch(() => undefined);

// ==================== INITIALIZE AOS ====================
AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic'
});

// ==================== DOM ELEMENTS ====================
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const backToTopBtn = document.getElementById('backToTop');
const scrollProgress = document.getElementById('scrollProgress');
const searchModal = document.getElementById('searchModal');
const openSearchBtn = document.getElementById('openSearch');
const closeSearchBtn = document.getElementById('closeSearch');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const openAIChatBtn = document.getElementById('openAIChat');
const closeAIChatBtn = document.getElementById('closeAIChat');
const aiChatModal = document.getElementById('aiChatModal');
const chatInput = document.getElementById('chatInput');
const sendMessageBtn = document.getElementById('sendMessage');
const chatMessages = document.getElementById('chatMessages');
const chatStatus = aiChatModal?.querySelector('.status') || null;
const IMAGE_FALLBACK_SRC = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
  <rect width="640" height="400" fill="#1b232d"/>
  <rect x="24" y="24" width="592" height="352" rx="24" fill="#243240" stroke="#5f7386" stroke-width="2"/>
  <text x="320" y="184" text-anchor="middle" fill="#f3efe5" font-family="Arial, sans-serif" font-size="30" font-weight="700">Khong tai duoc anh</text>
  <text x="320" y="224" text-anchor="middle" fill="#b3c0cb" font-family="Arial, sans-serif" font-size="18">Demo van tiep tuc an toan</text>
</svg>`)} `;

function applyImageFallback(imageElement) {
    if (!imageElement || imageElement.dataset.fallbackApplied === 'true') {
        return;
    }

    imageElement.dataset.fallbackApplied = 'true';
    imageElement.classList.add('app-image-fallback');
    imageElement.alt = imageElement.alt || 'Khong tai duoc anh';
    imageElement.src = IMAGE_FALLBACK_SRC;
}

function hydrateBrokenImages(root = document) {
    root.querySelectorAll('img').forEach(imageElement => {
        if (imageElement.complete && imageElement.naturalWidth === 0) {
            applyImageFallback(imageElement);
        }
    });
}

document.addEventListener('error', event => {
    const target = event.target;

    if (target?.tagName === 'IMG') {
        applyImageFallback(target);
    }
}, true);

window.addEventListener('app-data-ready', () => {
    window.requestAnimationFrame(() => hydrateBrokenImages());
});

document.addEventListener('DOMContentLoaded', () => {
    hydrateBrokenImages();
    window.setTimeout(() => hydrateBrokenImages(), 250);
});

// ==================== SCROLL EFFECTS ====================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Navbar
    if (navbar) {
        if (scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Back to top
    if (backToTopBtn) {
        if (scrollY > 600) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    // Scroll progress
    if (scrollProgress) {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
    }
});

// Back to top click
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==================== HAMBURGER MENU ====================
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
}

// ==================== ACTIVE NAV HIGHLIGHT ====================
(function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const isTimelineFamily = (currentPage === 'era.html' || currentPage === 'era-stage.html') && href === 'timeline.html';
        if (href === currentPage || isTimelineFamily || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
})();

// ==================== SEARCH ====================
if (openSearchBtn && searchModal) {
    openSearchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        setTimeout(() => searchInput.focus(), 300);
    });

    closeSearchBtn.addEventListener('click', () => {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchModal.classList.remove('active');
        }
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchModal.classList.add('active');
            setTimeout(() => searchInput.focus(), 300);
        }
    });

    searchInput.addEventListener('input', (e) => {
        const appData = getAppData();
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            searchResults.innerHTML = '';
            return;
        }

        const eventResults = appData.events.filter(ev =>
            ev.title.toLowerCase().includes(query) ||
            ev.description.toLowerCase().includes(query) ||
            ev.category.toLowerCase().includes(query) ||
            ev.year.toString().includes(query)
        );

        const figureResults = appData.figures.filter(fig =>
            fig.name.toLowerCase().includes(query) ||
            fig.title.toLowerCase().includes(query) ||
            fig.description.toLowerCase().includes(query)
        );

        let html = '';

        if (eventResults.length === 0 && figureResults.length === 0) {
            html = '<div style="text-align:center;color:var(--text-muted);padding:2rem;">Không tìm thấy kết quả</div>';
        } else {
            eventResults.forEach(ev => {
                html += `
                    <div class="search-result-item" onclick="window.location.href='event.html?id=${ev.id}'">
                        <span class="search-result-year">${ev.year}</span>
                        <div>
                            <div class="search-result-title">${ev.title}</div>
                            <div class="search-result-cat">📜 ${ev.category}</div>
                        </div>
                    </div>
                `;
            });

            figureResults.forEach(fig => {
                html += `
                    <div class="search-result-item" onclick="window.location.href='figures.html'">
                        <span class="search-result-year">${fig.years.split(' – ')[0]}</span>
                        <div>
                            <div class="search-result-title">${fig.name}</div>
                            <div class="search-result-cat">👤 ${fig.title}</div>
                        </div>
                    </div>
                `;
            });
        }

        searchResults.innerHTML = html;
    });
}

// ==================== AI CHAT ====================
const defaultChatStatusText = chatStatus?.textContent?.trim() || 'Sẵn sàng trợ giúp';
let activeAIContext = null;
let aiRequestInFlight = false;

if (openAIChatBtn && aiChatModal) {
    openAIChatBtn.addEventListener('click', () => {
        aiChatModal.classList.add('active');
        if (chatMessages.children.length === 0) {
            addAIMessage(window.historyAIService?.getGreeting?.() || getAppData().aiResponses.greeting);
        }
        syncAIContextUI();
        initDraggableChat();
    });

    const maximizeAIChatBtn = document.getElementById('maximizeAIChat');

    if (maximizeAIChatBtn) {
        maximizeAIChatBtn.addEventListener('click', () => {
            console.log('Maximize button clicked');
            aiChatModal.classList.toggle('maximized');
            const isMaximized = aiChatModal.classList.contains('maximized');
            maximizeAIChatBtn.innerHTML = isMaximized ? '🗗' : '🗖';
            maximizeAIChatBtn.title = isMaximized ? 'Thu nhỏ' : 'Phóng to';
            
            if (isMaximized) {
                // Xóa bỏ hoàn toàn các style do draggable tạo ra
                aiChatModal.style.transform = 'none';
                aiChatModal.style.top = '0';
                aiChatModal.style.left = '0';
                aiChatModal.style.right = '0';
                aiChatModal.style.bottom = '0';
                aiChatModal.style.width = '100%';
            } else {
                // Reset lại style khi thu nhỏ để draggable hoạt động lại bình thường
                aiChatModal.style.top = '';
                aiChatModal.style.left = '';
                aiChatModal.style.right = '2rem';
                aiChatModal.style.bottom = '2rem';
                aiChatModal.style.width = '400px';
                aiChatModal.style.transform = '';
                initDraggableChat();
            }
        });
    }

    closeAIChatBtn.addEventListener('click', () => {
        aiChatModal.classList.remove('active');
        aiChatModal.classList.remove('maximized');
        if (maximizeAIChatBtn) {
            maximizeAIChatBtn.innerHTML = '🗖';
            maximizeAIChatBtn.title = 'Phóng to';
        }
    });

    sendMessageBtn.addEventListener('click', () => sendChatMessage());
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendChatMessage();
    });
}

window.historyAIChat = {
    openFigureDetail(figureId) {
        const figure = window.historyAIService?.getFigureById?.(figureId);
        const prompt = window.historyAIService?.getFigurePrompt?.(figureId)
            || `Hãy giới thiệu chi tiết hơn về ${figure?.name || 'nhân vật này'} và dẫn nguồn tham khảo.`;

        activeAIContext = figure
            ? {
                type: 'figure',
                figureId: figure.id,
                figureName: figure.name
            }
            : null;

        aiChatModal?.classList.add('active');
        syncAIContextUI();

        if (chatMessages && chatMessages.children.length === 0) {
            addAIMessage(window.historyAIService?.getGreeting?.() || getAppData().aiResponses.greeting);
        }

        sendChatMessage(prompt);
    },
    clearContext() {
        activeAIContext = null;
        syncAIContextUI();
    }
};

function syncAIContextUI() {
    if (!chatStatus) {
        return;
    }

    if (activeAIContext?.type === 'figure' && activeAIContext.figureName) {
        chatStatus.textContent = `Đang hỏi về: ${activeAIContext.figureName}`;
        return;
    }

    chatStatus.textContent = defaultChatStatusText;
}

function setAIChatBusy(isBusy) {
    aiRequestInFlight = isBusy;

    if (sendMessageBtn) {
        sendMessageBtn.disabled = isBusy;
    }

    if (chatInput) {
        chatInput.disabled = isBusy;
    }
}

function escapeHtml(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatMessageText(value = '') {
    return escapeHtml(value).replace(/\n/g, '<br>');
}

async function sendChatMessage(forcedMessage = '') {
    if (aiRequestInFlight) {
        return;
    }

    const message = (forcedMessage || chatInput?.value || '').trim();
    if (!message) {
        return;
    }

    addUserMessage(message);

    if (chatInput) {
        chatInput.value = '';
    }

    setAIChatBusy(true);
    const loadingMessage = addLoadingAIMessage();

    try {
        const response = await window.historyAIService?.ask?.(message, {
            figureId: activeAIContext?.figureId || ''
        });

        replaceLoadingAIMessage(loadingMessage, response || {
            text: 'Tôi chưa thể xử lý câu hỏi lúc này.',
            sources: []
        });
    } catch (error) {
        replaceLoadingAIMessage(loadingMessage, {
            text: 'Không thể xử lý câu hỏi lúc này. Bạn hãy thử lại với một câu hỏi lịch sử cụ thể hơn.',
            sources: []
        });
    } finally {
        setAIChatBusy(false);
        chatInput?.focus();
    }
}

function addUserMessage(text) {
    const messageEl = document.createElement('div');
    messageEl.className = 'message user';
    messageEl.innerHTML = `
        <div class="message-content">
            <p>${formatMessageText(text)}</p>
        </div>
    `;
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addAIMessage(text) {
    const messageEl = document.createElement('div');
    messageEl.className = 'message ai';
    messageEl.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(question) {
    const q = question.toLowerCase();

    if (q.includes('điện biên phủ') || q.includes('điện biên')) {
        return '🏔️ Chiến thắng Điện Biên Phủ (7/5/1954) là chiến thắng "lừng lẫy năm châu, chấn động địa cầu". Sau 56 ngày đêm chiến đấu, quân đội Việt Nam do Đại tướng Võ Nguyên Giáp chỉ huy đã tiêu diệt và bắt sống toàn bộ 16.000 quân Pháp, chấm dứt hoàn toàn ách đô hộ thực dân.';
    } else if (q.includes('độc lập') || q.includes('2/9') || q.includes('tuyên ngôn')) {
        return '🇻🇳 Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa — nhà nước công nông đầu tiên ở Đông Nam Á.';
    } else if (q.includes('1975') || q.includes('giải phóng') || q.includes('30/4') || q.includes('thống nhất')) {
        return '🎆 Ngày 30/4/1975, Chiến dịch Hồ Chí Minh toàn thắng! Xe tăng húc đổ cổng Dinh Độc Lập, cờ giải phóng tung bay, kết thúc 30 năm chiến tranh và thống nhất đất nước.';
    } else if (q.includes('hồ chí minh') || q.includes('bác hồ')) {
        return '⭐ Chủ tịch Hồ Chí Minh (1890–1969) — Anh hùng giải phóng dân tộc, nhà văn hóa kiệt xuất được UNESCO vinh danh. Người đã cống hiến cả cuộc đời cho sự nghiệp giải phóng dân tộc và hạnh phúc của nhân dân.';
    } else if (q.includes('võ nguyên giáp') || q.includes('đại tướng')) {
        return '⚔️ Đại tướng Võ Nguyên Giáp (1911–2013) — "Người anh cả" của QDND Việt Nam. Ông được bạn bè quốc tế ca ngợi là một trong những vị tướng vĩ đại nhất thế kỷ XX, chỉ huy chiến thắng Điện Biên Phủ lẫy lừng.';
    } else if (q.includes('trường sơn') || q.includes('hồ chí minh trail')) {
        return '🛤️ Đường Trường Sơn (1959) — Tuyến đường huyết mạch dài hàng nghìn km xuyên dãy Trường Sơn, vận chuyển hàng triệu tấn vũ khí, đạn dược và binh lính từ Bắc vào Nam, quyết định thắng lợi cuộc kháng chiến.';
    } else if (q.includes('mậu thân') || q.includes('1968') || q.includes('tết mậu')) {
        return '💥 Tổng tiến công Tết Mậu Thân (30/1/1968) — Quân giải phóng đồng loạt tiến công vào hơn 100 thành phố, thị xã. Sự kiện này tạo bước ngoặt chiến tranh, buộc Mỹ phải xuống thang và đàm phán.';
    } else if (q.includes('paris') || q.includes('hiệp định')) {
        return '📜 Hiệp định Paris (27/1/1973) — Sau nhiều năm đàm phán, Mỹ buộc phải ký hiệp định, cam kết rút quân khỏi miền Nam, tôn trọng độc lập và toàn vẹn lãnh thổ Việt Nam.';
    } else if (q.includes('cách mạng') || q.includes('tháng 8') || q.includes('tháng tám')) {
        return '🔥 Cách mạng Tháng Tám (19/8/1945) — Cuộc cách mạng vĩ đại lật đổ ách đô hộ của Pháp-Nhật, xóa bỏ chế độ phong kiến, đưa nhân dân lao động lên nắm chính quyền.';
    } else if (q.includes('help') || q.includes('giúp') || q.includes('hỏi gì')) {
        return getAppData().aiResponses.help;
    } else {
        return getAppData().aiResponses.fallback;
    }
}

function renderAISources(sources = []) {
    if (!Array.isArray(sources) || sources.length === 0) {
        return '';
    }

    return `
        <div class="message-sources">
            <strong>Nguồn tham khảo</strong>
            <ul class="message-source-list">
                ${sources.map(source => `
                    <li class="message-source-item">
                        ${source.url
                            ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)}</a>`
                            : `<span>${escapeHtml(source.title)}</span>`}
                        <span class="message-source-meta">${escapeHtml(source.source || 'Dữ liệu website')}</span>
                        ${source.note ? `<span class="message-source-note">${escapeHtml(source.note)}</span>` : ''}
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function buildAIMessageHTML(payload) {
    const normalizedPayload = typeof payload === 'string'
        ? { text: payload, sources: [] }
        : {
            text: payload?.text || '',
            sources: Array.isArray(payload?.sources) ? payload.sources : [],
            asksForSources: Boolean(payload?.asksForSources)
        };

    const hasSources = normalizedPayload.sources.length > 0;
    // Chỉ hiển thị nút nguồn nếu có nguồn VÀ người dùng yêu cầu (asksForSources)
    const showSourcesUI = hasSources && normalizedPayload.asksForSources;

    return `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <p>${formatMessageText(normalizedPayload.text)}</p>
            ${showSourcesUI ? `
                <button class="show-sources-btn" onclick="this.nextElementSibling.classList.toggle('active'); this.textContent = this.nextElementSibling.classList.contains('active') ? 'Ẩn nguồn tham khảo' : 'Xem nguồn tham khảo';">
                    Xem nguồn tham khảo
                </button>
                <div class="sources-collapsible">
                    ${renderAISources(normalizedPayload.sources)}
                </div>
            ` : ''}
        </div>
    `;
}

function addAIMessage(payload) {
    const messageEl = document.createElement('div');
    messageEl.className = 'message ai';
    messageEl.innerHTML = buildAIMessageHTML(payload);
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return messageEl;
}

function addLoadingAIMessage() {
    return addAIMessage({
        text: 'Đang tra cứu dữ liệu lịch sử và tổng hợp câu trả lời...',
        sources: []
    });
}

function replaceLoadingAIMessage(messageEl, payload) {
    if (!messageEl) {
        addAIMessage(payload);
        return;
    }

    messageEl.innerHTML = buildAIMessageHTML(payload);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
// ==================== DRAGGABLE & RESIZABLE CHAT ====================
function initDraggableChat() {
    const modal = document.getElementById('aiChatModal');
    const header = modal?.querySelector('.chat-header');
    if (!modal || !header || modal.dataset.draggableInit === 'true') return;

    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;

    header.style.cursor = 'move';
    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);

    function dragStart(e) {
        if (e.target.closest('.chat-close') || e.target.closest('.chat-avatar')) return;
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        isDragging = true;
        modal.classList.add('is-dragging');
    }

    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            setTranslate(currentX, currentY, modal);
        }
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        modal.classList.remove('is-dragging');
    }

    modal.dataset.draggableInit = 'true';
}
