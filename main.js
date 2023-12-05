const firstName = document.querySelector("#firstNameInput");
const lastName = document.querySelector("#lastNameInput");
const emailAdress = document.querySelector("#emailInput");
const password = document.querySelector("#passInput");

const firstNameError = document.querySelector("#firstNameError");
const lastNameError = document.querySelector("#lastNameError");
const emailAdressError = document.querySelector("#emailError");
const passError = document.querySelector("#passError");

const button = document.querySelector("#button");

button.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
});
