document.addEventListener('DOMContentLoaded', () => {
    const registerBtn = document.querySelector('nav button:nth-child(2)');
    const popup = document.getElementById('registerPopup');
    const closeBtn = document.querySelector('.close-btn');
    const registerForm = document.getElementById('registerForm');

    registerBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        registerForm.reset();
        popup.style.display = 'none';
        alert('Registration successful!');
    });
});