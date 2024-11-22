import { addOns, updateAddOns, saveToStorage } from "./localstorage.js";

export const handleAddOns = (e) => {
  let addOnsArray = [];
  if (e.target.classList.contains("add-on")) {
    const inputs = document.querySelectorAll(".step3-section input");
    inputs.forEach((input) => {
      if (input.checked) {
        addOnsArray.push(input.closest(".card"));
      }
    });
  }
  updateAddOns(addOnsArray);
  saveToStorage("addons", addOns);
  console.log(addOns);
};
