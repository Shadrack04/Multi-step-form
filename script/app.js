import { isInputInvalid } from "./validate.js";
import { selectDefaultPlan, selectPlan, markActiveStep } from "./plan.js";
import { handleAddOns } from "./addons.js";
import { renderStep4 } from "./renderStep4.js";
import { updateAddOns, clearStorage } from "./localstorage.js";
import { plan, setBonus } from "./localstorage.js";
import { FormState, steps, contentContainer } from "./formstate.js";

const planCards = document.querySelector(".step2-section .cards");
const addOnContainer = document.querySelector(".step3-section .cards");
const bonus = document.querySelectorAll(".bonus");

const formState = new FormState();
console.log(formState.getStepIndex());
if (formState.getStepIndex() < 0) {
  formState.setStepIndex(1);

  showStep();
  markActiveStep(formState.getStepIndex());
} else if (FormState.getStepIndex() > 3) {
  formState.setStepIndex(4);
  showStep();
}

contentContainer.addEventListener("click", (e) => {
  let navigationDirection;
  if (e.target.matches("[data-next]")) {
    navigationDirection = 1;
  } else if (e.target.matches("[data-prev]")) {
    navigationDirection = -1;
  } else if (e.target.matches("[data-confirm]")) {
    navigationDirection = 1;
  } else return;

  // Validate the form and push any error(if any) to the errorArray
  formState.setErrorArray(isInputInvalid());
  if (formState.getErrorArray().length === 0) {
    formState.setStepIndex(navigationDirection);
    if (formState.getStepIndex() > 3) {
      // formState.getStepIndex() will return 3 + 1;
      formState.setStepIndex(0);
      console.log(formState.getStepIndex());
      showStep();
    }
    showStep();
    //markActiveStep(stepIndex);
    markActiveStep(formState.getStepIndex());
  }
});

function showStep() {
  steps.forEach((step, index) => {
    step.classList.toggle("showing", index === formState.getStepIndex());
  });
}

// runs the toggle bar
document.querySelector(".toggle-bar").addEventListener("click", function () {
  this.classList.toggle("active");
  bonus.forEach((p) => {
    p.classList.toggle("hid-bonus");
  });
  setBonus("Yearly");
  renderStep4();
});
selectDefaultPlan();

if (planCards) {
  planCards.addEventListener("click", selectPlan);
}

if (addOnContainer) {
  addOnContainer.addEventListener("click", (e) => {
    handleAddOns(e);
    renderStep4();
  });
}

const defaultInput = addOnContainer.querySelectorAll("input");
const newAddons = [...defaultInput]
  .filter((input) => input.checked)
  .map((input) => input.closest(".card"));
updateAddOns(newAddons);
renderStep4();
