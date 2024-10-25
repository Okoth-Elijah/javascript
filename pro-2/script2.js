const readline = require('readline');

// Set up readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Randomly select a number between 0 and 7
const selectedNum = Math.floor(Math.random() * 8);
let attempts = 3;

// Function to prompt the user for a guess
function askQuestion() {
    rl.question("Guess a number between 0 and 8: ", (userInput) => {
        const guess = parseInt(userInput, 10);

        if (isNaN(guess) || guess < 0 || guess > 8) {
            console.log("Please enter a valid number between 0 and 8.");
        } else if (guess > selectedNum) {
            console.log("Your guess is too high, please try again.");
        } else if (guess < selectedNum) {
            console.log("Your guess is too low, please try again.");
        } else {
            console.log("Congratulations, you guessed the correct number!");
            rl.close();
            return;
        }

        attempts--;
        if (attempts > 0) {
            console.log(`You have ${attempts} attempts left.`);
            askQuestion();
        } else {
            console.log("Game over, you lost the game.");
            rl.close();
        }
    });
}

// Start the game
askQuestion();
