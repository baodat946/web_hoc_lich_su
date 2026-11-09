// ==================== QUIZ PAGE ====================

const QUESTIONS_PER_LEVEL = 10;
const LEVEL_COPY = {
    1: {
        title: 'Cấp độ 1: Cơ bản',
        description: 'Ôn lại các mốc thời gian, nhân vật và sự kiện tiêu biểu nhất.'
    },
    2: {
        title: 'Cấp độ 2: Nhận biết mở rộng',
        description: 'Củng cố thêm các ngày tháng, địa điểm và kết quả trực tiếp của sự kiện.'
    },
    3: {
        title: 'Cấp độ 3: Thông hiểu',
        description: 'Đi sâu hơn vào các văn kiện, chiến dịch và mối liên hệ trong tiến trình lịch sử.'
    },
    4: {
        title: 'Cấp độ 4: Vận dụng',
        description: 'Kiểm tra khả năng ghép nối sự kiện, chiến lược và ý nghĩa lịch sử.'
    },
    5: {
        title: 'Cấp độ 5: Nâng cao',
        description: 'Tổng hợp và đánh giá các bước ngoặt lớn trong lịch sử Việt Nam hiện đại.'
    }
};

let currentLevelIndex = 0;
let currentQuestionIndex = 0;
let totalScore = 0;
let totalAnsweredCount = 0;
let levelScore = 0;
let levelAnsweredCount = 0;
let quizData = historicalData;
let normalizedQuestions = [];
let orderedLevels = [];

const quizContainer = document.getElementById('quizContainer');

function getQuizData() {
    return quizData || historicalData;
}

function normalizeQuizQuestions(questions = []) {
    return (Array.isArray(questions) ? questions : [])
        .map((question, index) => ({
            ...question,
            level: Number(question.level) || Math.floor(index / QUESTIONS_PER_LEVEL) + 1
        }))
        .sort((left, right) => {
            const levelDiff = left.level - right.level;
            if (levelDiff !== 0) {
                return levelDiff;
            }

            return Number(left.id || 0) - Number(right.id || 0);
        });
}

function getOrderedLevels() {
    return Array.from(new Set(normalizedQuestions.map(question => question.level))).sort((a, b) => a - b);
}

function getCurrentLevel() {
    return orderedLevels[currentLevelIndex] || 1;
}

function getCurrentLevelQuestions() {
    const level = getCurrentLevel();
    return normalizedQuestions.filter(question => question.level === level);
}

function getCurrentQuestion() {
    return getCurrentLevelQuestions()[currentQuestionIndex] || null;
}

function getLevelMeta(level) {
    return LEVEL_COPY[level] || {
        title: `Cấp độ ${level}`,
        description: 'Tiếp tục ôn tập với nhóm câu hỏi kế tiếp.'
    };
}

function getEncouragementMessage(score, total) {
    if (score === total) {
        return 'Bạn hoàn thành rất tốt cấp độ này và có thể chuyển sang nhóm câu hỏi khó hơn.';
    }

    if (score >= total * 0.7) {
        return 'Kết quả khá tốt. Bạn có thể tiếp tục sang cấp độ tiếp theo để củng cố thêm.';
    }

    if (score >= total * 0.5) {
        return 'Bạn đã nắm được một phần kiến thức. Nên xem lại lời giải trước khi sang cấp độ tiếp theo.';
    }

    return 'Bạn nên xem lại các bài học liên quan rồi thử tiếp để củng cố chắc hơn.';
}

function updateHeroDescription() {
    const heroDesc = document.querySelector('.page-hero-desc');
    if (!heroDesc) {
        return;
    }

    const totalQuestions = normalizedQuestions.length;
    const totalLevels = orderedLevels.length;
    heroDesc.textContent = `${totalQuestions} câu hỏi theo ${totalLevels} cấp độ từ dễ đến khó — ôn tập từng bước để nắm chắc tiến trình lịch sử Việt Nam.`;
}

