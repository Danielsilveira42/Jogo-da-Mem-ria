const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let fistCard, secondCard;
let lockCard = false;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;

    this.ClassList.add('flip');
    if(!hasFlippedCard) {
        hasflippedCard = true;
        fistCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;
    checkForMath(); 
}

function checkForMath() {
    if(fistCard.dataset.card === secondCard.dataset.card) {
        dissableCard();
        return;
    }

    unflipCards();
}

function dissableCard() {
    fistCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        fistCard.ClassList.remove('flip');
        secondCard.ClassList.remove('flip');
        
        resetBoard();
    }, 1500);
}

function restboard() {
    [hastLippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shaffle() {
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.ramdom() * 12);
        card.getElementsByClassName.order = ramdomposition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click', flipCard)
});
