import { isEmptyInput, isInvalidEmail } from "./validate.js";

const nextBtn = document.getElementById("next-btn");

function renderNextPage() {
  if (isEmptyInput()) {
    console.log("Fill all input field");
    return;
  }
  if (isInvalidEmail()) {
    console.log("Enter a valid Email address");
    return;
  }

  nextBtn.addEventListener("click", () => {
    window.location.href = "../step2.html";
    //preventDefault();
  });
}
renderNextPage();

document.querySelector(".toggle-bar").addEventListener("click", function () {
  this.classList.toggle("active");
});
