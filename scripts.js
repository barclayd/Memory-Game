const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if (lockBoard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first user click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    // second user click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        firstCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
});