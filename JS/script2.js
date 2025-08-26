const container = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
let currentIndex = 0;
const cardsToShow = 3;
const cardWidth = 250 + 50; // Largura do card + margem

function updateGallery() {
    const maxIndex = cards.length - cardsToShow;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    const offset = -currentIndex * cardWidth;
    container.style.transform = `translateX(${offset}px)`;
    leftArrow.style.display = currentIndex > 0 ? 'block' : 'block';
    rightArrow.style.display = currentIndex < maxIndex ? 'block' : 'block';
}

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateGallery();

    }

});

rightArrow.addEventListener('click', () => {
    if (currentIndex < cards.length - cardsToShow) {
        currentIndex++;
        updateGallery();
    }
});

updateGallery();