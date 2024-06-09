// 29. Задача: Создать функцию, которая принимает массив студентов в формате
//     [ { name: 'John', age: 20, scores: [90, 80, 70] }, ... ]
//     и возвращает новый массив, содержащий объекты студентов с добавленным свойством averageScore, представляющим средний балл каждого студента.

// const students = [
//     { name: 'John', age: 20, scores: [90, 80, 70] },
//     { name: 'Jane', age: 22, scores: [85, 75, 95] },
//     { name: 'Mike', age: 21, scores: [80, 90, 85] }
// ];


// const getAvrScore = (arr) => {
//     for (i = 0; i < arr.length; i++) {
//         let avrScore = 0;
//         for (j = 0; j < arr[i].scores.length; j++) {
//             avrScore = avrScore + arr[i].scores[j]
//         }
//         arr[i].averageScore = (avrScore / 3)
//     }

//     return arr;
// }

// console.log(getAvrScore(students))


// 30. Посчитать общее количество товаров в корзине.

// const cart = [
//     { name: 'Товар 1', quantity: 2 },
//     { name: 'Товар 2', quantity: 3 },
//     { name: 'Товар 3', quantity: 1 }
// ];

// const getCartCount = (arr) => {
//     let count = 0;

//     for (key in cart) {
//         count++;
//     }

//     return count;
// }

// console.log(getCartCount(cart))


// 31. Найти товар с максимальной ценой в корзине.

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


// 32. Посчитать общую стоимость товаров в корзине.

// const cart = [
//     { name: 'Товар 1', price: 100 },
//     { name: 'Товар 2', price: 200 },
//     { name: 'Товар 3', price: 150 }
//     ];

// const getCartSum = (arr) => {

//     let sum = 0
//     for(i=0;i<arr.length;i++) {
//         sum = sum + arr[i].price;
//     }

//     return sum;
// }

// console.log(getCartSum(cart))


// 33. Проверить, есть ли в корзине товар с заданным именем.

// const cart = [
//     { name: 'Товар 1', price: 100 },
//     { name: 'Товар 2', price: 200 },
//     { name: 'Товар 3', price: 150 }
//     ];


// const getCartName = (arr) => {
//     let name = prompt("Имя товара")

//     for(i=0;i<arr.length;i++) {
//         if(arr[i].name == name) {
//             return "Товар присутствует";
//         }
//     }
//     return "Товар не присутствует";
// }

// console.log(getCartName(cart))


// 34. Создать новый массив, содержащий только имена всех товаров в корзине.

// const cart = [
//     { name: 'Товар 1', price: 100 },
//     { name: 'Товар 2', price: 200 },
//     { name: 'Товар 3', price: 150 }
// ];

// const getCartName = (arr) => {
//     const cartNameArr = [];

//     for(i=0;i<arr.length;i++) {
//         cartNameArr.push(arr[i].name)
//     }

//     return cartNameArr;
// }

// console.log(getCartName(cart))


// 35. Найти среднюю цену товаров в корзине.

// const cart = [
//     { name: 'Товар 1', price: 100 },
//     { name: 'Товар 2', price: 200 },
//     { name: 'Товар 3', price: 150 }
// ];

// const getAvrPrice = (arr) => {
//     let cartCount = 0;
//     let allPrices = 0;

//     for(i=0;i<arr.length;i++) {
//         cartCount++;
//         allPrices = allPrices + arr[i].price;
//     }

//     return (allPrices / cartCount)
// }

// console.log(getAvrPrice(cart))
