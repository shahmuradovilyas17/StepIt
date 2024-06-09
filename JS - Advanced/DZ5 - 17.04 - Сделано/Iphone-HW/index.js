const addProduct = document.querySelector("#addProductButton");
const productNameInput = document.querySelector("#productNameInput");
const productImageInput = document.querySelector("#productImageInput");
const productDescriptionInput = document.querySelector(
  "#productDescriptionInput"
);
const productList = document.querySelector("#productList");

addProduct.addEventListener("click", (event) => {
  if (productNameInput.value === "") {
    alert("Название продукта пусто");
  } else if (productImageInput.value === "") {
    alert("Картинка продукта пусто");
  } else if (productDescriptionInput.value === "") {
    alert("Описание продукта пусто");
  } else {
    const productObj = {
      name: productNameInput.value,
      image: productImageInput.value,
      description: productDescriptionInput.value,
    };

    const productElement = document.createElement("DIV");
    const productElementName = document.createElement("DIV");
    const productElementDescription = document.createElement("DIV");
    productElementName.textContent = productObj.name;
    productElementDescription.textContent = productObj.description;
    productElement.className = "product";
    productElement.append(productElementName);
    productElement.append(productElementDescription);
    productList.append(productElement);

    productElement.addEventListener("click", (event) => {
      Array.from(productList.children).forEach((item) => {
        if (item.matches(".product-details")) {
          item.remove();
        }
      });
      const productDetailsElement = document.createElement("DIV");
      productDetailsElement.className = "product-details";
      const productDetailsElementImg = document.createElement("img");
      const productDetailsElementName = document.createElement("DIV");
      const productDetailsElementDescription = document.createElement("DIV");

      productDetailsElementImg.src = productObj.image;
      productDetailsElement.append(productDetailsElementImg);

      productDetailsElementName.textContent = productObj.name;
      productDetailsElement.append(productDetailsElementName);

      productDetailsElementDescription.textContent = productObj.description;
      productDetailsElement.append(productDetailsElementDescription);

      productList.append(productDetailsElement);
    });

    productNameInput.value = "";
    productImageInput.value = "";
    productDescriptionInput.value = "";
  }
});
