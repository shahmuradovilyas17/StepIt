// 1. Выравнивание массива:
// Создайте функцию, которая принимает многомерный массив и возвращает одномерный массив, содержащий все его элементы.

// const array = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
//   [9, 10, 0],
// ];

// const getArray = (arr) => {
//   const newArr = [];

//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//       newArr.push(arr[i][j]);
//     }
//   }
//   return newArr;
// };

// console.log(getArray(array));

// 2. Поиск среднего значения в каждом подмассиве:
// Напишите функцию, которая принимает двумерный массив чисел и возвращает массив, содержащий средние значения каждого вложенного массива.

// const array = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
//   [9, 10, 5],
// ];

// const getAvr = (arr) => {
//   const newArr = [];

//   for (i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (j = 0; j < arr[i].length; j++) {
//       sum = sum + arr[i][j];
//     }

//     newArr.push(sum / arr[i].length);
//   }
//   return newArr;
// };

// console.log(getAvr(array));

// 3. Проверка наличия элемента в массиве:
// Напишите функцию, которая принимает многомерный массив и элемент для поиска. Функция должна вернуть true, если элемент найден хотя бы в одном из вложенных массивов, и false в противном случае.

// const array = [
//   [1, 2, 3],
//   [3, 4, 5],
//   [6, 7, 8],
//   [9, 10, 5],
// ];

// const number = prompt("Number");

// const getNum = (arr, num) => {
//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == num) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// console.log(getNum(array, number));

// 4. Сумма значений в столбцах:
// Создайте функцию, которая принимает двумерный массив чисел и возвращает массив, содержащий суммы значений в каждом столбце.

// const array = [
//   [1, 2, 3, 6],
//   [3, 4, 5, 10],
//   [6, 7, 8, 11],
//   [9, 10, 5, 12],
// ];

// const getSum = (arr) => {
//   const newArr = [];
//   const obj = {};
//   for (i = 0; i < array.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//       if (obj[j]) {
//         obj[j] = obj[j] + arr[i][j];
//       } else {
//         obj[j] = arr[i][j];
//       }
//     }
//   }

//   for (key in obj) {
//     newArr.push(obj[key]);
//   }

//   return newArr;
// };

// console.log(getSum(array));

// 5. Удаление пустых подмассивов:
// Реализуйте функцию, которая удаляет все пустые вложенные массивы из данного многомерного массива.

// const array = [[1, 2, 3], [], [6, 7, 8], []];

// const getNum = (arr) => {
//   const newArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].length != 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// console.log(getNum(array));

// 6. Объединение всех элементов в строку:
// Создайте функцию, которая принимает многомерный массив строк и возвращает одну строку, содержащую все элементы вложенных массивов объединенные вместе.

// const array = [
//   ["S", "a", "l"],
//   ["a", "m", ","],
//   ["v", "o", "r"],
//   ["a", "m"],
// ];

// const getArray = (arr) => {
//   let str = "";

//   for (i = 0; i < arr.length; i++) {
//     for (j = 0; j < arr[i].length; j++) {
//       str = str + arr[i][j];
//     }
//   }
//   return str;
// };

// console.log(getArray(array));
