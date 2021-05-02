"use strict";

var signInButton = document.getElementById("signInButton");
var container = document.querySelector(".forms-container");
signInButton.addEventListener("click", signInForm);

var signUpButton = document.getElementById("signUpButton");
var signUp = document.querySelector(".form-group");
signUpButton.addEventListener("click", signUpForm);

function signInForm() {
  signInButton.style.display = "none";
  container.style.display = "block";
}

function signUpForm() {
  signUpButton.style.display = "none";
  container.style.display = "none";
  signUp.style.display = "block";
}

// if (window.localStorage) {
//   console.log("supported");
// } else {
//   console.log("not supported");
// }
var memberSignUp = function memberSignUp(event) {
  var formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("userEmail").value,
    password: document.getElementById("userPassword").value
  };
  localStorage.setItem("formData", JSON.stringify(formData));
  console.log(localStorage.getItem("formData"));
  event.preventDefault();
  alert("Account successfully created");
  window.location = "landing.html";
};

function clearForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("userEmail").value = "";
  document.getElementById("userPassword").value = "";
}

function memberSignIn() {
  var formData = JSON.parse(localStorage.getItem("formData"));
  var storedEmail = formData.email;
  var storedPassword = formData.password;
  var enteredEmail = $("#memberEmail").val();
  var enteredPassword = $("#memberPassword").val();
  console.log(storedEmail, enteredEmail);
  if (enteredEmail == storedEmail && enteredPassword == storedPassword) {
    alert("Login successful.");
    window.location = "index.html";
    return false;
  } else {
    alert("Incorrect username or password.");
    window.location = "landing.html?#";
  }
}