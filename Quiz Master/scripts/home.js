document.addEventListener('DOMContentLoaded', () => {
const cards = document.querySelectorAll('.card');
const title = document.getElementById('categoryTitle');
const defaultText = "Choose a Category";

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        title.textContent = card.dataset.category;
    });

    card.addEventListener('mouseout', () => {
        title.textContent = defaultText;
    });
});
cards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        localStorage.setItem('selectedCategory', category);
        window.location.href = 'quiz.html';
    });
});

const returnBtn = document.getElementById('returnBtn');
returnBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
});
});
