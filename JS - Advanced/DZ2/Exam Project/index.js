const collectionsMenu = document.querySelector(".collections-menu");

//Шестой Блок левый блок

const collectionsMenuLeft = document.createElement("div");
collectionsMenuLeft.className = "collections-menu-left";

const collectionsMenuLeftImage = document.createElement("img");
collectionsMenuLeftImage.src = "CollectionsMenu/Collections-Left.jpg";

const collectionsMenuLeftContent = document.createElement("div");
collectionsMenuLeftContent.className = "collections-menu-left-content";

const collectionsMenuLeftContentName = document.createElement("div");
collectionsMenuLeftContentName.className = "collections-menu-left-content-name";
collectionsMenuLeftContentName.textContent = "Modern Furniture Collections";

const collectionsMenuLeftContentPrice = document.createElement("div");
collectionsMenuLeftContentPrice.className =
  "collections-menu-left-content-price";
collectionsMenuLeftContentPrice.textContent = "Starting from";
const collectionsMenuLeftContentPriceSpan = document.createElement("span");
collectionsMenuLeftContentPriceSpan.textContent = "$500";
collectionsMenuLeftContentPrice.append(collectionsMenuLeftContentPriceSpan);

const collectionsMenuLeftContentMore = document.createElement("div");
collectionsMenuLeftContentMore.className = "collections-menu-left-content-more";
collectionsMenuLeftContentMore.textContent = "Read more";

collectionsMenuLeftContent.append(collectionsMenuLeftContentName);
collectionsMenuLeftContent.append(collectionsMenuLeftContentPrice);
collectionsMenuLeftContent.append(collectionsMenuLeftContentMore);

collectionsMenuLeft.append(collectionsMenuLeftImage);
collectionsMenuLeft.append(collectionsMenuLeftContent);

collectionsMenu.append(collectionsMenuLeft);

//Шестой Блок правый блок-1

const collectionsMenuRight = document.createElement("div");
collectionsMenuRight.className = "collections-menu-right";

const collectionsMenuRight1 = document.createElement("div");
collectionsMenuRight1.className = "collections-menu-right-el1";

const collectionsMenuRight1Image = document.createElement("img");
collectionsMenuRight1Image.src = "CollectionsMenu/Collections-Right1.jpg";

const collectionsMenuRight1Content = document.createElement("div");
collectionsMenuRight1Content.className = "collections-menu-right-content";

const collectionsMenuRight1ContentName = document.createElement("div");
collectionsMenuRight1ContentName.className =
  "collections-menu-right-content-name";
collectionsMenuRight1ContentName.textContent = "Geometric Bookcase";

const collectionsMenuRight1ContentPrice = document.createElement("div");
collectionsMenuRight1ContentPrice.className =
  "collections-menu-right-content-price";
collectionsMenuRight1ContentPrice.textContent = "Up to 20% discount";
const collectionsMenuRight1ContentPriceSpan = document.createElement("span");

const collectionsMenuRight1ContentMore = document.createElement("div");
collectionsMenuRight1ContentMore.className =
  "collections-menu-right-content-more";
collectionsMenuRight1ContentMore.textContent = "Read more";

collectionsMenuRight1Content.append(collectionsMenuRight1ContentName);
collectionsMenuRight1Content.append(collectionsMenuRight1ContentPrice);
collectionsMenuRight1Content.append(collectionsMenuRight1ContentMore);

collectionsMenuRight1.append(collectionsMenuRight1Image);
collectionsMenuRight1.append(collectionsMenuRight1Content);

collectionsMenuRight.append(collectionsMenuRight1);

//Шестой Блок правый блок-2

const collectionsMenuRight2 = document.createElement("div");
collectionsMenuRight2.className = "collections-menu-right-el2";

const collectionsMenuRight2Image = document.createElement("img");
collectionsMenuRight2Image.src = "CollectionsMenu/Collections-Right2.jpg";

const collectionsMenuRight2Content = document.createElement("div");
collectionsMenuRight2Content.className = "collections-menu-right-content";

const collectionsMenuRight2ContentName = document.createElement("div");
collectionsMenuRight2ContentName.className =
  "collections-menu-right-content-name";
collectionsMenuRight2ContentName.textContent = "Minimal Sofa collections";

const collectionsMenuRight2ContentPrice = document.createElement("div");
collectionsMenuRight2ContentPrice.className =
  "collections-menu-right-content-price";
collectionsMenuRight2ContentPrice.textContent = "Sale upto 40% discount";
const collectionsMenuRight2ContentPriceSpan = document.createElement("span");

const collectionsMenuRight2ContentMore = document.createElement("div");
collectionsMenuRight2ContentMore.className =
  "collections-menu-right-content-more";
collectionsMenuRight2ContentMore.textContent = "Read more";

collectionsMenuRight2Content.append(collectionsMenuRight2ContentName);
collectionsMenuRight2Content.append(collectionsMenuRight2ContentPrice);
collectionsMenuRight2Content.append(collectionsMenuRight2ContentMore);

