const products = fetch("https://dummyjson.com/products");

const productsMenu = document.querySelector(".products-menu");
const filtrationMenu = document.querySelector(".filtration-menu");
const cartCount = document.querySelector(".cart-count");
const decreaseButtons = document.querySelectorAll(".button-decrease");
const increaseButtons = document.querySelectorAll(".button-increase");
const filtrationCategory = document.querySelectorAll(
  ".filtration-menu-category"
);
const cartButton = document.querySelector(".cart-button");
const cartCountElement = document.querySelector(".cart-count");
const topMenu = document.querySelector(".top-menu");
const cartMenuWrapper = document.querySelector(".cart-menu-wrapper");
const cartMenuItems = document.querySelector(".cart-menu-items");
const searchInputElement = document.querySelector(".search-input");

let productsArrObj = null;
let productsArr = null;
const cartArr = [];

const languageArray = {
  az: {
    filtration: "Filtrasiya",
    ["total-price"]: "Ümumi qiymət",
    ["total-count"]: "Ümumi say",
    ["to-cart"]: "Səbətə",
    ["cart-remove"]: "Sil",
  },
  en: {
    filtration: "Filtration",
    ["total-price"]: "Total Price",
    ["total-count"]: "Total Count",
    ["to-cart"]: "To Cart",
    ["cart-remove"]: "Delete",
  },
  ru: {
    filtration: "Фильтрация",
    ["total-price"]: "Общая цена",
    ["total-count"]: "Общее количество",
    ["to-cart"]: "В корзину",
    ["cart-remove"]: "Удалить",
  },
};

products
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    productsArrObj = data;
    productsArr = productsArrObj.products;
    init();
  });

