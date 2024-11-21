import { isInputInvalid } from "./validate.js";

const contentContainer = document.querySelector(".content");
const steps = contentContainer.querySelectorAll("[data-step]");
let currentStep = [...steps].findIndex((step) =>
  step.classList.contains("showing")
);
if (currentStep < 0) {
  currentStep = 0;
  showStep();
}

let errorArray = [];
contentContainer.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    //currentStep += 1;
    incrementor = 1;
  } else if (e.target.matches("[data-prev]")) {
    //currentStep -= 1;
    incrementor = -1;
  } else return;
  errorArray = isInputInvalid();
  if (errorArray.length === 0) {
    currentStep += incrementor;
    showStep();
  }
});

function showStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("showing", index === currentStep);
  });
}

// runs the toggle bar
document.querySelector(".toggle-bar").addEventListener("click", function () {
  this.classList.toggle("active");
});
