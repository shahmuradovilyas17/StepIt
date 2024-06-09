// 6. Вывести все элементы массива. - [1, 2, 3, 4, 5];

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => console.log(element));

// 7. Посчитать сумму элементов массива. [1, 2, 3, 4, 5];

// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// arr.forEach((element) => (sum = sum + element));

// console.log(sum);

// 8. Найти наименьшее число в массиве. [5, 2, 8, 1, 9];

// const arr = [5, 2, 8, 1, 9];

// let minNum = arr[0];

// arr.forEach((element) => {
//   if (element < minNum) {
//     minNum = element;
//   }
// });

// console.log(minNum);

// 9. Посчитать количество четных чисел в массиве. const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let count = 0;

// arr.forEach((element) => {
//   if (element % 2 == 0) count++;
// });

// console.log(count);

// 10. Посчитать факториал четных чисел в массиве. const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = arr
//   .filter((element) => element % 2 === 0)
//   .map((element2) => {
//     let sum = 1;
//     for (n = 1; n <= element2; n++) {
//       sum = sum * n;
//     }
//     return sum;
//   });

// console.log(res);

// 11. Вывести все элементы массива в обратном порядке. [1, 2, 3, 4, 5];

// const arr = [1, 2, 3, 4, 5];

// const revArr = [];

// arr.forEach((element, index) => {
//   revArr.push(arr[arr.length - 1 - index]);
// });

// console.log(revArr);

// 12. Проверить, есть ли в массиве число 10.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let isInclude = arr.includes(10);

// console.log(isInclude ? "Число 10 найдено" : "Число 10 не найдено");

// 13. Посчитать количество отрицательных чисел в массиве.
// [-3, 2, -5, 7, -8, 10];

// const arr = [-3, 2, -5, 7, -8, 10];

// let count = 0;

// arr.forEach((element) => {
//   if (element < 0) count++;
// });

// console.log(count);

// 14. Найти среднее арифметическое всех элементов массива.
//     [10, 20, 30, 40, 50];

// const arr = [10, 20, 30, 40, 50];

// let sum = 0;

// arr.forEach((element) => (sum = sum + element));

// console.log(sum / arr.length);

// 15. Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает новый массив, содержащий только строки, длина которых больше 5 символов. Используйте (str.length)

// const str1 = [
//   "Alma",
//   "Banan",
//   "Nar",
//   "Ejdaha",
//   "Ekspozisiya",
//   "Multifunksional",
// ];

// strNew = str1.filter((element) => element.length > 5);

// console.log(strNew);

// 16. Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые делятся на 3 без остатка.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arrNew = arr.filter((element) => element % 3 === 0);

// console.log(arrNew);

// 17. Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий квадраты каждого числа из исходного массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArr = arr.map((element) => {
//   element = element ** 2;
//   return element;
// });

// console.log(newArr);

// 18. Задача: Создать функцию, которая принимает массив студентов в формате
//     [ { name: 'John', age: 20, scores: [90, 80, 70] }, ... ]
//     и возвращает новый массив, содержащий объекты студентов с добавленным свойством averageScore, представляющим средний балл каждого студента.

// const students = [
//   { name: "John", age: 20, scores: [90, 80, 70] },
//   { name: "Jane", age: 22, scores: [85, 75, 95] },
//   { name: "Mike", age: 21, scores: [80, 90, 85] },
// ];

// const newArr = students.map((element) => {
//   let sum = 0;
//   element.scores.forEach((element2) => {
//     sum = sum + element2;
//   });
//   return (element.averageScore = sum / element.scores.length);
// });

// console.log(newArr);

// 19. Посчитать общее количество товаров в корзине.

// const cart = [
//   { name: "Товар 1", quantity: 2 },
//   { name: "Товар 2", quantity: 3 },
//   { name: "Товар 3", quantity: 1 },
// ];

// let count = 0;

// cart.forEach((element) => {
//   count = count + element.quantity;
// });

// console.log(count);

// 20. Найти товар с максимальной ценой в корзине.

// const cart = [
//   { name: "Товар 1", price: 100 },
//   { name: "Товар 2", price: 200 },
//   { name: "Товар 3", price: 150 },
// ];

