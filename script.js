// Blackjack game variables
let firstCard = 0; // Holds the value of the first card
let secondCard = 0; // Holds the value of the second card
let cards = []; // Array to store drawn cards
let sum = 0; // Sum of the card values
let hasBlackjack = false; // Boolean flag to check if player has Blackjack (21)
let isAlive = false; // Boolean flag to check if the player is still in the game (sum <= 21)
let message = ""; // Stores game messages (prompt to draw or outcome)

// DOM elements (linked to elements in the HTML)
const messageEl = document.getElementById("message"); // Reference to the message display
const cardsEl = document.getElementById("cards"); // Reference to the cards display
const sumEl = document.getElementById("sum"); // Reference to the sum display
const startGameBtn = document.getElementById("start-game"); // Reference to the "Start Game" button
const newCardBtn = document.getElementById("new-card"); // Reference to the "New Card" button

// Random card generator function
function getRandomCard() {
    // Generates a random card value between 2 and 11
    let card = Math.floor(Math.random() * 10) + 2; 
    return card; // Returns the generated card value
}

// Start game function
function startGame() {
    // Initializes game variables when the game starts
    isAlive = true; // Player is now active in the game
    hasBlackjack = false; // Player does not have Blackjack initially
    firstCard = getRandomCard(); // Draw the first random card
    secondCard = getRandomCard(); // Draw the second random card
    cards = [firstCard, secondCard]; // Add both cards to the array
    sum = firstCard + secondCard; // Calculate the sum of the two cards
    renderGame(); // Update the game display based on the new cards and sum
}

// Game display logic
function renderGame() {
    // Updates the cards and sum displayed on the screen
    cardsEl.textContent = "Cards: " + cards.join(" "); // Display the drawn cards
    sumEl.textContent = "Sum: " + sum; // Display the sum of the cards
    
    // Game logic: checks the current sum and updates the message and button states
    if (sum <= 20) {
        message = "Do you want to draw a new card?"; // Player can draw another card
        newCardBtn.disabled = false; // Enable the "New Card" button
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"; // Player wins with a sum of 21
        hasBlackjack = true; // Set the flag indicating Blackjack
        newCardBtn.disabled = true; // Disable the "New Card" button
    } else {
        message = "You're out of the game!"; // Player loses if sum is greater than 21
        isAlive = false; // Player is no longer active in the game
        newCardBtn.disabled = true; // Disable the "New Card" button
    }
    
    messageEl.textContent = message; // Update the message displayed on the screen
}

// New card function
function newCard() {
    // Draws a new card only if the player is still in the game and hasn't got Blackjack
    if (isAlive && !hasBlackjack) {
        let card = getRandomCard(); // Generate a new random card
        sum += card; // Add the value of the new card to the sum
        cards.push(card); // Add the new card to the array of drawn cards
        renderGame(); // Update the game display with the new card and sum
    }
}

// Event listeners for buttons
startGameBtn.addEventListener("click", startGame); // Start game when the "Start Game" button is clicked
newCardBtn.addEventListener("click", newCard); // Draw a new card when the "New Card" button is clicked
