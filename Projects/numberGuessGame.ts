// import readlineSync from "readline-sync";
import * as readlineSync from 'readline-sync';


// Generate a random number between 1 and 100
const targetNumber = Math.floor(Math.random() * 100) + 1;

// Initialize the number of guesses to 0
let numGuesses = 0;

// Set the game to continue until the player guesses the correct number
while (true) {
  // Get the player's guess
  const guess = parseInt(readlineSync.question("Enter your guess: "));

  // Increase the number of guesses
  numGuesses++;

  // Check if the guess is correct
  if (guess === targetNumber) {
    console.log(`You guessed the correct number in ${numGuesses} guesses!`);
    break;
  } else if (guess > targetNumber) {
    console.log("Your guess is too high. Try again.");
  } else {
    console.log("Your guess is too low. Try again.");
  }
}
