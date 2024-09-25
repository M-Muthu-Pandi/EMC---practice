// Fuctions
// Traditional Function
function normal() {
    console.log("Normal Function");
}
normal();

// Anonymous Function
var anony = function () {
    console.log("Anonymous Function");
}
anony();

// Arrow Function (ES6)
var arrow = () => {
    console.log("Arrow Function");
}
arrow();
//---


// Backtick Symbol use `
var btick = document.querySelector(".btick");
btick.innerHTML = `<h1>Backtick symbol</h1>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, quis facilis! Eaque deleniti illo impedit perferendis itaque perspiciatis doloribus blanditiis ipsa veniam exercitationem incidunt voluptates temporibus, aperiam adipisci voluptas laudantium?</p>`;

// Template Literals
var myName = "Muthu";
console.log(`My name is ${myName}`);
//---


// Destructuring Assignment
// Using Array
// var x = 10;
// var y = 20;
// var z = 30;
var [x, y, z] = [10, 20, 30];
console.log(x + y + z);

// Using Object
var person = {
    name1: "Muthu",
    age: "25"
}
// var name1 = person.name1;
// var age = person.age;
var { name1, age } = person;
console.log(name1 + age);
//---


// Spread and Rest Operator
// Rest operator
var rest = (a, b, ...c) => {
    console.log(a + b + c[1]);
    console.log(c);

}
rest(10, 20, 30, 40, 50);

// Spread Operator
var num1 = [10, 20, 30];
var num2 = [...num1, 40, 50];
console.log(num2);
//---


// Default Parameters
var dPara = (m, n = 20) => {
    console.log(m + n);
}
// dPara(10);
dPara(10, 40);
//---


// Classes
class Student {
    constructor(name2, mark) {
        this.name2 = name2;
        this.mark = mark;
    }

    studentdetails() {
        console.log(this.name2 + this.mark);
    }
}
var muthu = new Student("Muthu ", 100);
var archana = new Student("Archana ", 35);
// console.log(muthu.name2 + muthu.mark);
// console.log(archana.name2 + archana.mark);
muthu.studentdetails();
archana.studentdetails();
//---


// Callback
// var chocolate = ()=> {
//     console.log("This is Chocolate");
// }
// var shop = ()=> {
//     console.log("This is Shop");
//     chocolate();
// }
// shop();

function chocolate() {
    console.log("This is Chocolate");
}
function shop(chocolate) {
    console.log("This is Shop");
    chocolate();
}
shop(chocolate);
//---


// setTimeout
one = ()=> {
    console.log(1);
}
setTimeout(one,3000); // Output will be displayed after 3 seconds.

// Synchronous VS Asynchronous
// Synchronous
console.log("One");
console.log("Two");
console.log("Three");

// Asynchronous
console.log("Four");
setTimeout(() => {
    console.log("Five");
}, 4000);
console.log("Six");

// Promises
var amazon = new Promise(
    (resolve,reject) => {
        var delivered = true;

        if (delivered == true) {
            resolve("Delivered, Pay the Amount");
        } else {
            reject("Not Delivered, raise a Complaint");
        }
    }
);
amazon.then((msg)=>{
    console.log(msg);
}).catch((errmsg)=> {
    console.log(errmsg);
});
//---


// Async/Await
var flipKart = new Promise(
    (resolve)=> {
        setTimeout((params) => {
            resolve("Delivered");
        },5000);
    }
);

var waiting =  async () => {
    var data = await flipKart;
    console.log(data);
    
};
waiting();
console.log("Hello");
