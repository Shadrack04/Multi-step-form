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
  return plan.forEach((item) => parseInt(item.planAmount));
};
export const getAddOnAmount = () => {};
