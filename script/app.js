import { isInputInvalid } from "./validate.js";
import { selectDefaultPlan, selectPlan, markActiveStep } from "./plan.js";
import { handleAddOns } from "./addons.js";
import { renderStep4 } from "./renderStep4.js";
import { updateAddOns, clearStorage } from "./localstorage.js";
import { plan, setBonus } from "./localstorage.js";

const planCards = document.querySelector(".step2-section .cards");
const addOnContainer = document.querySelector(".step3-section .cards");
const bonus = document.querySelectorAll(".bonus");
const contentContainer = document.querySelector(".content");
const steps = contentContainer.querySelectorAll("[data-step]");
let currentStep = [...steps].findIndex((step) =>
  step.classList.contains("showing")
);
if (currentStep < 0) {
  currentStep = 0;
  showStep();
  markActiveStep(currentStep);
} else if (currentStep > 3) {
  currentStep = 4;
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
  } else if (e.target.matches("[data-confirm]")) {
    incrementor = 4;
  } else return;
  errorArray = isInputInvalid();
  if (errorArray.length === 0) {
    currentStep += incrementor;
    if (currentStep > 3) {
      currentStep = 4;
      showStep();
    }
    showStep();
    markActiveStep(currentStep);
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
  bonus.forEach((p) => {
    p.classList.toggle("hid-bonus", !p.classList.contains("hid-bonus"));
  });
  setBonus("Yearly");
  renderStep4();
});
selectDefaultPlan();

planCards.addEventListener("click", (e) => {
  selectPlan(e);
});
addOnContainer.addEventListener("click", (e) => {
  handleAddOns(e);
  renderStep4();
});

const defaultInput = addOnContainer.querySelectorAll("input");
const newAddons = [...defaultInput]
  .filter((input) => input.checked)
  .map((input) => input.closest(".card"));
updateAddOns(newAddons);
renderStep4();
