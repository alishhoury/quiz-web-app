document.addEventListener('DOMContentLoaded', () => {
    // Check if user is admin
    if (!localStorage.getItem('isAdmin')) {
        window.location.href = '../index.html';
        return;
    }

    const scoresList = document.getElementById('scoresList');
    const logoutBtn = document.getElementById('logoutBtn');

    function displayScores() {
        // Get scores from localStorage
        const scores = JSON.parse(localStorage.getItem('scores') || '{}');
        scoresList.innerHTML = ''; // Clear previous content

        // Check if there are any scores
        if (Object.keys(scores).length === 0) {
            scoresList.innerHTML = '<p>No scores available yet.</p>';
            return;
        }

        // Display scores for each user
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