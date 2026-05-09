const form = document.getElementById("myform");
const fullname = document.getElementById("fullname");
const errorname = document.getElementById("errorname");
const email = document.getElementById("email");
const mailerror = document.getElementById("mailerror");
const age = document.getElementById("age");
const error = document.getElementById("error");
const password = document.getElementById("password");
const errorpassword = document.getElementById("errorpassword");
const confirmpassword = document.getElementById("confirmpassword");
const confirmerror = document.getElementById("confirmerror");
const submitbnt = document.getElementById("submitbnt");
const result = document.getElementById("result");

let isValid = true;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  isValid = true;

  if (fullname.value.trim() === "") {
    errorname.textContent = "Full name is required";
    isValid = false;
  } else if (!/^[a-zA-Z/-\s]+$/.test(fullname.value.trim())) {
    errorname.textContent =
      "Full name can only contain letters, hyphens, and spaces";
    isValid = false;
  } else if (fullname.value.trim().split(" ").length < 2) {
    errorname.textContent = "Full name must contain at least two words";
    isValid = false;
  } else {
    errorname.textContent = "";
  }

  if (age.value.trim() === "") {
    error.textContent = "Age is required";
    isValid = false;
  } else if (isNaN(age.value.trim()) || age.value.trim() <= 17) {
    error.textContent = "Age must be at least 18";
    isValid = false;
  } else {
    error.textContent = "";
  }
  if (email.value.trim() === "") {
    mailerror.textContent = "email is required";
    isValid = false;
  } else if (!/^[^\s]+@[^\s]+\.[^\s]+$/.test(email.value.trim())) {
    mailerror.textContent = "email is invalid";
    isValid = false;
  } else {
    mailerror.textContent = "";
  }

  if (password.value.trim() === "") {
    errorpassword.textContent = "Password is required";
    isValid = false;
  } else if (password.value.trim().length < 8) {
    errorpassword.textContent = "Password must be at least 8 characters long";
    isValid = false;
  } else if (
    !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*?[#@$?]).{8,}$/.test(
      password.value.trim(),
    )
  ) {
    errorpassword.textContent =
      "Password must contain at least one uppercase letter, special character @, #, $, or ? and one number";
    isValid = false;
  } else {
    errorpassword.textContent = "";
  }

  if (confirmpassword.value.trim() === "") {
    confirmerror.textContent = "Confirm password is required";
    isValid = false;
  } else if (confirmpassword.value.trim() !== password.value.trim()) {
    confirmerror.textContent = "Passwords do not match";
    isValid = false;
  } else {
    confirmerror.textContent = "";
  }

  if (isValid) {
    // Process form submission
    result.textContent = "Form submitted successfully!";
    alert("Form submitted successfully!");

    // Optionally, you can reset the form here
    // form.reset();
    document.getElementById("myform").reset();
  }
});