function renderQuiz() {
    if (!quizContainer) {
        return;
    }

    const level = getCurrentLevel();
    const batchQuestions = getCurrentLevelQuestions();
    const currentQuestion = getCurrentQuestion();
    const levelMeta = getLevelMeta(level);
    const totalQuestions = normalizedQuestions.length;
    const overallProgress = totalQuestions
        ? (totalAnsweredCount / totalQuestions) * 100
        : 0;

    if (!currentQuestion || !batchQuestions.length) {
        showFinalResults();
        return;
    }

    quizContainer.innerHTML = `
        <div class="quiz-level-strip">
            <div class="quiz-level-header">
                <span class="question-number">Cấp độ ${currentLevelIndex + 1}/${orderedLevels.length}</span>
                <h3 class="quiz-level-title">${levelMeta.title}</h3>
                <p class="quiz-level-desc">${levelMeta.description}</p>
            </div>
            <div class="quiz-summary-grid">
                <div class="quiz-summary-card">
                    <strong>${totalAnsweredCount}</strong>
                    <span>Câu đã làm</span>
                </div>
                <div class="quiz-summary-card">
                    <strong>${totalScore}</strong>
                    <span>Câu đúng</span>
                </div>
                <div class="quiz-summary-card">
                    <strong>${batchQuestions.length}</strong>
                    <span>Câu ở cấp độ này</span>
                </div>
            </div>
        </div>

        <div class="quiz-progress">
            <div class="progress-bar">
                <div class="progress-fill" id="quizProgress" style="width: ${overallProgress}%"></div>
            </div>
            <span class="progress-text">Câu <span id="currentQuestion">${currentQuestionIndex + 1}</span>/${batchQuestions.length} • Tổng tiến độ ${totalAnsweredCount + 1}/${totalQuestions}</span>
        </div>

        <div class="quiz-card" id="quizCard">
            <div class="quiz-question">
                <span class="question-number">Câu ${currentQuestionIndex + 1}</span>
                <h3 id="questionText">${currentQuestion.question}</h3>
            </div>

            <div class="quiz-options" id="quizOptions">
                ${currentQuestion.options.map(option => `
                    <button class="option-btn" data-answer="${option}">${option}</button>
                `).join('')}
            </div>

            <div class="quiz-feedback" id="quizFeedback" style="display: none;">
                <div class="feedback-icon"></div>
                <p class="feedback-text"></p>
                <button class="next-btn" id="nextQuestion">Câu tiếp theo →</button>
            </div>
        </div>

        <div class="quiz-rewards">
            <h4>Tiến độ cấp độ (${levelAnsweredCount}/${batchQuestions.length})</h4>
            <div class="puzzle-pieces" id="puzzlePieces">
                ${Array(batchQuestions.length).fill(0).map((_, index) => `
                    <div class="puzzle-piece ${index < levelAnsweredCount ? 'unlocked' : 'locked'}" data-piece="${index + 1}">
                        ${index + 1}
                    </div>
                `).join('')}
            </div>
            <p class="quiz-reward-note">Hoàn thành đủ ${batchQuestions.length} câu để mở cấp độ tiếp theo.</p>
        </div>
    `;

    quizContainer.querySelectorAll('.option-btn').forEach(button => {
        button.addEventListener('click', handleAnswerClick);
    });
}

function handleAnswerClick(event) {
    const currentQuestion = getCurrentQuestion();
    if (!currentQuestion) {
        return;
    }

    const selectedAnswer = event.currentTarget.dataset.answer;
    const isCorrect = selectedAnswer === currentQuestion.correct;
    const optionButtons = quizContainer.querySelectorAll('.option-btn');

    optionButtons.forEach(button => {
        button.disabled = true;

        if (button.dataset.answer === currentQuestion.correct) {
            button.classList.add('correct');
        } else if (button.dataset.answer === selectedAnswer && !isCorrect) {
            button.classList.add('wrong');
        }
    });

    totalAnsweredCount += 1;
    levelAnsweredCount += 1;

    if (isCorrect) {
        totalScore += 1;
        levelScore += 1;
    }

    const feedback = document.getElementById('quizFeedback');
    const feedbackText = feedback?.querySelector('.feedback-text');
    const feedbackIcon = feedback?.querySelector('.feedback-icon');
    const nextButton = document.getElementById('nextQuestion');
    const isLastQuestionInLevel = currentQuestionIndex >= getCurrentLevelQuestions().length - 1;

    if (feedback) {
        feedback.classList.remove('correct', 'wrong');
        feedback.classList.add(isCorrect ? 'correct' : 'wrong');
        feedback.style.display = 'block';
    }

    if (feedbackIcon) {
        feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    }

    if (feedbackText) {
        feedbackText.textContent = `${isCorrect ? 'Chính xác!' : 'Chưa đúng.'} ${currentQuestion.explanation}`;
    }

    if (nextButton) {
        nextButton.textContent = isLastQuestionInLevel ? 'Xem kết quả cấp độ →' : 'Câu tiếp theo →';
        nextButton.addEventListener('click', () => {
            if (isLastQuestionInLevel) {
                showLevelResults();
                return;
            }

            currentQuestionIndex += 1;
            renderQuiz();
        }, { once: true });
    }
}

