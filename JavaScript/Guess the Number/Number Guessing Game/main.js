var prompt = require("prompt-sync")();
function guess(guessedNumber) {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    if (randomNumber == guessedNumber) {
        console.log("You Guessed Right");

    } else {
        console.log("Your guess is Wrong, Generated Number is: " + randomNumber);
    }
}
var guessedNumber = prompt();
guess(guessedNumber);

// // Task (Random number 1 to 5)
// console.log("Random Number 1 to 5");

// function random() {
//     var randomNumber = Math.floor(Math.random() * 10) + 1;
//     if (randomNumber <= 5) {
//         console.log(randomNumber);
//     } else {
//         console.log(randomNumber-5);
//     }
// }
// random();

// Task (Guess the Number 1 to 5)
// console.log("Guess the Number 1 to 5");

// var prompt = require("prompt-sync")();
// var randomNum = Math.floor(Math.random() * 10) + 1;
// if (randomNum <= 5) {
//     var randomNumber = randomNum;
// } else {
//     var randomNumber = randomNum - 5;
// }
// function guess(guessedNumber) {
//     if (randomNumber == guessedNumber) {
//         console.log("You Guessed Right");

//     } else {
//         console.log("Your guess is Wrong, Generated Number is: " + randomNumber);
//     }
// }
// var guessedNumber = prompt();
// guess(guessedNumber);