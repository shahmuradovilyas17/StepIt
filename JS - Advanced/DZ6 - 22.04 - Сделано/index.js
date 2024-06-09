const imageAddButton = document.querySelector("#image-button-add");
const imageUrlInput = document.querySelector("#image-URL");
const imageAltInput = document.querySelector("#image-alt");
const imageContainer = document.querySelector("#image-container");

document.addEventListener("click", (event) => {
  if (event.target.id === "image-button-add") {
    if (imageUrlInput.value === "") {
      alert("No URL");
      return;
    }
  }

  if (event.target.id === "image-button-add") {
    const imageElementBlock = document.createElement("DIV");
    const imageElement = document.createElement("img");
    const imageDeleteButton = document.createElement("button");
    imageDeleteButton.textContent = "Delete";
    imageDeleteButton.id = "image-button-delete";
    imageElement.src = imageUrlInput.value;
    imageElement.setAttribute("alt", imageAltInput.value);

    imageElementBlock.append(imageElement);
    imageElementBlock.append(imageDeleteButton);
    imageContainer.append(imageElementBlock);

    imageAltInput.value = "";
    imageUrlInput.value = "";
  }

  if (event.target.getAttribute("alt") === "") {
    event.target.setAttribute("style", "border: 2px solid red");
  }

  if (event.target.id === "image-button-delete") {
    event.target.previousElementSibling.remove();
    event.target.remove();
  }
});
