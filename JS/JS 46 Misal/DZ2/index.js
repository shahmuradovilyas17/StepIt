// 8. Найти наименьшее число в массиве. [5, 2, 8, 1, 9];

// const numArray = [5, 2, 8, 1, 9]

// let smallNum = 0;
// for (i = 0; i < numArray.length; i++) {
//     if (numArray[i] < numArray[i + 1]) {
//         smallNum = numArray[i]
//     }
//     else if (numArray[i] > numArray[i + 1]) {
//         smallNum = numArray[i + 1]
//     }
// }
// console.log(smallNum)


// 9. Посчитать количество четных чисел в массиве. const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let count = 0;

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         count++;
//     }
// }

// console.log(count)


// 10. Вывести все элементы массива в обратном порядке. [1, 2, 3, 4, 5];

// const arr = [1, 2, 3, 4, 5];
// let  num = 0;
// for(i=0;i<arr.length;i++) {
//     num = arr[arr.length - (i+1)];
//     console.log(num)
// }

// 11. Проверить, есть ли в массиве число 10. Итог- console.log(found ? 'Число 10 найдено' : 'Число 10 не найдено');

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let res = false;

// for(i=0;i<arr.length;i++) {
//     if (arr[i] === 10) {
//         res = true;
//     }
// }

// console.log(res ? 'Число 10 найдено' : 'Число 10 не найдено');


// 12. Посчитать количество отрицательных чисел в массиве.

// const arr = [-3, 2, -5, 7, -8, 10];

// let count = 0;

// for(i=0;i<arr.length;i++) {
//     if (arr[i] < 0) {
//         count++;
//     }
// }

// console.log(count)

// 13. Найти среднее арифметическое всех элементов массива.

// const arr = [10, 20, 30, 40, 50];

// let sum = 0;

// for (i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// console.log(sum)


// 14. Проверить, содержит ли объект определенное свойство.

// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const propertyName = 'age';

// if (person[propertyName]) {
//     console.log("Объект содержит данное свойство")
// }
// else {
//     console.log("Объект не содержит данное свойство");
// }
