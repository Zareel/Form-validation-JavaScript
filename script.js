const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const btn = document.querySelector("#btn");
const name_error = document.querySelector("#name_error");
const email_error = document.querySelector("#email_error");
const password_error = document.querySelector("#password_error");
const displayUserName = document.querySelector("#display_userName");
const displayEmail = document.querySelector("#display_email");
const displayPassword = document.querySelector("#display_password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (userName.value == "" || userName.value == null) {
    name_error.innerHTML = "name is required";
  }
  if (email.value == "" || email.value == null) {
    email_error.innerHTML = "email is required";
  }
  if (password.value == "" || password.value == null) {
    password_error.innerHTML = "password is required";
  } else if (password.value.length < 5) {
    password_error.innerHTML = "Password should contain atleast 5 characters";
  }

  displayUserName.innerHTML = userName.value;
  displayEmail.innerHTML = email.value;
  displayPassword.innerHTML = password.value;
  userName.value = "";
  password.value = "";
  email.value = "";
});
