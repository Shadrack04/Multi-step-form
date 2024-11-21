const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const emailError = document.getElementById("email-error");
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");

export const isInvalidEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email.value)) {
    return false;
  } else {
    return true;
  }
};

export const isEmptyInput = () => {
  if (name.value === "" || email.value === "" || phoneNumber.value === "") {
    return true;
  } else {
    return false;
  }
};

function clearInputError() {
  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
}

export function isInputInvalid() {
  clearInputError();
  let error = [];
  if (name.value === "") {
    nameError.textContent = "Enter your name";
    error.push(true);
  } else if (email.value === "" || isInvalidEmail()) {
    emailError.textContent = "Enter a valid email";
    error.push(true);
  } else if (phoneNumber.value === "") {
    phoneError.textContent = "Enter your phone number";
    error.push(true);
  }
  return error;
}
