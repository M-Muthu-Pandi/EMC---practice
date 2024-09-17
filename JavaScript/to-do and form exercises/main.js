// To-do list
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
var course = document.getElementById("course");
var email = document.getElementById("mail");
var save = document.getElementById("save");
var data = document.getElementById("data");
var radio = document.getElementsByName("gender");
var radioResult = document.querySelector(".radioResult");

for (count = 0; count < radio.length; count++) {
    radio[count].addEventListener("click", function (event) {
        radioResult.textContent = event.target.value;
    });
}

save.addEventListener("click", function () {
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${name1.value}</td><td>${age.value}</td><td class="radioResult">${radioResult.textContent}</td><td>${course.value}</td><td>${email.value}</td><td><button onclick="del(event)" class="delbtn">Delete</button></td>`;
    data.append(tr);
});

function del(event) {
    event.target.parentElement.parentElement.remove();
}


// Form validation
var submit = document.getElementById("submit");

submit.addEventListener("click", function () {
    event.preventDefault();

    var nameRegex = /^[a-zA-Z]+$/;
    var emailRegex = /^[a-zA-Z0-9]+@gmail\.com/;
    var phoneRegex = /^\d{10}$/;

    var name2 = document.getElementById("name2");
    var email2 = document.getElementById("email2");
    var phone2 = document.getElementById("phone2");

    var validate = true;

    if (nameRegex.test(name2.value) == false) {
        document.querySelector(".nameError").style.display = "inline";
        validate = false;
    }
    else {
        document.querySelector(".nameError").style.display = "none";
    }

    if (emailRegex.test(email2.value) == false) {
        document.querySelector(".emailError").style.display = "inline";
        validate = false;
    }
    else {
        document.querySelector(".emailError").style.display = "none";
    }

    if (phoneRegex.test(phone2.value) == false) {
        document.querySelector(".phoneError").style.display = "inline";
        validate = false;
    }
    else {
        document.querySelector(".phoneError").style.display = "none";
    }

    if (validate == true) {
        alert("Form Submitted Successfully")
    }
});



