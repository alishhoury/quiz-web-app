const cards = document.querySelectorAll('.card');
const title = document.getElementById('categoryTitle');
const defaultText = "Choose a Category";

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        title.textContent = card.dataset.category;
    });


});
