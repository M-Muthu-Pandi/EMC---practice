// DOM
// getElementById
// // Exercise 1 (Section 19:2)
// var exe1 = document.getElementById("title");
// exe1.textContent = "Bye World";


// // Questions (19:4)
// // Question 1
// var p2 = document.getElementById("paragraph2");
// console.log(p2.textContent);

// // Question 2
// var p3 = document.getElementById("paragraph3");
// p3.textContent = "Updated text content!"

// // Question 3
// var myDiv = document.getElementById("myDiv");
// myDiv.innerHTML = "<strong>This is Bold text</strong>"

// // Question 4
// var special = document.querySelector(".special");
// console.log(special.textContent);


// Add 2 Numbers and Print Result Task
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
function add() {
    var ans = Number(num1.value) + Number(num2.value);
    result.textContent = "Result is: " + ans;
}

// Exercise with Input Tag
var inputBox = document.getElementById("inputBox");
var resultExe1 = document.getElementById("resultExe1");

function update() {
    resultExe1.textContent = inputBox.value;
}
