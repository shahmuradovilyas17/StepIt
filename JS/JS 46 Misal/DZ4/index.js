// 22. Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму.

// const getSum = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(getSum(10, 20))


// 23. Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает сумму всех элементов массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const getArrSum = (arr) => {
//     let sum = 0;

//     for (i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }

//     return sum;
// }

// console.log(getArrSum(arr))


// 24. Напишите функцию, которая принимает число в качестве аргумента и возвращает true, если число является четным, и false, если нечетным.

// const getEvenNum = (num) => {
//     if (num % 2 == 0) {
//         return true;
//     }
//     return false;
// }

// console.log(getEvenNum(10))


// 25. Напишите функцию, которая принимает массив строк в качестве аргумента и возвращает новый массив, содержащий только строки, длина которых больше 5 символов. Используйте (str.length)

// const strArr = ["Salam", "Azerbaijan", "FrontEnd", "Dev", "Net"]

// const getStrArr = (arr) => {
//     const longStrArr = [];

//     for (i = 0; i < arr.length; i++) {
//         if (arr[i].length > 5) {
//             longStrArr.push(arr[i])
//         }
//     }

//     return longStrArr;
// }

// console.log(getStrArr(strArr))


// 26. Напишите функцию, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только уникальные значения исходного массива (без повторений).

// const arr = [1, 2, 3, 5, 6, 3, 5, 1, 6, 9];

// const getUniqueNumArr = (arr) => {
//     const numCount = {};

//     const uniqueNumArr = [];

//     for (i = 0; i < arr.length; i++) {
//         if (numCount[arr[i]]) {
//             numCount[arr[i]] = numCount[arr[i]] + 1;
//         }
//         else {
//             numCount[arr[i]] = 1;
//         }
//     }

//     for (key in numCount) {
//         uniqueNumArr.push(key)
//     }

//     return uniqueNumArr;
// }

// console.log(getUniqueNumArr(arr))


// 27. Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только числа, которые делятся на 3 без остатка.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const getNumArr = (arr) => {

//     const newArr = [];

//     for(i=0;i<arr.length;i++) {
//         if(arr[i] % 3 == 0) {
//             newArr.push(arr[i])
//         }
//     }

//     return newArr;
// }

// console.log(getNumArr(arr))


// 28. Напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий квадраты каждого числа из исходного массива.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const getNumSquare = (arr) => {

//     const numSquare = []

//     for (i = 0; i < arr.length; i++) {
//         numSquare.push(arr[i] * arr[i]);
//     }

//     return numSquare;
// }

// console.log(getNumSquare(arr))