collectionsMenuRight2.append(collectionsMenuRight2Image);
collectionsMenuRight2.append(collectionsMenuRight2Content);

collectionsMenuRight.append(collectionsMenuRight2);

collectionsMenu.append(collectionsMenuRight);

//Седьмой Блок

const trendingArr = [
  {
    imgSrc: "TrendingMenu/Trending1-1.jpg",
    type: "CHAIR",
    name: "Minimal LCD chair",
    priceNew: "$180",
    priceOld: "$250",
    rateImg: "5-stars.svg",
    Icon: "New",
  },
  {
    imgSrc: "TrendingMenu/Trending2-1.jpg",
    type: "CHAIR",
    name: "Minimal iconic chair",
    priceNew: "$120",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "New",
  },
  {
    imgSrc: "TrendingMenu/Trending3-1.jpg",
    type: "CHAIR",
    name: "Dining chairs",
    priceNew: "$100",
    priceOld: "$120",
    rateImg: "5-stars.svg",
    Icon: "Sale",
  },
  {
    imgSrc: "TrendingMenu/Trending4-1.jpg",
    type: "CHAIR",
    name: "Buskbo armchair",
    priceNew: "$130",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "Sale",
  },
  {
    imgSrc: "TrendingMenu/Trending5-1.jpg",
    type: "CHAIR",
    name: "Modern chairs",
    priceNew: "$100",
    priceOld: "$100",
    rateImg: "0-stars.svg",
    Icon: "Sale",
  },
  {
    imgSrc: "TrendingMenu/Trending6-1.jpg",
    type: "CHAIR",
    name: "Plastic dining chair",
    priceNew: "$130",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "Sale",
  },
  {
    imgSrc: "TrendingMenu/Trending7-1.jpg",
    type: "CHAIR",
    name: "Minimal Wood chair",
    priceNew: "$180",
    priceOld: "$250",
    rateImg: "5-stars.svg",
    Icon: "New",
  },
  {
    imgSrc: "TrendingMenu/Trending8-1.jpg",
    type: "CHAIR",
    name: "Elegent wood chair",
    priceNew: "$120",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "New",
  },
];

const trendingMenuElements = document.querySelector(".trending-menu-elements");

trendingArr.forEach((item) => {
  const iconClass = item.Icon.toLowerCase();

  const itemElement = `<li class="trending-menu-element">
    <img src="${item.imgSrc}" alt="#" class="trending-menu-element-img">
    <div class="trending-menu-element-type">${item.type}</div>
    <div class="trending-menu-element-name">${item.name}</div>
    <div class="trending-menu-element-price-rate">
        <div class="trending-menu-element-price">
            <div class="trending-menu-element-price-new">${item.priceNew}</div>
            <div class="trending-menu-element-price-old">${item.priceOld}</div>
        </div>
        <div class="trending-menu-element-rate"><img src="${item.rateImg}" alt="#"></div>
    </div>
    <div class="trending-menu-element-${iconClass}-icon">${item.Icon}</div>
    <div class="trending-menu-panels">
        <ul class="trending-menu-panels-elements">
            <li class="trending-menu-panels-element"><button><img src="TrendingMenu/Panel-heart.svg" alt="#"></button></li>
            <li class="trending-menu-panels-element"><button><img src="TrendingMenu/Panel-bag.svg" alt="#"></button></li>
            <li class="trending-menu-panels-element"><button><img src="TrendingMenu/Panel-refresh.svg" alt="#"></button></li>
            <li class="trending-menu-panels-element"><button><img src="TrendingMenu/Panel-eye.svg" alt="#"></button></li>
        </ul>
    </div>
</li>`;

  trendingMenuElements.innerHTML += itemElement;
});

//Девятый Блок

const ProductsArr = [
  {
    imgSrc: "ProductsMenu/Products1-image.jpg",
    type: "CHAIR",
    name: "Minimal LCD chair",
    priceNew: "$180",
    priceOld: "$250",
    rateImg: "5-stars.svg",
    Icon: "Sale",
    onDiscount: false,
  },
  {
    imgSrc: "ProductsMenu/Products2-image.jpg",
    type: "SOFA",
    name: "Modern Sofa",
    priceNew: "$120",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "New",
    onDiscount: false,
  },
  {
    imgSrc: "ProductsMenu/Products3-image.jpg",
    type: "SOFA",
    name: "Microfiber Sofa",
    priceNew: "$130",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "-30%",
    onDiscount: true,
  },
  {
    imgSrc: "ProductsMenu/Products4-image.jpg",
    type: "TABBLE",
    name: "Wood Coffee Tables",
    priceNew: "$100",
    priceOld: "$120",
    rateImg: "5-stars.svg",
    Icon: "Sale",
    onDiscount: false,
  },
  {
    imgSrc: "ProductsMenu/Products5-image.jpg",
    type: "CHAIR",
    name: "Acacia Wood Club Chairs",
    priceNew: "$100",
    priceOld: "$120",
    rateImg: "0-stars.svg",
    Icon: "-30%",
    onDiscount: true,
  },
  {
    imgSrc: "ProductsMenu/Products6-image.jpg",
    type: "BENCH",
    name: "Amalia Cowhide Bench",
    priceNew: "$130",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "Sale",
    onDiscount: false,
  },
  {
    imgSrc: "ProductsMenu/Products7-image.jpg",
    type: "STORAGE",
    name: "Juno-Hinged Lid Storag",
    priceNew: "$180",
    priceOld: "$250",
    rateImg: "5-stars.svg",
    Icon: "New",
    onDiscount: false,
  },
  {
    imgSrc: "ProductsMenu/Products8-image.jpg",
    type: "FURNITURE",
    name: "Delicia 3 Piece Living Room",
    priceNew: "$120",
    priceOld: "$150",
    rateImg: "4-stars.svg",
    Icon: "New",
    onDiscount: false,
  },
];

