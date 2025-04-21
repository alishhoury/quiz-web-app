document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const loginBtn = document.querySelector('nav button:nth-child(1)');
    const registerBtn = document.querySelector('nav button:nth-child(2)');
    const loginPopup = document.getElementById('loginPopup');
    const registerPopup = document.getElementById('registerPopup');
    const closeBtns = document.querySelectorAll('.close-btn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Show popups
    loginBtn.addEventListener('click', () => {
        loginPopup.style.display = 'block';
    });

    registerBtn.addEventListener('click', () => {
        registerPopup.style.display = 'block';
    });

    // Close popups
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            loginPopup.style.display = 'none';
            registerPopup.style.display = 'none';
        });
    });

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === loginPopup || e.target === registerPopup) {
            loginPopup.style.display = 'none';
            registerPopup.style.display = 'none';
        }
    });

    // Handle registration
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Get existing users 
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if username already exists
        if (users.some(user => user.username === username)) {
            alert('Username already exists!');
            return;
        }

        // Add new user
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));

        // Clear form and close popup
        registerForm.reset();
        registerPopup.style.display = 'none';
        alert('Registration successful!');
    });

    // Handle login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check password and username
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            // Store logged in user
            localStorage.setItem('currentUser', username);
            
            // Clear form and close popup
            loginForm.reset();
            loginPopup.style.display = 'none';
            
            // Redirect to quiz page
            window.location.href = './pages/home.html';
        } else {
            alert('Invalid username or password!');
        }
    });

    // Check if user is logged in
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        loginBtn.textContent = `Logout (${currentUser})`;
        loginBtn.addEventListener('click', () => {
            localStorage.removeItem('currentUser');
            window.location.reload();
        });
    }
});
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

if (username === 'admin' && password === 'admin') {
    localStorage.setItem('isAdmin', 'true');
    window.location.href = './pages/dashboard.html';
    return;
}
const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', username);
        loginForm.reset();
        loginPopup.style.display = 'none';
        window.location.href = './pages/home.html';
    } else {
        alert('Invalid username or password!');
    }
});
