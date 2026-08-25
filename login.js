<<<<<<< HEAD
const signBtn = document.querySelector("#signBtn");

const loginBox = document.querySelector("#loginBox");

const successBox = document.querySelector("#successBox");

const email = document.querySelector("#email");

const password = document.querySelector("#password");


signBtn.addEventListener("click", function () {

    if (email.value == "") {

        alert("Please enter your email");

        return;
    }


    if (password.value == "") {

        alert("Please enter your password");

        return;
    }


    loginBox.style.display = "none"; 
    successBox.style.display = "block";

=======
const signBtn = document.querySelector("#signBtn");

const loginBox = document.querySelector("#loginBox");

const successBox = document.querySelector("#successBox");

const email = document.querySelector("#email");

const password = document.querySelector("#password");


signBtn.addEventListener("click", function () {

    if (email.value == "") {

        alert("Please enter your email");

        return;
    }


    if (password.value == "") {

        alert("Please enter your password");

        return;
    }


    loginBox.style.display = "none"; 
    successBox.style.display = "block";

>>>>>>> aebdf49 (project updated)
});