import { isEmptyInput, isInvalidEmail } from "./validate.js";

const contentContainer = document.querySelector(".content");
const steps = contentContainer.querySelectorAll("[data-step]");
let currentStep = [...steps].findIndex((step) =>
  step.classList.contains("showing")
);
if (currentStep < 0) {
  currentStep = 0;
  showStep();
}

contentContainer.addEventListener("click", (e) => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-prev]")) {
    currentStep -= 1;
  }
  showStep();
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
