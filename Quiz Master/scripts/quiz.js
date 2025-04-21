document.addEventListener('DOMContentLoaded', () => {
    const category = localStorage.getItem('selectedCategory');
    const quizData = JSON.parse(localStorage.getItem('quizData'))[category];
    let currentQuestion = 0;
    let score = 0;

    const categoryNameEl = document.getElementById('categoryName');
    const questionEl = document.getElementById('question');
    const answersEl = document.getElementById('answers');
    const nextBtn = document.getElementById('nextBtn');
    const progressEl = document.getElementById('progress');

    categoryNameEl.textContent = category;

    function loadQuestion() {
        const question = quizData[currentQuestion];
        questionEl.textContent = question.question;
        answersEl.innerHTML = '';
        progressEl.textContent = `Question ${currentQuestion + 1}/3`;

        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.className = 'answer-btn';
            button.textContent = answer;
            button.addEventListener('click', () => selectAnswer(index));
            answersEl.appendChild(button);
        });

        nextBtn.disabled = true;
    }

    function selectAnswer(index) {
        const buttons = answersEl.querySelectorAll('button');
        buttons.forEach(button => button.disabled = true);

        if (index === quizData[currentQuestion].correct) {
            buttons[index].classList.add('correct');
            score++;
        } else {
            buttons[index].classList.add('wrong');
            buttons[quizData[currentQuestion].correct].classList.add('correct');
        }

        nextBtn.disabled = false;
    }

    nextBtn.addEventListener('click', () => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            alert(`Quiz completed! Your score: ${score}/3`);
            window.location.href = 'home.html';
        }
    });

    loadQuestion();
});
function saveScore(score) {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) return;

    const scores = JSON.parse(localStorage.getItem('scores') || '{}');
    
    if (!scores[currentUser]) {
        scores[currentUser] = [];
    }
    
    scores[currentUser].push({
        category: category,
        score: score,
        date: new Date().toISOString()
    });
    
    localStorage.setItem('scores', JSON.stringify(scores));
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        saveScore(score);
        alert(`Quiz completed! Your score: ${score}/3`);
        window.location.href = 'home.html';
    }
});