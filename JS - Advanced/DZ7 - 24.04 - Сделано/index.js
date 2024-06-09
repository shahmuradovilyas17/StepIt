const productsObjectsArray = [
  {
    author: "Марсель Руссо",
    name: "Охота Амура",
    desc: "Холст, масло (50х80)",
    price: "14 500 руб",
    imgSrc: "Content-Pictures/1.jpg",
    country: "Франция",
  },
  {
    author: "Анри Селин",
    name: "Дама с собачкой",
    desc: "Акрил, бумага (50х80)",
    price: "16 500 руб",
    imgSrc: "Content-Pictures/2.jpg",
    country: "Франция",
  },
  {
    author: "Франсуа Дюпон",
    name: "Процедура",
    desc: "Цветная литография (40х60)",
    price: "20 000 руб",
    imgSrc: "Content-Pictures/3.jpg",
    country: "Франция",
  },
  {
    author: "Луи Детуш",
    name: "Роза",
    desc: "Бумага, акрил (50х80)",
    price: "12 000 руб",
    imgSrc: "Content-Pictures/4.jpg",
    country: "Франция",
  },
  {
    author: "Франсуа Дюпон",
    name: "Птичья трапеза",
    desc: "Цветная литография (40х60)",
    price: "22 500 руб",
    imgSrc: "Content-Pictures/5.jpg",
    country: "Франция",
  },
  {
    author: "Пьер Моранж",
    name: "Пейзаж с рыбой",
    desc: "Цветная литография (40х60)",
    price: "20 000 руб",
    imgSrc: "Content-Pictures/6.jpg",
    country: "Франция",
  },
  {
    author: "Курт Вернер",
    name: "Над городом",
    desc: "Цветная литография (40х60)",
    price: "16 000 руб",
    imgSrc: "Content-Pictures/Germany-1.jpg",
    country: "Германия",
  },
  {
    author: "Макс Рихтер",
    name: "Птенцы",
    desc: "Холст, масло (50х80)",
    price: "14 500 руб",
    imgSrc: "Content-Pictures/Germany-2.jpg",
    country: "Германия",
  },
  {
    author: "Мартин Майер",
    name: "Среди листьев",
    desc: "Цветная литография (40х60)",
    price: "20 000 руб",
    imgSrc: "Content-Pictures/Germany-3.jpg",
    country: "Германия",
  },
  {
    author: "Герман Беккер",
    name: "Яркая птица",
    desc: "Цветная литография (40х60)",
    price: "13 000 руб",
    imgSrc: "Content-Pictures/Germany-4.jpg",
    country: "Германия",
  },
  {
    author: "Вульф Бауэр",
    name: "Дятлы",
    desc: "Бумага, акрил (50х80)",
    price: "20 000 руб",
    imgSrc: "Content-Pictures/Germany-5.jpg",
    country: "Германия",
  },
  {
    author: "Вальтер Хартманн",
    name: "Большие воды",
    desc: "Бумага, акрил (50х80)",
    price: "23 000 руб",
    imgSrc: "Content-Pictures/Germany-6.jpg",
    country: "Германия",
  },
  {
    author: "Пол Смит",
    name: "Дикий зверь",
    desc: "Акварель, бумага (50х80)",
    price: "19 500 руб",
    imgSrc: "Content-Pictures/England-1.jpg",
    country: "Англия",
  },
  {
    author: "Джон Уайт",
    name: "Скалистый берег",
    desc: "Цветная литография (40х60)",
    price: "17 500 руб",
    imgSrc: "Content-Pictures/England-2.jpg",
    country: "Англия",
  },
  {
    author: "Джим Уотсон",
    name: "Река и горы",
    desc: "Акварель, бумага (50х80)",
    price: "20 500 руб",
    imgSrc: "Content-Pictures/England-3.jpg",
    country: "Англия",
  },
  {
    author: "Юджин Зиллион",
    name: "Белый попугай",
    desc: "Цветная литография (40х60)",
    price: "15 500 руб",
    imgSrc: "Content-Pictures/England-4.jpg",
    country: "Англия",
  },
  {
    author: "Эрик Гиллман",
    name: "Ночная рыба",
    desc: "Бумага, акрил (50х80)",
    price: "12 500 руб",
    imgSrc: "Content-Pictures/England-5.jpg",
    country: "Англия",
  },
  {
    author: "Альфред Барр",
    name: "Рыжий кот",
    desc: "Цветная литография (40х60)",
    price: "21 000 руб",
    imgSrc: "Content-Pictures/England-6.jpg",
    country: "Англия",
  },
];
const productsCountries = document.querySelectorAll(
  ".products-upper-menu-element"
);

const productsMenuElements = document.querySelector(".products-menu-elements");

productsCountries.forEach((country) => {
  country.addEventListener("click", (event) => {
    // country.style.border = "1px solid #D4E8D9";
    // country.style.backgroundColor = "#D4E8D9";
    // country.style.color = "black";
    country.style.border = "1px solid #376B44";
    country.style.backgroundColor = "#376B44";
    country.style.borderRadius = "100px";
    country.style.color = "#F4F6F5";
    productsMenuElements.innerHTML = "";
    let productElement = "";
    productsObjectsArray.forEach((object) => {
      if (object.country === country.textContent) {
        productElement += `<div class="products-menu-element">
        <img
          src="${object.imgSrc}"
          alt="picture"
          class="products-menu-element-image"
        />
        <div class="products-menu-element-author">${object.author}</div>
        <div class="products-menu-element-name">${object.name}</div>
        <div class="products-menu-element-desc">${object.desc}</div>
        <div class="products-menu-element-price">${object.price}</div>
        <div class="products-menu-element-btn">В корзину</div>
        </div>`;
      }

      productsMenuElements.innerHTML = productElement;
    });
  });
});