// let maxEl = cart[0];

// cart.forEach((element) => {
//   if (maxEl.price < element.price) {
//     maxEl = element;
//   }
// });

// console.log(maxEl);

// 21. Посчитать общую стоимость товаров в корзине.

// const cart = [
//   { name: "Товар 1", price: 100 },
//   { name: "Товар 2", price: 200 },
//   { name: "Товар 3", price: 150 },
// ];

// let sum = 0;

// cart.forEach((element) => {
//   sum = sum + element.price;
// });

// console.log(sum);

// 22. Проверить, есть ли в корзине товар с заданным именем.

// const cart = [
//   { name: "Товар 1", price: 100 },
//   { name: "Товар 2", price: 200 },
//   { name: "Товар 3", price: 150 },
// ];

// const targetName = "Товар 2";

// let isAvailable = false;

// cart.forEach((element) => {
//   if (element.name == targetName) {
//     isAvailable = true;
//   }
// });

// console.log(isAvailable);

// 23. Создать новый массив, содержащий только имена всех товаров в корзине.

// const cart = [
//   { name: "Товар 1", price: 100 },
//   { name: "Товар 2", price: 200 },
//   { name: "Товар 3", price: 150 },
// ];

// const newArr = cart.map((element) => {
//   return element.name;
// });

// console.log(newArr);

// 24. Найти среднюю цену товаров в корзине.

// const cart = [
//   { name: "Товар 1", price: 100 },
//   { name: "Товар 2", price: 200 },
//   { name: "Товар 3", price: 150 },
// ];

// let count = 0;
// let allPrice = 0;

// cart.forEach((element) => {
//   count = count + 1;
//   allPrice = allPrice + element.price;
// });

// console.log(allPrice / count);

// 25. Найти самый дорогой товар в магазине.

// const cart = [
//   { name: "Товар 1", price: 100 },
//   { name: "Товар 2", price: 200 },
//   { name: "Товар 3", price: 150 },
// ];

// let maxPrice = cart[0];

// cart.forEach((element) => {
//   if (maxPrice.price < element.price) {
//     maxPrice = element;
//   }
// });

// console.log(maxPrice);

// 26. Посчитать общее количество товаров разных типов в корзине.

// const cart = [
//   { name: "Товар 1", type: "фрукты", quantity: 2 },
//   { name: "Товар 2", type: "овощи", quantity: 3 },
//   { name: "Товар 3", type: "фрукты", quantity: 1 },
//   { name: "Товар 4", type: "мясо", quantity: 2 },
// ];

// const typeCounts = {};

// cart.forEach((element) => {
//   if (typeCounts[element.type]) {
//     typeCounts[element.type] = typeCounts[element.type] + element.quantity;
//   } else {
//     typeCounts[element.type] = element.quantity;
//   }
// });

// console.log(typeCounts);

// 27. Найти средний рейтинг всех продуктов.

// const products = [
//   { name: "Товар 1", rating: 4 },
//   { name: "Товар 2", rating: 5 },
//   { name: "Товар 3", rating: 3 },
// ];

// let count = 0;
// let allRatings = 0;

// products.forEach((element) => {
//   count = count + 1;
//   allRatings = allRatings + element.rating;
// });

// let totalRating = allRatings / count;

// console.log(totalRating);

// 28. Задача: Напишите функцию, которая принимает массив объектов, представляющих заказы, и возвращает объект, содержащий общее количество продуктов во всех заказах и общую сумму заказов.

// const orders = [
//   {
//     id: 1,
//     products: [
//       { name: "Товар 1", price: 100 },
//       { name: "Товар 2", price: 150 },
//     ],
//   },
//   {
//     id: 2,
//     products: [
//       { name: "Товар 3", price: 200 },
//       { name: "Товар 4", price: 80 },
//     ],
//   },
//   {
//     id: 3,
//     products: [
//       { name: "Товар 5", price: 120 },
//       { name: "Товар 6", price: 90 },
//     ],
//   },
// ];

// const newObj = {};

