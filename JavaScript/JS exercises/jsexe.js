// // Exercise 1
// var exe1 = "EMC"=="emc"?"Both are Equal":"Not Equal";
// console.log(exe1);

// // Exercise 2
// var raining = true;
// var exe2Result = raining?"Take an Umbrella":"Sunny day";
// console.log(exe2Result);

// // Question 1
// var name = "Muthu";
// var age = 25;
// var favColor = "Green";
// var isRaining = false;
// var rain = isRaining ? "Yes, it's raining" : "No, it's not raining";
// var ques1Result = "My name is " + name + ", " + "My age is " + age + ", " + "My favorite color is " + favColor + ", " + rain;
// console.log("Question 1");
// console.log(ques1Result);

// // Question 2
// var width = 5;
// var height = 8;
// var area = width * height;
// console.log("Question 2");
// console.log(area);

// // Question 3
// var isSunny = true;
// var weatherMessage = isSunny ? "It's a sunny day!" : "It's not sunny day";
// console.log("Question 3");
// console.log(weatherMessage);

// // Boss level question
// var myAge = 25;
// var friendAge = 24;
// var totalAge = myAge + friendAge;
// var isOlder = myAge > friendAge ? "I'm older" : "I'm younger"
// var favNo = 4;
// var doubleNo = favNo * 2;
// console.log("Boss level Question");
// console.log("My age is " + myAge + ". " + isOlder + " than my friend, " + "Sum of our age is " + totalAge + ", " + "Doubled my favourite is " + doubleNo + ".");


// // IF- Else questions
// console.log("IF- Else questions");

// // Question 1
// console.log("Question 1");
// var raining = false;
// if (raining) {
//     console.log("take an Umbrella");
// } else {
//     console.log("Enjoy the Sunshine");
// }

// // Question 2
// console.log("Question 2");
// var homeWork = true;
// if (homeWork) {
//     console.log("Great job!");
// } else {
//     console.log("Finish your homework before playing.");
// }

// // Question 3
// console.log("Question 3");
// var cookies = false;
// if (cookies) {
//     console.log("Would you like a cookie?");
// } else {
//     console.log("Time to bake more cookies.");
// }

// // Question 4
// console.log("Question 4");
// var brush = true;
// if (brush) {
//     console.log("Your teeth are clean.");
// } else {
//     console.log("Go brush your teeth now.");
// }

// // Question 5
// console.log("Question 5");
// var bdayToday = false;
// if (bdayToday) {
//     console.log("Happy birthday! Enjoy your special day!");
// } else {
//     console.log("Have a great day!");
// }

// // IF- Else next level questions
// console.log("IF- Else next level questions");

// // Question 1
// console.log("Question 1");
// var color = "yellow";
// if (color == "red") {
//     console.log("Stop");
// } else if (color == "yellow"){
//     console.log("Get Ready");
// } else if (color == "green"){
//     console.log("Go");
// }

// // Question 2
// console.log("Question 2");
// var season = "fall";
// if (season == "spring") {
//     console.log("Enjoy the blooming flowers.");
// } else if (season == "summer"){
//     console.log("Have fun in the sun.");
// } else if (season == "autumn" || season == "fall"){
//     console.log("Admire the colorful leaves.");
// } else if (season == "winter"){
//     console.log("Bundle up and stay warm.");
// }

// // Question 3
// console.log("Question 3");
// var score = 90;
// if (score < 50) {
//     console.log("You need to improve.");
// } else if (score >= 50 && score <= 70){
//     console.log("Good job!");
// } else if (score > 70){
//     console.log("Exellent performance!");
// }

// // Question 4
// console.log("Question 4");
// var num = 4;
// if (num%2 == 0) {
//     console.log("It's Even Number"); 
// } else {
//     console.log("It's Odd Number");
// }

// // Question 5
// console.log("Question 5");
// var character = "u";
// if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
//     console.log("it's a vowel");
// } else {
//     console.log("it's a consonant");
// }

// // Function exercises
// console.log("Function exercises");

