const addButton = document.querySelector("#button-add");
const inputName = document.querySelector("#input-name");
const inputDesc = document.querySelector("#input-desc");
const inputImage = document.querySelector("#input-img-src");
const containerDiv = document.querySelector(".container-div");

const contentArray = [];
//Лишнее

// const showArray = document.querySelector("#show-array");

// showArray.addEventListener("click", (event) => {
//   console.log(contentArray);
// });

//Лишнее

const addObjectInArray = (array, name, desc, img) => {
  const inputObj = {
    name: name,
    desc: desc,
    imgSrc: img,
  };

  return array.push(inputObj);
};

const createContentBlock = (array) => {
  const contentContainer = document.createElement("div");
  contentContainer.className = "content-container";
  const image = document.createElement("img");
  image.className = "image";
  image.src = array[array.length - 1].imgSrc;
  const name = document.createElement("div");
  name.className = "name";
  name.textContent = array[array.length - 1].name;
  const description = document.createElement("div");
  description.className = "description";
  description.textContent = array[array.length - 1].desc;
  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";

  contentContainer.append(image);
  contentContainer.append(name);
  contentContainer.append(description);
  contentContainer.append(deleteButton);

  containerDiv.append(contentContainer);
};

const deleteElement = (array) => {
  const contentContainer = event.target.closest(".content-container");
  const name = contentContainer.querySelector(".name");
  const imgSrc = contentContainer.querySelector(".image").getAttribute("src");
  const desc = contentContainer.querySelector(".description");
  array = array.forEach((el) => {
    if (
      el.name === name.textContent &&
      el.imgSrc === imgSrc &&
      el.desc === desc.textContent
    ) {
      const index = array.indexOf(el);

      array.splice(index, 1);
    }
  });

  event.target.closest(".content-container").remove();
};

const openDescription = (array) => {
  const contentContainer = event.target.closest(".content-container");
  const name = contentContainer.querySelector(".name");
  const imgSrc = contentContainer.querySelector(".image").getAttribute("src");
  const desc = contentContainer.querySelector(".description");
  array.forEach((container) => {
    if (
      container.name === name.textContent &&
      container.imgSrc === imgSrc &&
      container.desc === desc.textContent
    ) {
      const descriptionContainer = document.createElement("div");
      descriptionContainer.className = "description-container";
      const descriptionContainerName = document.createElement("div");
      descriptionContainerName.className = "description-container-name";
      descriptionContainerName.textContent = container.name;
      const descriptionContainerImage = document.createElement("img");
      descriptionContainerImage.className = "description-container-image";
      descriptionContainerImage.src = container.imgSrc;
      const descriptionContainerDesc = document.createElement("div");
      descriptionContainerDesc.className = "description-container-desc";
      descriptionContainerDesc.textContent = container.desc;

      descriptionContainer.append(descriptionContainerImage);
      descriptionContainer.append(descriptionContainerName);
      descriptionContainer.append(descriptionContainerDesc);
      containerDiv.append(descriptionContainer);
    }
  });
};

addButton.addEventListener("click", (event) => {
  addObjectInArray(
    contentArray,
    inputName.value,
    inputDesc.value,
    inputImage.value
  );

  createContentBlock(contentArray);

  const deleteButtons = containerDiv.querySelectorAll(".delete-button");

  deleteButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      deleteElement(contentArray);
    });
  });

  const contentContainers = containerDiv.querySelectorAll(".content-container");

  contentContainers.forEach((container) => {
    container.addEventListener("click", (event) => {
      Array.from(containerDiv.children).forEach((item) => {
        if (item.matches(".description-container")) {
          item.remove();
        }
      });
      openDescription(contentArray);
    });
  });
});
