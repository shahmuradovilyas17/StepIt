const button = document.querySelector(".button");

document.addEventListener("click", (event) => {
  if (document.querySelector(".container")) {
    if (event.target.className === "close-symbol") {
      const container = document.querySelector(".container");
      button.textContent = "Показать квадрат";
      container.remove();
    }

    if (event.target.textContent === "Скрыть квадрат") {
      const container = document.querySelector(".container");
      button.textContent = "Показать квадрат";
      container.remove();
    }
    if (event.target.parentElement != document.body) {
      const container = document.querySelector(".container");
      button.textContent = "Показать квадрат";
      container.remove();
    }
  } else {
    if (event.target.className === "button") {
      button.textContent = "Скрыть квадрат";
      const closeSymbol = document.createElement("div");
      closeSymbol.textContent = "X";
      closeSymbol.className = "close-symbol";
      const container = document.createElement("div");
      container.className = "container";
      container.append(closeSymbol);
      document.body.append(container);
    }
  }
});

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    if (document.querySelector(".container")) {
      const container = document.querySelector(".container");
      button.textContent = "Показать квадрат";
      container.remove();
    }
  }
});