const init = () => {
  const renderProducts = (arr) => {
    let indexHTML = "";
    arr.forEach((element) => {
      indexHTML += `<div class="products-menu-item" data-id = "${element.id}" data-category = "${element.category}">
          <img
            src="${element.thumbnail}"
            alt=""
          />
          <div class="products-menu-item-name">${element.title}</div>
          <div class="products-menu-item-brand">${element.brand}</div>
          <div class="products-menu-item-price">${element.price}</div>
          <div class="products-menu-item-stock">${element.stock}</div>
          <div class="products-menu-item-desc">${element.description}</div>
          <div class="products-menu-item-count">1</div>
        <button class="button-decrease" data-minus>-</button>
        <button class="button-increase" data-pluse>+</button>
          <button class="button-add-cart" data-language ="to-cart">В корзину</button>
        </div>`;

      productsMenu.innerHTML = indexHTML;
    });
  };

  const renderCategories = (arr) => {
    let indexHTML = "";
    let categoriesObj = {};
    const selectElement = document.createElement("select");
    selectElement.setAttribute("data-filter", "");
    const allProductsOption = document.createElement("option");
    allProductsOption.textContent = "All Products";
    allProductsOption.value = "all";
    arr.forEach((element) => {
      if (!categoriesObj[element.category]) {
        categoriesObj[element.category] = 1;
      } else {
        categoriesObj[element.category] = categoriesObj[element.category] + 1;
      }
    });
    console.log(categoriesObj);
    for (const key in categoriesObj) {
      indexHTML += `
      <option value="${key}">${key}</option>
      `;
    }
    selectElement.append(allProductsOption);
    selectElement.insertAdjacentHTML("beforeend", indexHTML);
    filtrationMenu.append(selectElement);
  };

  const addToCartArr = (arrFrom, prod, arrTo) => {
    // const storedCartItems = localStorage.getItem("cart");

    // if (storedCartItems) {
    //   arrTo = JSON.parse(storedCartItems);
    // }
    const productElement = prod.closest(".products-menu-item");
    const productCount = productElement.querySelector(
      ".products-menu-item-count"
    );
    const targetId = productElement.dataset.id;
    arrFrom.forEach((product) => {
      if (targetId == product.id) {
        if (arrTo.includes(product)) {
          arrTo.forEach((cartProd) => {
            if (cartProd.id == targetId) {
              cartProd.cartCount += +productCount.textContent;
              productCount.textContent = "1";
            }
          });
        } else {
          arrTo.push(product);
          product.cartCount = +productCount.textContent;
          productCount.textContent = "1";
        }
      }
    });
    // localStorage.setItem("cart", JSON.stringify(arrTo));
    console.log(arrTo);
  };

  const showProductsCountInCart = (cartArr) => {
    let cartProductsCount = 0;
    cartArr.forEach((product) => {
      cartProductsCount += product.cartCount;
    });
    cartCountElement.textContent = cartProductsCount;
  };

  const renderCartProducts = (cartArr) => {
    let indexHTML = "";
    cartArr.forEach((element) => {
      indexHTML += `<div class="cart-menu-item"  data-id = "${
        element.id
      }" data-category = "${element.category}">
        <img src="${element.thumbnail}" alt="" />
        <div class="cart-menu-item-name">${element.title}</div>
        <div class="cart-menu-item-brand">${element.brand}</div>
        <div class="cart-menu-item-price">Цена за один товар: <span class = "cart-menu-item-price-span" >${
          element.price
        }</span></div>
        <div class="cart-menu-item-total-price">Общая Цена: <span class = "cart-menu-item-total-price-span">${
          element.cartCount * element.price
        }</span></div>
        <div class="cart-menu-item-count">${element.cartCount}</div>
        <button class="button-decrease" data-minus>-</button>
        <button class="button-increase" data-pluse>+</button>
        <button class="button-remove-cart" data-language = "cart-remove">Удалить</button>
      </div>`;
    });
    cartMenuItems.innerHTML = indexHTML;
  };

  const deleteFromCart = (cartArr) => {
    const cartItem = event.target.closest(".cart-menu-item");
    const elementIndex = cartArr.findIndex((product) => {
      return product.id == cartItem.dataset.id;
    });
    cartArr.splice(elementIndex, 1);
    cartItem.remove();
    showProductsCountInCart(cartArr);
  };

  const renderAllCartProductsCountPrice = (cartArr) => {
    if (
      document.querySelector(".cart-menu-all-count") ||
      document.querySelector(".cart-menu-all-price")
    ) {
      document.querySelector(".cart-menu-all-count").remove();
      document.querySelector(".cart-menu-all-price").remove();
    }
    const cartMenuInner = document.querySelector(".cart-menu-inner");
    let cartProductsAllCount = 0;
    let cartProductsAllPrice = 0;
    cartArr.forEach((element) => {
      cartProductsAllCount += +element.cartCount;
      cartProductsAllPrice += element.price * element.cartCount;
    });
    const cartProductsCountElement = document.createElement("div");
    cartProductsCountElement.className = "cart-menu-all-count";
    cartProductsCountElement.textContent =
      "Общее количество товаров: " + cartProductsAllCount;
    const cartProductsPriceElement = document.createElement("div");
    cartProductsPriceElement.className = "cart-menu-all-price";
    cartProductsPriceElement.textContent =
      "Общая сумма товаров: " + cartProductsAllPrice;
    cartMenuInner.append(cartProductsCountElement);
    cartMenuInner.append(cartProductsPriceElement);
  };

  const searchInput = (arr) => {
    const input = searchInputElement.value.toLowerCase();
    const results = arr.filter((item) => {
      if (item.title.toLowerCase().includes(input)) {
        //item.brand.toLowerCase().includes(input)
        return true;
      }
      return false;
    });
    if (results.length > 0) {
      renderProducts(results);
    } else {
      const productElements = productsMenu.querySelectorAll(
        ".products-menu-item"
      );
      productElements.forEach((item) => {
        item.remove();
      });
    }
    console.log(results);
    // renderProducts(results);
  };

  renderProducts(productsArr);
  renderCategories(productsArr);

  productsMenu.addEventListener("click", (e) => {
    if (e.target.closest("[data-pluse]")) {
      const productsMenu = e.target.closest(".products-menu-item");
      const itemCount = productsMenu.querySelector(".products-menu-item-count");
      itemCount.textContent = Number(itemCount.textContent) + 1;
    }
    if (e.target.closest("[data-minus]")) {
      const productsMenu = e.target.closest(".products-menu-item");
      const itemCount = productsMenu.querySelector(".products-menu-item-count");
      if (!(itemCount.textContent == 1)) {
        itemCount.textContent = Number(itemCount.textContent) - 1;
      }
    }
    if (e.target.closest(".button-add-cart")) {
      addToCartArr(productsArr, e.target, cartArr);
      showProductsCountInCart(cartArr);
      renderCartProducts(cartArr);
      renderAllCartProductsCountPrice(cartArr);
    }
  });

  const filterSelects = filtrationMenu.querySelectorAll("[data-filter]");
  console.log(filterSelects);

  filterSelects.forEach((select) => {
    select.addEventListener("change", (event) => {
      const selectValue = event.target.value;
      console.log(selectValue);
      if (selectValue === "all") {
        renderProducts(productsArr);
        searchInputElement.addEventListener("input", (event) => {
          searchInput(productsArr);
        });
      } else {
        const filteredProductsArr = productsArr.filter((item) => {
          if (item.category === selectValue) return true;
          return false;
        });
        renderProducts(filteredProductsArr);
        searchInputElement.addEventListener("input", (event) => {
          searchInput(filteredProductsArr);
        });
      }
    });
  });

  topMenu.addEventListener("click", (event) => {
    if (event.target.closest(".cart-button")) {
      cartMenuWrapper.style.display = "block";
    }
  });

  cartMenuWrapper.addEventListener("click", (event) => {
    if (event.target.closest("[data-pluse]")) {
      const cartItem = event.target.closest(".cart-menu-item");
      const itemCount = cartItem.querySelector(".cart-menu-item-count");
      const itemPrice = cartItem.querySelector(".cart-menu-item-price-span");
      const itemTotalPrice = cartItem.querySelector(
        ".cart-menu-item-total-price-span"
      );
      itemCount.textContent = Number(itemCount.textContent) + 1;
      itemTotalPrice.textContent =
        itemCount.textContent * itemPrice.textContent;
      cartArr.forEach((product) => {
        if (product.id == cartItem.dataset.id) {
          product.cartCount = +itemCount.textContent;
        }
      });
      showProductsCountInCart(cartArr);
      renderAllCartProductsCountPrice(cartArr);
      console.log(cartArr);
    }
    if (event.target.closest("[data-minus]")) {
      const cartItem = event.target.closest(".cart-menu-item");
      const itemCount = cartItem.querySelector(".cart-menu-item-count");
      const itemPrice = cartItem.querySelector(".cart-menu-item-price-span");
      const itemTotalPrice = cartItem.querySelector(
        ".cart-menu-item-total-price-span"
      );
      if (!(itemCount.textContent == 1)) {
        itemCount.textContent = Number(itemCount.textContent) - 1;
        itemTotalPrice.textContent =
          itemCount.textContent * itemPrice.textContent;
        cartArr.forEach((product) => {
          if (product.id == cartItem.dataset.id) {
            product.cartCount = +itemCount.textContent;
          }
        });
        showProductsCountInCart(cartArr);
        renderAllCartProductsCountPrice(cartArr);

        console.log(cartArr);
      }
    }
    if (event.target.parentNode === document.body) {
      cartMenuWrapper.style.display = "none";
    }
    if (event.target.closest(".button-remove-cart")) {
      deleteFromCart(cartArr);
      renderAllCartProductsCountPrice(cartArr);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      cartMenuWrapper.style.display = "none";
    }
  });

  const languageSelect = document.querySelector(".language-select");
  languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = languageSelect.value;
    const translatedWords = document.querySelectorAll("[data-language]");

    translatedWords.forEach((word) => {
      const dataLanguageValue = word.getAttribute("data-language");
      word.textContent = languageArray[selectedLanguage][dataLanguageValue];
    });
  });
};
