let showPopupButton1 = document.getElementById('show-popup1');
let showPopupButton2= document.getElementById('show-popup2');
let showPopupButton3= document.getElementById('show-popup3');
let showPopupButton4 = document.getElementById('show-popup4');
let showPopupButton5 = document.getElementById('show-popup5');
let showPopupButton6 = document.getElementById('show-popup6');
let popupContainer = document.getElementById('popup-container');
showPopupButton1.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});
showPopupButton2.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});
showPopupButton3.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});
showPopupButton4.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});
showPopupButton5.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});
showPopupButton6.addEventListener('click', () => {
  popupContainer.style.display = 'block';
});
//first name
let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");
//last name
let lastNameInput = document.getElementById("last-name-input");
let lastNameError = document.getElementById("last-name-error");
let emptyLastNameError = document.getElementById("empty-last-name");
//phone
let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");
//email
let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");
//people
let peopleInput = document.getElementById("people");
let peopleError = document.getElementById("people-error");
let emptyPeopleError = document.getElementById("empty-people");
//submit
let submitButton = document.getElementById("submit-button");
//Valid
let validClasses = document.getElementsByClassName("valid");
let invalidClasses = document.getElementsByClassName("error");

const peopleVerify = (people) => {
  const regex =
    /^[1-9]{1,}$/;
  return regex.test(people) && people.length >0;
};
const textVerify = (text) => {
  const regex = /^[a-zA-Z]{3,}$/;
  return regex.test(text);
};

const phoneVerify = (number) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(number);
};

const emailVerify = (input) => {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(input);
};

const emptyUpdate = (
  inputReference,
  emptyErrorReference,
  otherErrorReference
) => {
  if (!inputReference.value) {
    emptyErrorReference.classList.remove("hide");
    otherErrorReference.classList.add("hide");
    inputReference.classList.add("error");
  } else {
    emptyErrorReference.classList.add("hide");
  }
};
const errorUpdate = (inputReference, errorReference) => {
  errorReference.classList.remove("hide");
  inputReference.classList.remove("valid");
  inputReference.classList.add("error");
};
const validInput = (inputReference) => {
  inputReference.classList.remove("error");
  inputReference.classList.add("valid");
};
firstNameInput.addEventListener("input", () => {
  if (textVerify(firstNameInput.value)) {
    firstNameError.classList.add("hide");
    validInput(firstNameInput);
  } else {
    errorUpdate(firstNameInput, firstNameError);
    emptyUpdate(firstNameInput, emptyFirstNameError, firstNameError);
  }
});
lastNameInput.addEventListener("input", () => {
  if (textVerify(lastNameInput.value)) {
    lastNameError.classList.add("hide");
    validInput(lastNameInput);
  } else {
    errorUpdate(lastNameInput, lastNameError);
    emptyUpdate(lastNameInput, emptyLastNameError, lastNameError);
  }
});
phoneInput.addEventListener("input", () => {
  if (phoneVerify(phoneInput.value)) {
    phoneError.classList.add("hide");
    validInput(phoneInput);
  } else {
    errorUpdate(phoneInput, phoneError);
    emptyUpdate(phoneInput, emptyPhoneError, phoneError);
  }
});
emailInput.addEventListener("input", () => {
  if (emailVerify(emailInput.value)) {
    emailError.classList.add("hide");
    validInput(emailInput);
  } else {
    errorUpdate(emailInput, emailError);
    emptyUpdate(emailInput, emptyEmailError, emailError);
  }
});
peopleInput.addEventListener("input", () => {
  if (peopleVerify(peopleInput.value)) {
    peopleError.classList.add("hide");
    validInput(peopleInput);
  } else {
    errorUpdate(peopleInput, peopleError);
    emptyUpdate(peopleInput, emptyPeopleError, peopleError);
  }
});
submitButton.addEventListener("click", () => {
  if (validClasses.length == 5 && invalidClasses.length == 0) {
    alert("Success");
  } else {
    alert("Error");
  }
});
