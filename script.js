// Blackjack game variables
let firstCard = 0;
let secondCard = 0;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";

// DOM elements
const messageEl = document.getElementById("message");
const cardsEl = document.getElementById("cards");
const sumEl = document.getElementById("sum");
const startGameBtn = document.getElementById("start-game");
const newCardBtn = document.getElementById("new-card");

// Random card generator
function getRandomCard() {
    let card = Math.floor(Math.random() * 10) + 2;
    return card;
}

// Start game function
function startGame() {
    isAlive = true;
    hasBlackjack = false;
    firstCard = getRandomCard();
    secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

// Game display logic
function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ");
    sumEl.textContent = "Sum: " + sum;
    
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
        newCardBtn.disabled = false;
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackjack = true;
        newCardBtn.disabled = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
        newCardBtn.disabled = true;
    }
    
    messageEl.textContent = message;
}

// New card function
function newCard() {
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

// Event listeners
startGameBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);
