// To-do list
// Selecting All
var inputBox = document.getElementById("inputBox");
var btn = document.getElementById("btn");
var container = document.getElementById("container");

btn.addEventListener("click", function () {
    var li = document.createElement("li");
    li.innerHTML = inputBox.value + '<button onclick="deleteItem(event)">Delete</button>';
    container.append(li);
});

function deleteItem(event) {
    event.target.parentElement.remove();
}


// Student form
var name1 = document.getElementById("name");
var age = document.getElementById("age");
var gender = document.querySelector(".gender");
var course = document.getElementById("course");
var email = document.getElementById("mail");
var save = document.getElementById("save");
var data = document.getElementById("data");

save.addEventListener("click", function () {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + name1.value + "</td>" + "<td>" + age.value + "</td>" + "<td>" + gender.value + "</td>" + "<td>" + course.value + "</td>" + "<td>" + email.value + "</td>" + "<td>" + '<button onclick="del(event)">Delete</button>' + "</td>";
    data.append(tr);
});

function del(event) {
    event.target.parentElement.parentElement.remove();
}