// // Exercise 1
// console.log("Exercise 1");
// var a = 5;
// var b = 10;
// function add() {
//     console.log(a+b);
// }
// add();

// // Exercise 2
// console.log("Exercise 2");
// var factor = "Kamal";
// var fplayer = "Dhoni";
// var fmovie = "Anbe Sivam";
// function favourite() {
//     console.log("Favourite Actor is: " + factor);
//     console.log("Favourite Player is: " + fplayer);
//     console.log("Favourite Movie is: " + fmovie);
// }
// favourite();

// // Paramters Exercise
// console.log("Parameters Exercises");
// function area1(length,breadth) {
//     console.log("Area is " + length*breadth);
// }
// area1(10,20);

// // Return Exercise
// console.log("Return Exercises");
// function add1(c,d) {
//     return c+d;
// }
// var result = add1(20,30);
// console.log(result);


// // If-else and function exercises
// console.log("If-else and function exercises");

// // Question 1
// console.log("Question 1");
// function findEvenOrOdd(numbers) {
//     if (numbers == 0){
//         console.log("That's neither even nor odd, it's just zero!");
//     } else if (numbers%2 == 0) {
//         console.log("It's an Even number!");
//     } else {
//         console.log("It's an Odd number!");
//     }
// }
// findEvenOrOdd(0);

// // Question 2
// // console.log("Question 2");
// // function isSuperHero(superHero) {
// //     if (superHero == "s"){
// //         console.log("Yes, It's a Superhero!");
// //     } else {
// //         console.log("No, It's not a Superhero.");
// //     }
// // }
// // isSuperHero("spiderMan".charAt(0));

// console.log("Question 2");
// function isSuperHero(superHero) {
//     var supNmae = superHero.charAt(0);
//     if (supNmae == "s"){
//         console.log("Yes, It's a Superhero!");
//     } else {
//         console.log("No, It's not a Superhero.");
//     }
// }
// isSuperHero("spiderMan");


// For Loop Exercises
// Question 1
// console.log("Question 1 (1 to 5)");
// for(count=1; count<=5; count++) {
//     console.log(count);
// }

// // Question 2
// console.log("Question 2 (Odd numbers)");
// for(count2=1; count2<=10; count2=count2+2) {
//     console.log(count2);
// }

// // Question 2
// console.log("Question 2 (Even numbers)");
// for(count2=0; count2<=10; count2=count2+2) {
//     console.log(count2);
// }

// // Question 3
// console.log("Question 3 (1 to 5 - Reverse)");
// for(count3=5; count3>=1; count3--) {
//     console.log(count3);
// }

// // Question 4
// console.log("Question 4 (1 to 5 - 2 tables)");
// for(count4=1; count4<=5; count4++) {
//     console.log(count4+"x2="+count4*2);
// }


// Array Questions
// console.log("Array Questions");

// // Question 1
// console.log("Question 1");
// var arr = [1,2,3,4,5,6,7,8,9,10];

// // Even Numbers
// console.log("Even Numbers");
// for(count4=0; count4<10; count4++) {
//     if (arr[count4]%2 == 0) {
//     console.log(arr[count4]);   
//     }
// }

// // Odd numbers
// console.log("Odd numbers");
// for(count4=0; count4<10; count4++) {
//     if (arr[count4]%2 != 0) {
//     console.log(arr[count4]);   
//     }
// }


// Task - Array + Objects
console.log("Array + Objects Task");

var recipes = [
    {
        recipeName: "Vadai",
        ingredients: ["Maavu", "Oil"],
        instructions: ["Turn on the stove", "Boil"]
    },
    {
        recipeName: "Samosa",
        ingredients: ["Maida", "Potato Masala"],
        instructions: ["Turn on the stove", "Fry"]
    },
    {
        recipeName: "Butter Milk",
        ingredients: ["Curd", "Water and Salt"],
        instructions: ["Add Curd, Water and Salt"]
    }
];
console.log("Recipe Names");
for (var count5 = 0; count5 < recipes.length; count5++) {
    console.log(recipes[count5].recipeName);
}