const ProductsMenuElements = document.querySelector(".products-menu-elements");

ProductsArr.forEach((item) => {
  if (item.onDiscount === true) {
    itemElement = `<li class="products-menu-element">
  <img src="${item.imgSrc}" alt="#" class="products-menu-element-img">
  <div class="products-menu-element-type">${item.type}</div>
  <div class="products-menu-element-name">${item.name}</div>
  <div class="products-menu-element-price-rate">
      <div class="products-menu-element-price">
          <div class="products-menu-element-price-new">${item.priceNew}</div>
          <div class="products-menu-element-price-old">${item.priceOld}</div>
      </div>
      <div class="products-menu-element-rate"><img src="${item.rateImg}" alt="#"></div>
  </div>
  <div class="products-menu-element-off-icon">${item.Icon}</div>
  <div class="products-menu-panels">
      <ul class="products-menu-panels-elements">
          <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-heart.svg" alt="#"></button></li>
          <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-bag.svg" alt="#"></button></li>
          <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-refresh.svg" alt="#"></button></li>
          <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-eye.svg" alt="#"></button></li>
      </ul>
  </div>
</li>`;
  } else if (item.onDiscount === false) {
    const iconClass = item.Icon.toLowerCase();

    itemElement = `<li class="products-menu-element">
    <img src="${item.imgSrc}" alt="#" class="products-menu-element-img">
    <div class="products-menu-element-type">${item.type}</div>
    <div class="products-menu-element-name">${item.name}</div>
    <div class="products-menu-element-price-rate">
        <div class="products-menu-element-price">
            <div class="products-menu-element-price-new">${item.priceNew}</div>
            <div class="products-menu-element-price-old">${item.priceOld}</div>
        </div>
        <div class="products-menu-element-rate"><img src="${item.rateImg}" alt="#"></div>
    </div>
    <div class="products-menu-element-${iconClass}-icon">${item.Icon}</div>
    <div class="products-menu-panels">
        <ul class="products-menu-panels-elements">
            <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-heart.svg" alt="#"></button></li>
            <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-bag.svg" alt="#"></button></li>
            <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-refresh.svg" alt="#"></button></li>
            <li class="products-menu-panels-element"><button><img src="ProductsMenu/Panel-eye.svg" alt="#"></button></li>
        </ul>
    </div>
  </li>`;
  }

  ProductsMenuElements.innerHTML += itemElement;
});

//Одиннадцатый Блок

const articlesArr = [
  {
    imgSrc: "ArticlesMenu/Article1-image.jpg",
    tag: "FURNITURE",
    date: "23 September 2022",
    text: "Begineer guide buying minimal sofa",
  },
  {
    imgSrc: "ArticlesMenu/Articles2-image.jpg",
    tag: "TABLE",
    date: "23 September 2022",
    text: "Buying best minimal computer table",
  },
  {
    imgSrc: "ArticlesMenu/Articles3-image.jpg",
    tag: "BENCH",
    date: "23 march 2022",
    text: "How to choose best modern bench",
  },
  {
    imgSrc: "ArticlesMenu/Articles4-image.jpg",
    tag: "CHAIR",
    date: "23 march 2022",
    text: "Best Summer Outfit Style in this Country",
  },
];

const articlesMenuElements = document.querySelector(".articles-menu-elements");

articlesArr.forEach((item) => {
  const itemElement = `<li class="articles-menu-element">
    <img src="${item.imgSrc}" alt="#">
    <div class="articles-menu-element-content">
        <div class="articles-menu-element-date-tag">
            <div class="articles-menu-element-tag">${item.tag}</div>
            <div class="articles-menu-element-date">${item.date}</div>
        </div>
        <div class="articles-menu-element-text">${item.text}</div>
        <a href="#">Read more</a>
    </div>
</li>`;

  articlesMenuElements.innerHTML += itemElement;
});
