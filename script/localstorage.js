export let plan = [];
export let addOns = [];

export const updatePlan = (newValue) => {
  plan = newValue;
};
export const updateAddOns = (newValue) => {
  addOns = newValue;
};

export const setBonus = (Yearly) => {
  plan[0].bonus = Yearly;
  saveToStorage("plan", plan);
};

export const saveToStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const getPlanAmount = () => {
  console.log(plan);
  let amount = 0;
  plan.map((item) => {
    amount += parseInt(item.planAmount);
  });
  return amount;
};
export const getAddOnAmount = () => {
  let price = 0;
  addOns.map((item) => {
    price += parseInt(item.querySelector(".price").textContent);
  });
  return price;
};

export const clearStorage = () => {
  localStorage.clear();
};
