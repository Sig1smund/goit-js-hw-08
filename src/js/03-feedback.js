import { throttle } from "lodash";

const inputForm = document.querySelector(".feedback-form");
const dirtyArray = [];
const dataBase = [];

inputForm.addEventListener("input", throttle(onFormInput, 500));
inputForm.addEventListener("submit", onFormSubmit);

function onFormInput() {
  const data = {
    email: inputForm.email.value,
    message: inputForm.message.value,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(data));

  dirtyArray.push(data);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();

  localStorage.removeItem("feedback-form-state");

  dataBase.push(dirtyArray[dirtyArray.length - 1]);
  console.log(dataBase);
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
