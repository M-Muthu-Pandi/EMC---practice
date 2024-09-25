var startGame = ()=> {
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    alert(`Welcome to the Guess the Number game! The number is between 1 and 10.`);
    
    for (let noOfGuesses = 1; noOfGuesses < 30; noOfGuesses++) {
        let userGuess = prompt(`Enter your guess (1 to 10). Attempt ${noOfGuesses}`);

        // Ensure the input is a valid number
        userGuess = parseInt(userGuess);

        if (isNaN(userGuess)) {
            alert(`Please enter a valid number between 1 and 10.`);
        } else if (userGuess < 1) {
            alert(`Too low. Try again.`);
        } else if (userGuess > 10) {
            alert(`Too high. Try again.`);
        } else if (userGuess === randomNumber) {
            alert(`Congratulations! You guessed the correct number ${randomNumber} in ${noOfGuesses} attempts.`);
            break;
        } else {
            alert(`Wrong guess! Try again.`);
        }

        // If no guesses are left, show the correct number
        if (noOfGuesses +1 === 30) {
            alert(`Sorry! You lost. The correct number was ${randomNumber}.`);
        }
    }

    // Ask if the user wants to restart the game
    if (confirm(`Do you want to play again?`)) {
        startGame();
    } else {
        alert(`Thanks for playing! Goodbye.`);
    }
}
startGame();

// if (noOfGuesses + 1 < 30)