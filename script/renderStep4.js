import { plan, addOns } from "./localstorage.js";

export const renderStep4 = () => {
  const jsContainer = document.querySelector(".js-dynamic");
  jsContainer.innerHTML = `
    <div class="selection-container">
      ${renderPlan()}
      <div class="add-ons">
        ${renderAddOns()}
      </div>
    </div>
    <div class="total">
      <p>Total (per month)</p>
      <h3>+$12/mo</h3>
    </div>
  `;
};

function renderPlan() {
  console.log(plan);
  let html = "";
  plan.forEach((item) => {
    html += `
      <div class="subscription">
        <div class="subscription-title">
          <h3>${item.title}(${item.bonus})</h3>
          <a href="#">Change</a>
        </div>
        <div class="subscription-pricing">
          <p class="price">+$${item.planAmount}/mo</p>
        </div>
      </div>
    `;
  });
  console.log(html);
  return html;
}

function renderAddOns() {
  let html = "";
  addOns.forEach((item) => {
    let title = item.querySelector(".add-on-title").textContent;
    let price = item.querySelector(".price").textContent;
    html += `
      <div class="add-on">
        <p>${title}</p>
        <p>+$${price}/mo</p>
      </div>
    `;
  });
  return html;
}
