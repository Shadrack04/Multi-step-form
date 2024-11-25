export const contentContainer = document.querySelector(".content");
export const steps = contentContainer.querySelectorAll("[data-step]");

export class FormState {
  constructor() {
    this.stepIndex = [...steps].findIndex((step) =>
      step.classList.contains("showing")
    );
    this.errorArray = [];
  }

  setStepIndex(navigationDirection) {
    this.stepIndex += navigationDirection;
  }
  getStepIndex() {
    return this.stepIndex;
  }

  setErrorArray(error) {
    this.errorArray = error;
  }
  getErrorArray() {
    return this.errorArray;
  }
}

export const formState = new FormState();
