import { plan, updatePlan, saveToStorage } from "./localstorage.js";

const planContainer = document.querySelector(".step2-section");
const planCards = planContainer.querySelectorAll(".card");
let selectedPlan = [...planCards].findIndex((plan) =>
  plan.classList.contains("selected-plan")
);
let planAmount;

export const selectDefaultPlan = () => {
  [...planCards][0].classList.add("selected-plan");
};

export const selectPlan = (e) => {
  if (e.target.classList.contains("card")) {
    const plan = e.target.closest(".card");
    getPlan(plan);
    [...planCards].forEach((card) => card.classList.remove("selected-plan"));
    e.target.closest(".card").classList.add("selected-plan");
  } else return;
};

export const markActiveStep = (index) => {
  const stepIndicator = document.querySelectorAll(".step .count");
  [...stepIndicator].forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
};

function getPlan(planContainer) {
  let planAmount = planContainer.querySelector(".plan-amount").textContent;
  let title = planContainer.querySelector(".title").textContent;
  let option = planContainer.querySelector(".bonus");
  let bonus = option.classList.contains("hid-bonus") ? "Monthly" : "Yearly";
  const newValue = [
    {
      title,
      planAmount,
      bonus,
    },
  ];
  updatePlan(newValue);
  saveToStorage("plan", plan);
  console.log(plan);
}
