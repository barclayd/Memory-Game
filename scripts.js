const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        // first user click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second user click
        hasFlippedCard = false;
        secondCard = this;

        // console.log({
        //     firstCard,
        //     secondCard
        // });

        // check that cards match
        console.log(firstCard.dataset.framework);
        console.log(secondCard.dataset.framework);
    }
}

cards.forEach(card => {
    card.addEventListener('click', flipCard)
});