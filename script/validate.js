const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const emailError = document.getElementById("email-error");

export const isEmptyInput = () => {
  if (name.value === "" || email.value === "" || phoneNumber.value === "") {
    return true;
  } else {
    return false;
  }
};

export const isInvalidEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailRegex.test(email.value)) {
    emailError.textContent = "Enter a valid Email";
    return false;
  } else {
    return true;
  }
};
