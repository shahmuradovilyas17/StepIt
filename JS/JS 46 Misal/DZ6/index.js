// 36. Найти самый дорогой товар в магазине.

// const cart = [
//     { name: 'Товар 1', price: 100 },
//     { name: 'Товар 2', price: 200 },
//     { name: 'Товар 3', price: 150 }
// ];

// const getMaxPrice = (arr) => {

//     let maxPrice = 0;

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].price > maxPrice) {
//             maxPrice = arr[i].price
//         }
//     }

//     for (i = 0; i < arr.length; i++) {
//         for (key in arr[i]) {
//             if (arr[i].price == maxPrice) {
//                 return arr[i];
//             }
//         }
//     }
// }

// console.log(getMaxPrice(cart))


// 37. Посчитать общее количество товаров разных типов в корзине.

// const cart = [
//     { name: 'Товар 1', type: 'фрукты', quantity: 2 },
//     { name: 'Товар 2', type: 'овощи', quantity: 3 },
//     { name: 'Товар 3', type: 'фрукты', quantity: 1 },
//     { name: 'Товар 4', type: 'мясо', quantity: 2 }
// ];

// const typeCounts = {};

// for(i=0;i<cart.length;i++) {
//     if(typeCounts[cart[i].type]) {
//         typeCounts[cart[i].type] = typeCounts[cart[i].type] + cart[i].quantity;
//     }
//     else  {
//         typeCounts[cart[i].type] = cart[i].quantity;
//     }
// }

// console.log(typeCounts)


// 38. Найти средний рейтинг всех продуктов.

// const products = [
//     { name: 'Товар 1', rating: 4 },
//     { name: 'Товар 2', rating: 5 },
//     { name: 'Товар 3', rating: 3 }
// ];

// let totalRating = 0;

// let productsCount = 0;

// for(i=0;i<products.length;i++) {
//     totalRating = totalRating + products[i].rating;
//     productsCount++;
// }   

// console.log((totalRating / productsCount))


// 39. Задача: Напишите функцию, которая принимает массив объектов, представляющих заказы, и возвращает объект, содержащий общее количество продуктов во всех заказах и общую сумму заказов.

// const orders = [
//     { id: 1, products: [{ name: 'Товар 1', price: 100 }, { name: 'Товар 2', price: 150 }] },
//     { id: 2, products: [{ name: 'Товар 3', price: 200 }, { name: 'Товар 4', price: 80 }] },
//     { id: 3, products: [{ name: 'Товар 5', price: 120 }, { name: 'Товар 6', price: 90 }] }
// ];

// const getOrderCountPrice = (arr) => {

//     const countPriceObj = {}

//     let productsCount = 0;

//     let productsPrice = 0;

//     for (i = 0; i < arr.length; i++) {
//         for (j = 0; j < arr[i].products.length; j++) {
//             productsCount++;
//             productsPrice = productsPrice + arr[i].products[j].price;
//         }
//     }

//     countPriceObj[productsCount] = productsPrice

//     return countPriceObj;
// }

// console.log(getOrderCountPrice(orders))


// 40. Задача: Напишите функцию, которая принимает массив объектов, представляющих студентов, и возвращает объект со средним возрастом студентов по каждому курсу.

// const students = [
//     { name: 'John', age: 20, course: 1 },
//     { name: 'Jane', age: 22, course: 2 },
//     { name: 'Mike', age: 21, course: 1 },
//     { name: 'Alice', age: 23, course: 2 }
// ];

// const getAvrAge = (arr) => {
//     const stdAge = {}

//     const stdCount = {}

//     const avrAge = {}

//     for (i = 0; i < arr.length; i++) {
//         if (stdAge[arr[i].course]) {
//             stdAge[arr[i].course] = stdAge[arr[i].course] + arr[i].age
//         }
//         else {
//             stdAge[arr[i].course] = arr[i].age
//         }

//         if (stdCount[arr[i].course]) {
//             stdCount[arr[i].course] = stdCount[arr[i].course] + 1;
//         }
//         else {
//             stdCount[arr[i].course] = 1;
//         }

//         // avrAge[arr[i].course] = stdAge[arr[i].course] / stdCount[arr[i].course]
//     }

//     for (key in stdAge) {
//         avrAge[key] = stdAge[key] / stdCount[key];
//     }

//     return avrAge;
// }

// console.log(getAvrAge(students))


// 41. Задача: Напишите функцию, которая принимает массив объектов, представляющих книги в библиотеке, и возвращает объект, содержащий информацию о количестве книг каждого жанра.

// const books = [
//     { title: 'Book 1', genre: 'Fantasy' },
//     { title: 'Book 2', genre: 'Fantasy' },
//     { title: 'Book 3', genre: 'Mystery' },
//     { title: 'Book 4', genre: 'Thriller' },
//     { title: 'Book 5', genre: 'Mystery' },
//     { title: 'Book 6', genre: 'Fantasy' },
//     { title: 'Book 7', genre: 'Thriller' },
//     { title: 'Book 8', genre: 'Sci-Fi' }
// ];

// const getBooksCount = (arr) => {

//     const booksCount = {};

//     for (i = 0; i < arr.length; i++) {
//         if (booksCount[arr[i].genre]) {
//             booksCount[arr[i].genre] = booksCount[arr[i].genre] + 1;
//         }
//         else {
//             booksCount[arr[i].genre] = 1;
//         }
//     }

//     return booksCount;
// }

// console.log(getBooksCount(books))


// 42. Напишите функцию, которая принимает массив объектов, представляющих товары в магазине, и возвращает общую стоимость всех товаров.

// const products = [
//     { name: 'Товар 1', price: 100, quantity: 2 },
//     { name: 'Товар 2', price: 200, quantity: 1 },
//     { name: 'Товар 3', price: 150, quantity: 3 }
// ];

// const getAllPrice = (arr) => {

//     let productsPrice = 0;

//     for (i=0;i<arr.length;i++) {
//         productsPrice = productsPrice + (arr[i].price * arr[i].quantity);
//     }

//     return productsPrice;
// }

// console.log(getAllPrice(products))


// 43. Напишите функцию, которая принимает объект с оценками студентов и возвращает средний балл по всем студентам.

// const studentScores = {
//     'John': 85,
//     'Jane': 90,
//     'Mike': 75
// };

// const getAvrScore = (obj) => {
//     let avrScore = 0;

//     let count = 0;
//     for (key in obj) {
//         count++;
//         avrScore = avrScore + obj[key];
//     }

//     return (avrScore / count)
// }

// console.log(getAvrScore(studentScores))


// 44. Напишите функцию, которая принимает массив объектов с информацией о книгах и возвращает массив имен (названий) всех книг.

// const books = [
//     { name: 'Book 1', author: 'Author 1' },
//     { name: 'Book 2', author: 'Author 2' },
//     { name: 'Book 3', author: 'Author 3' }
// ];

// const getBooksName = (arr) => {
//     const bookName = [];

//     for(i=0;i<arr.length;i++) {
//         bookName.push(arr[i].name);
//     }

//     return bookName;
// }

// console.log(getBooksName(books))


// 45. Напишите функцию, которая принимает массив объектов товаров и строку с категорией товара. Функция должна вернуть новый массив, содержащий только товары с указанной категорией.

// const products = [
//     { name: 'Товар 1', category: 'Электроника' },
//     { name: 'Товар 2', category: 'Книги' },
//     { name: 'Товар 3', category: 'Электроника' },
//     { name: 'Товар 4', category: 'Одежда' },
//     { name: 'Товар 5', category: 'Книги' }
// ];

// const getProdArr = (arr) => {

//     const prodArr = [];

//     let categoryName = prompt("Укажите категорию товара");

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].category == categoryName) {
//             prodArr.push(arr[i])
//         }
//     }

//     return prodArr;
// }

// console.log(getProdArr(products))


// 46. функция принимает массив объектов товаров и еще один параметр, который представляет собой минимальную цену товара. Функция должна вернуть новый массив, содержащий только товары, цена которых не ниже указанного значения.

// const products = [
//     { name: 'Товар 1', price: 100 },
//     { name: 'Товар 2', price: 150 },
//     { name: 'Товар 3', price: 200 },
//     { name: 'Товар 4', price: 80 },
//     { name: 'Товар 5', price: 120 }
// ];

// const filterProductsByPrice = (arr, minPrice) => {
//     const filteredProducts = [];

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].price >= minPrice) {
//             filteredProducts.push(arr[i])
//         }
//     }

//     return filteredProducts;
// }

// console.log(filterProductsByPrice(products, 150));