// orders.forEach((element) => {
//   element.products.forEach((element2) => {
//     if (newObj.count) {
//       newObj.count = newObj.count + 1;
//     } else {
//       newObj.count = 1;
//     }
//     if (newObj.allPrices) {
//       newObj.allPrices = newObj.allPrices + element2.price;
//     } else {
//       newObj.allPrices = element2.price;
//     }
//   });
// });

// console.log(newObj);

// 29. Задача: Напишите функцию, которая принимает массив объектов, представляющих студентов, и возвращает объект со средним возрастом студентов по каждому курсу.

// const students = [
//   { name: "John", age: 20, course: 1 },
//   { name: "Jane", age: 22, course: 2 },
//   { name: "Mike", age: 21, course: 1 },
//   { name: "Alice", age: 23, course: 2 },
// ];

// const stdAge = {};

// const stdCount = {};

// const avrAge = {};

// students.forEach((element) => {
//   if (stdAge[element.course]) {
//     stdAge[element.course] = stdAge[element.course] + element.age;
//   } else {
//     stdAge[element.course] = element.age;
//   }

//   if (stdCount[element.course]) {
//     stdCount[element.course] = stdCount[element.course] + 1;
//   } else {
//     stdCount[element.course] = 1;
//   }
// });

// for (key in stdAge) {
//   avrAge[key] = stdAge[key] / stdCount[key];
// }

// console.log(avrAge);

// 30. Задача: Напишите функцию, которая принимает массив объектов, представляющих книги в библиотеке, и возвращает объект, содержащий информацию о количестве книг каждого жанра.
// const books = [
//   { title: "Book 1", genre: "Fantasy" },
//   { title: "Book 2", genre: "Fantasy" },
//   { title: "Book 3", genre: "Mystery" },
//   { title: "Book 4", genre: "Thriller" },
//   { title: "Book 5", genre: "Mystery" },
//   { title: "Book 6", genre: "Fantasy" },
//   { title: "Book 7", genre: "Thriller" },
//   { title: "Book 8", genre: "Sci-Fi" },
// ];

// let newObj = {};

// books.forEach((element) => {
//   if (newObj[element.genre]) {
//     newObj[element.genre] = newObj[element.genre] + 1;
//   } else {
//     newObj[element.genre] = 1;
//   }
// });

// console.log(newObj);

// 31. Напишите функцию, которая принимает массив объектов, представляющих товары в магазине, и возвращает общую стоимость всех товаров.
// const products = [
//   { name: "Товар 1", price: 100, quantity: 2 },
//   { name: "Товар 2", price: 200, quantity: 1 },
//   { name: "Товар 3", price: 150, quantity: 3 },
// ];

// let allPrices = 0;

// products.forEach((element) => {
//   allPrices = allPrices + element.price * element.quantity;
// });

// console.log(allPrices);

// 32. Напишите функцию, которая принимает массив объектов с информацией о книгах и возвращает массив имен (названий) всех книг.
// const books = [
//   { name: "Book 1", author: "Author 1" },
//   { name: "Book 2", author: "Author 2" },
//   { name: "Book 3", author: "Author 3" },
// ];

// const newArr = books.map((element) => {
//   return element.name;
// });

// console.log(newArr);

// 33. Напишите функцию, которая принимает массив объектов товаров и строку с категорией товара. Функция должна вернуть новый массив, содержащий только товары с указанной категорией.

// const products = [
//   { name: "Товар 1", category: "Электроника" },
//   { name: "Товар 2", category: "Книги" },
//   { name: "Товар 3", category: "Электроника" },
//   { name: "Товар 4", category: "Одежда" },
//   { name: "Товар 5", category: "Книги" },
// ];

// let qCategory = "Электроника";

// const newArr = products.filter((element) => element.category == qCategory);

// console.log(newArr);

// 34. функция принимает массив объектов товаров и еще один параметр, который представляет собой минимальную цену товара. Функция должна вернуть новый массив, содержащий только товары, цена которых не ниже указанного значения.
// const products = [
//   { name: "Товар 1", price: 100 },
//   { name: "Товар 2", price: 150 },
//   { name: "Товар 3", price: 200 },
//   { name: "Товар 4", price: 80 },
//   { name: "Товар 5", price: 120 },
// ];

// let minPrice = 110;

// const newArr = products.filter((element) => element.price >= minPrice);

// console.log(newArr);
