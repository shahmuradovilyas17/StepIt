//RecomendationMenu

const recomendationMenu = document.querySelector(".recomendation-menu-wrapper");

const recMenuInfo = document.createElement("div");
recMenuInfo.className = "recomendation-menu-info";

const recMenuImg = document.createElement("img");
recMenuImg.src = "RecomendationMenu/Recomendation-img.png";

recomendationMenu.append(recMenuInfo);
recomendationMenu.append(recMenuImg);

const recMenuNameButton = document.createElement("div");
recMenuNameButton.className = "recomendation-menu-name-button";

const recMenuName = document.createElement("div");
recMenuName.className = "recomendation-menu-name";
recMenuName.textContent =
  "The furniture brand for the future, with timeless designs";

const recMenuButton = document.createElement("button");
recMenuButton.className = "recomendation-menu-button";
recMenuButton.textContent = "View collection";

const recMenuDesc = document.createElement("div");
recMenuDesc.className = "recomendation-menu-description";
recMenuDesc.textContent =
  "A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful colors and a beautiful way to display things digitally using modern web technologies.";

recMenuNameButton.append(recMenuName);
recMenuNameButton.append(recMenuButton);

recMenuInfo.append(recMenuNameButton);
recMenuInfo.append(recMenuDesc);

//CeramicsMenu

const ceramicsArr = [
  {
    Img: "Ceramics-menu/The Dandy chair.jpg",
    Name: "The Dandy chair",
    Price: 250,
  },
  {
    Img: "Ceramics-menu/Rustic Vase Set.jpg",
    Name: "Rustic Vase Set",
    Price: 155,
  },
  {
    Img: "Ceramics-menu/The Silky Vase.jpg",
    Name: "The Silky Vase",
    Price: 125,
  },
  {
    Img: "Ceramics-menu/The Lucy Lamp.jpg",
    Name: "The Lucy Lamp",
    Price: 399,
  },
];

const ceramicsMenuElements = document.querySelector(".ceramics-menu-elements");

ceramicsArr.forEach((item) => {
  const itemElement = `<li class="ceramics-menu-element">
    <img src="${item.Img}" alt="#" />
    <div class="ceramics-menu-element-name">${item.Name}</div>
    <div class="ceramics-menu-element-price">£${item.Price}</div>
  </li>`;

  ceramicsMenuElements.innerHTML += itemElement;
});

//PopularProductsMenu

const popProdArr = [
  {
    Img: "Popular-Products-menu/The Poplar suede sofa.jpg",
    Name: "The Poplar suede sofa",
    Price: 980,
  },
  {
    Img: "Popular-Products-menu/The Dandy chair-1.jpg",
    Name: "The Dandy chair",
    Price: 250,
  },
  {
    Img: "Popular-Products-menu/The Dandy chair-2.jpg",
    Name: "The Dandy chair",
    Price: 250,
  },
];

const popularProductsMenuElements = document.querySelector(
  ".popular-products-menu-elements"
);

popProdArr.forEach((item) => {
  const itemElement = `<li class="popular-products-menu-element">
    <img src="${item.Img}" alt="#" />
    <div class="popular-products-menu-element-name">${item.Name}</div>
    <div class="popular-products-menu-element-price">£${item.Price}</div>
  </li>`;

  popularProductsMenuElements.innerHTML += itemElement;
});
