const submitBtnId = "#submit-btn";
const dismissBtnId = "#dismiss-btn";
const errorMessage = "Valid email required";

let form = document.querySelector("#sub-form");

let submitBtn = document.querySelector("#submit-btn");
let dismissBtn = document.querySelector("#dismiss-btn");

let primaryView = document.querySelector("primary");
let secondaryView = document.querySelector("secondary");

let errorLabel = document.querySelector("#error__label");
let formInput = document.querySelector("#form__input");

let mailText = document.querySelector("#mailtext");

submitBtn.addEventListener("click", (e) => {
  // Prevent page refreshing
  e.preventDefault();

  if (!form.checkValidity()) {
    errorLabel.style.visibility = "visible";
    formInput.classList.add("haserror");
  } else {
    mailText.innerHTML = formInput.value;
    errorLabel.style.visibility = "hidden";
    formInput.classList.remove("haserror");
    primaryView.style.display = "none";
    secondaryView.style.display = "flex";
  }
});

dismissBtn.addEventListener("click", (e) => {
  // Prevent page refreshing
  e.preventDefault();
  primaryView.style.display = "flex";
  secondaryView.style.display = "none";
});
