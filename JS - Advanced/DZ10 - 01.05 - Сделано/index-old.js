const addButton = document.querySelector("#button-add");
const inputName = document.querySelector("#input-name");
const inputDesc = document.querySelector("#input-desc");
const inputImage = document.querySelector("#input-img-src");
const containerDiv = document.querySelector(".container-div");

const contentArray = [];
//Лишнее

const showArray = document.querySelector("#show-array");

showArray.addEventListener("click", (event) => {
  console.log(contentArray);
});

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
      descriptionContainer.style.display = "inline-block";
      const descriptionContainerName = document.createElement("div");
      descriptionContainerName.className = "description-container-name";
      descriptionContainerName.textContent = container.name;
      const descriptionContainerImage = document.createElement("img");
      descriptionContainerImage.className = "description-container-image";
      descriptionContainerImage.src = container.imgSrc;
      const descriptionContainerDesc = document.createElement("div");
      descriptionContainerDesc.className = "description-container-desc";
      descriptionContainerDesc.textContent = container.desc;
      const descriptionEditButton = document.createElement("button");
      descriptionEditButton.className = "description-edit-button";
      descriptionEditButton.textContent = "Редактировать";

      descriptionContainer.append(descriptionContainerImage);
      descriptionContainer.append(descriptionContainerName);
      descriptionContainer.append(descriptionContainerDesc);
      descriptionContainer.append(descriptionEditButton);

      containerDiv.append(descriptionContainer);
    }
  });
};

const createEditBlock = () => {
  const descriptionContainer = event.target.closest(".description-container");
  const name = descriptionContainer.querySelector(
    ".description-container-name"
  ).textContent;
  const imgSrc = descriptionContainer
    .querySelector(".description-container-image")
    .getAttribute("src");
  const desc = descriptionContainer.querySelector(
    ".description-container-desc"
  ).textContent;

  const editContainer = document.createElement("div");
  editContainer.className = "edit-container";
  editContainer.style.display = "inline-block";
  const editContainerNameInput = document.createElement("input");
  editContainerNameInput.className = "edit-container-name-input";
  editContainerNameInput.value = name;
  const editContainerImageInput = document.createElement("input");
  editContainerImageInput.className = "edit-container-image-input";
  editContainerImageInput.value = imgSrc;
  const editContainerDescInput = document.createElement("input");
  editContainerDescInput.className = "edit-container-desc-input";
  editContainerDescInput.value = desc;
  const editContainerAcceptButton = document.createElement("button");
  editContainerAcceptButton.className = "edit-container-accept-input";
  editContainerAcceptButton.textContent = "Принять";

  editContainer.append(editContainerImageInput);
  editContainer.append(editContainerNameInput);
  editContainer.append(editContainerDescInput);
  editContainer.append(editContainerAcceptButton);

  descriptionContainer.after(editContainer);
};

const applyEdit = (array) => {
  const contentContainer = document.querySelector(".content-container");
  // const contentContainerName = contentContainer.querySelector(".name");
  // const contentContainerImgSrc = contentContainer.querySelector(".image");
  // const contentContainerDesc = contentContainer.querySelector(".description");

  const descriptionContainer = document.querySelector(".description-container");
  let descriptionContainerName = descriptionContainer.querySelector(
    ".description-container-name"
  ).textContent;
  let descriptionContainerImgSrc = descriptionContainer
    .querySelector(".description-container-image")
    .getAttribute("src");
  let descriptionContainerDesc = descriptionContainer.querySelector(
    ".description-container-desc"
  ).textContent;

  array.forEach((el) => {
    if (
      el.name === descriptionContainerName &&
      el.imgSrc === descriptionContainerImgSrc &&
      el.desc === descriptionContainerDesc
    ) {
      el.name = document.querySelector(".edit-container-name-input").value;
      el.imgSrc = document.querySelector(".edit-container-image-input").value;
      el.desc = document.querySelector(".edit-container-desc-input").value;

      contentContainer.remove();
      descriptionContainer.remove();
      event.target.parentElement.remove();
      createContentBlock(array);
      openDescription(array);
    }
  });

  // contentContainerName.textContent = event.target.closest(
  //   ".edit-container-name-input"
  // ).value;
  // contentContainerImgSrc.setAttribute(
  //   "src",
  //   event.target.closest(".edit-container-image-input").value
  // );
  // contentContainerDesc.textContent = event.target.closest(
  //   ".edit-container-desc-input"
  // ).value;

  // descriptionContainerName = document.querySelector(
  //   ".edit-container-name-input"
  // ).value;
  // descriptionContainerImgSrc = document.querySelector(
  //   ".edit-container-image-input"
  // ).value;
  // descriptionContainerDesc = document.querySelector(
  //   ".edit-container-desc-input"
  // ).value;
};

document.addEventListener("click", (event) => {
  if (event.target.closest("#button-add")) {
    addObjectInArray(
      contentArray,
      inputName.value,
      inputDesc.value,
      inputImage.value
    );

    createContentBlock(contentArray);
  }

  if (event.target.closest(".delete-button")) {
    deleteElement(contentArray);
  }

  // const deleteButtons = containerDiv.querySelectorAll(".delete-button");

  // deleteButtons.forEach((button) => {
  //   button.addEventListener("click", (event) => {
  //     deleteElement(contentArray);
  //   });
  // });

  if (event.target.closest(".content-container")) {
    Array.from(containerDiv.children).forEach((item) => {
      if (item.matches(".description-container")) {
        item.remove();
      }
    });
    openDescription(contentArray);
  }

  // const contentContainers = containerDiv.querySelectorAll(".content-container");

  // contentContainers.forEach((container) => {
  //   container.addEventListener("click", (event) => {
  //     Array.from(containerDiv.children).forEach((item) => {
  //       if (item.matches(".description-container")) {
  //         item.remove();
  //       }
  //     });
  //     openDescription(contentArray);
  //   });
  // });

  if (event.target.closest(".description-edit-button")) {
    Array.from(containerDiv.children).forEach((item) => {
      if (item.matches(".description-edit-button")) {
        item.remove();
      }
    });
    createEditBlock();
  }

  // editButton = containerDiv.querySelector(".description-edit-button");

  // editButton.addEventListener("click", (event) => {
  //   Array.from(containerDiv.children).forEach((item) => {
  //     if (item.matches(".description-edit-button")) {
  //       item.remove();
  //     }
  //   });
  //   createEditBlock();
  // });

  if (event.target.closest(".edit-container-accept-input")) {
    applyEdit(contentArray);
  }
});
