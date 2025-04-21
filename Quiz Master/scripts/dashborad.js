document.addEventListener('DOMContentLoaded', () => {
    // Check if user is admin
    if (!localStorage.getItem('isAdmin')) {
        window.location.href = '../index.html';
        return;
    }

    const scoresList = document.getElementById('scoresList');
    const logoutBtn = document.getElementById('logoutBtn');

    // Load and display all scores
    function displayScores() {
        const scores = JSON.parse(localStorage.getItem('scores') || '{}');
        scoresList.innerHTML = '';

        Object.entries(scores).forEach(([username, userScores]) => {
            const userDiv = document.createElement('div');
            userDiv.className = 'user-scores';
            
            const userTitle = document.createElement('h3');
            userTitle.textContent = `User: ${username}`;
            userDiv.appendChild(userTitle);

            userScores.forEach(score => {
                const scoreDiv = document.createElement('div');
                scoreDiv.className = 'score-item';
                
                const date = new Date(score.date).toLocaleDateString();
                scoreDiv.innerHTML = `
                    <span>Category: ${score.category}</span>
                    <span>Score: ${score.score}/3</span>
                    <span>Date: ${date}</span>
                `;
                
                userDiv.appendChild(scoreDiv);
            });

            scoresList.appendChild(userDiv);
        });
    }

    // Handle logout
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('isAdmin');
        window.location.href = '../index.html';
    });

    // Initial display
    displayScores();
});