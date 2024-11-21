const planContainer = document.querySelector(".step2-section");
const planCards = planContainer.querySelectorAll(".card");
let selectedPlan = [...planCards].findIndex((plan) =>
  plan.classList.contains("selected-plan")
);

export const selectDefaultPlan = () => {
  [...planCards][0].classList.add("selected-plan");
};

export const selectPlan = (e) => {
  if (e.target.classList.contains("card")) {
    [...planCards].forEach((card) => card.classList.remove("selected-plan"));
    e.target.closest(".card").classList.add("selected-plan");
  } else return;
};
