const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");

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
    return false;
  } else {
    return true;
  }
};
