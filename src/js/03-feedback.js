import { throttle } from "lodash";

const inputForm = document.querySelector(".feedback-form");

inputForm.addEventListener("input", throttle(onFormInput, 500));
inputForm.addEventListener("submit", onFormSubmit);

function onFormInput() {
  const data = {
    email: inputForm.email.value,
    message: inputForm.message.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();

  localStorage.removeItem("feedback-form-state");
}

function fullfillForm() {
  const filledForm = localStorage.getItem("feedback-form-state");
  const toParseForm = JSON.parse(filledForm);

  if (filledForm) {
    inputForm.email.value = toParseForm.email;
    inputForm.message.value = toParseForm.message;
  }
}

fullfillForm();
