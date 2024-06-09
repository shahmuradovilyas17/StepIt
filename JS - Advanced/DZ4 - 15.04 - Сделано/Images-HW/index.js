const imageAddButton = document.querySelector("#image-button-add");
const imageUrlInput = document.querySelector("#image-URL");
const imageAltInput = document.querySelector("#image-alt");
const imageContainer = document.querySelector("#image-container");

imageAddButton.addEventListener("click", (event) => {
  if (imageUrlInput.value === "") {
    alert("No URL");
    return;
  }

  const imageElementBlock = document.createElement("DIV");
  const imageElement = document.createElement("img");
  const imageDeleteButton = document.createElement("button");
  imageDeleteButton.textContent = "Delete";
  imageElement.src = imageUrlInput.value;
  imageElement.setAttribute("alt", imageAltInput.value);

  imageElementBlock.append(imageElement);
  imageElementBlock.append(imageDeleteButton);
  imageContainer.append(imageElementBlock);

  imageAltInput.value = "";
  imageUrlInput.value = "";

  imageElement.addEventListener("click", (event) => {
    if (imageElement.getAttribute("alt") === "") {
      imageElement.setAttribute("style", "border: 2px solid red");
    }
  });

  imageDeleteButton.addEventListener("click", (event) => {
    imageElementBlock.remove();
  });
});