function showLevelResults() {
    if (!quizContainer) {
        return;
    }

    const level = getCurrentLevel();
    const batchQuestions = getCurrentLevelQuestions();
    const hasNextLevel = currentLevelIndex < orderedLevels.length - 1;
    const levelMeta = getLevelMeta(level);

    quizContainer.innerHTML = `
        <div class="quiz-results">
            <h2>Hoàn thành ${levelMeta.title}</h2>
            <p class="result-score">Bạn đã trả lời đúng <strong>${levelScore}/${batchQuestions.length}</strong> câu ở cấp độ này</p>
            <div class="result-message">${getEncouragementMessage(levelScore, batchQuestions.length)}</div>
            <p class="quiz-result-overall">Tổng cộng bạn đã hoàn thành <strong>${totalAnsweredCount}/${normalizedQuestions.length}</strong> câu, trong đó đúng <strong>${totalScore}</strong> câu.</p>
            <div class="quiz-results-actions">
                ${hasNextLevel ? `<button class="next-btn" id="continueLevelBtn">Tiếp tục cấp độ ${currentLevelIndex + 2} →</button>` : ''}
                <button class="restart-btn" id="restartQuizBtn">Làm lại từ đầu</button>
            </div>
        </div>
    `;

    document.getElementById('continueLevelBtn')?.addEventListener('click', proceedToNextLevel);
    document.getElementById('restartQuizBtn')?.addEventListener('click', restartQuiz);
}

function showFinalResults() {
    if (!quizContainer) {
        return;
    }

    const total = normalizedQuestions.length;
    const message = totalScore === total
        ? 'Xuất sắc! Bạn đã hoàn thành toàn bộ 5 cấp độ với kết quả tuyệt đối.'
        : totalScore >= total * 0.8
            ? 'Kết quả rất tốt. Bạn đã nắm khá chắc tiến trình lịch sử và có thể ôn lại các câu khó để củng cố thêm.'
            : totalScore >= total * 0.6
                ? 'Bạn đã hoàn thành trọn bộ câu hỏi. Hãy xem lại các phần giải thích để ghi nhớ chắc hơn.'
                : 'Bạn đã đi hết 50 câu hỏi. Nên quay lại các bài học theo giai đoạn và làm lại để củng cố kiến thức.';

    quizContainer.innerHTML = `
        <div class="quiz-results">
            <h2>Hoàn thành toàn bộ thử thách</h2>
            <p class="result-score">Bạn đã trả lời đúng <strong>${totalScore}/${total}</strong> câu</p>
            <div class="result-message">${message}</div>
            <div class="quiz-results-actions">
                <button class="restart-btn" id="restartQuizBtn">Làm lại từ đầu</button>
            </div>
        </div>
    `;

    document.getElementById('restartQuizBtn')?.addEventListener('click', restartQuiz);
}

function proceedToNextLevel() {
    currentLevelIndex += 1;
    currentQuestionIndex = 0;
    levelScore = 0;
    levelAnsweredCount = 0;
    renderQuiz();
}

function restartQuiz() {
    currentLevelIndex = 0;
    currentQuestionIndex = 0;
    totalScore = 0;
    totalAnsweredCount = 0;
    levelScore = 0;
    levelAnsweredCount = 0;
    renderQuiz();
}

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', async () => {
    quizData = window.appDataService?.getData
        ? await window.appDataService.getData()
        : historicalData;

    normalizedQuestions = normalizeQuizQuestions(getQuizData().quizQuestions);
    orderedLevels = getOrderedLevels();
    updateHeroDescription();
    renderQuiz();
    setTimeout(() => AOS.refresh(), 200);
});
