"use strict";
// exports.__esModule = true;
var inquirer_1 = require("inquirer");
// Generate a random number for the player to guess
var targetNumber = Math.floor(Math.random() * 100) + 1;
// Define a function to ask the player for their guess
var askForGuess = function () {
    inquirer_1["default"]
        .prompt([
        {
            type: 'input',
            name: 'guess',
            message: 'Enter your guess:',
            validate: function (input) {
                // Validate that the input is a number
                if (!Number.isNaN(Number(input))) {
                    return true;
                }
                else {
                    return 'Please enter a valid number';
                }
            }
        }
    ])
        .then(function (answers) {
        // Check if the player's guess is correct
        if (answers.guess === targetNumber) {
            console.log('You guessed correctly! Congratulations!');
        }
        else {
            // If the player's guess is not correct, ask for another guess
            console.log('Incorrect guess, try again.');
            askForGuess();
        }
    });
};
// Start the game by asking for the player's first guess
askForGuess();
