const form = document.querySelector("form");

const formInputs = document.querySelectorAll("input");
const inputAge = document.querySelector(".input-age");

const addErrors = (input, text) => {
  input.classList.add("error-input");
  const errorMesageSpan = document.createElement("span");
  errorMesageSpan.textContent = text;
  const inputParentElement = input.parentElement;
  inputParentElement.append(errorMesageSpan);
};

const deleteErrors = (input) => {
  input.classList.remove("error-input");
  const errorTextElement = input.nextElementSibling;
  if (errorTextElement) {
    errorTextElement.remove();
  }
};

const ageCheck = () => {
  checkBox = document.querySelector(".smoking-check-box");

  if (checkBox.checked) {
    const cigaretteInput = document.createElement("input");
    cigaretteInput.type = "text";
    cigaretteInput.className = "input-cigarette";
    cigaretteInput.placeholder = "Which cigarette you smoke?";

    inputAge.parentElement.append(cigaretteInput);
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  formInputs.forEach((input) => {
    deleteErrors(input);
  });

  formInputs.forEach((input) => {
    if (input.value === "") {
      addErrors(input, "Input is empty");
      return;
    }

    if (input.dataset.regExp) {
      if (!new RegExp(input.dataset.regExp).test(input.value)) {
        addErrors(input, "Incorrect input");
        return;
      }
    }

    if (input.dataset.minLength) {
      if (input.value.length < +input.dataset.minLength) {
        addErrors(input, "Input is too short");
        return;
      }
    }
    if (input.dataset.maxLength) {
      if (input.value.length > +input.dataset.maxLength) {
        addErrors(input, "Input is too long");
        return;
      }
    }

    if (input.dataset.regExpEmail) {
      if (!new RegExp(input.dataset.regExpEmail).test(input.value)) {
        addErrors(input, "Incorrect email");
        return;
      }
    }
    if (input.dataset.minAge) {
      if (
        inputAge.value < +input.dataset.minAge ||
        inputAge.value > +input.dataset.maxAge
      ) {
        addErrors(inputAge, "Wrong Age");
      }
    }
  });
});

inputAge.addEventListener("input", (event) => {
  const regex = /[^0-9+$]/g;
  if (regex.test(inputAge.value)) {
    inputAge.value = inputAge.value.replace(regex, "");
  }

  if (inputAge.value)
    if (inputAge.value > 18) {
      if (!document.querySelector(".smoking-check-box")) {
        const checkBox = document.createElement("input");
        checkBox.className = "smoking-check-box";
        checkBox.type = "checkbox";
        checkBox.name = "smoking-check";
        // checkBox.onclick(ageCheck());
        const checkBoxLabel = document.createElement("label");
        checkBoxLabel.for = "smoking-check";
        checkBoxLabel.textContent = "Do you smoke?";
        inputAge.parentElement.append(checkBox);
        inputAge.parentElement.append(checkBoxLabel);
      }
    } else if (inputAge.value < 18) {
      if (document.querySelector(".smoking-check-box")) {
        checkBox = document.querySelector(".smoking-check-box");
        checkBoxLabel = checkBox.nextElementSibling;
        checkBox.remove();
        checkBoxLabel.remove();
      }
    }
});
