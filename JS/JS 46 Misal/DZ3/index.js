// 15. Посчитать сумму значений всех свойств объекта.

// const obj = {
//     a: 10,
//     b: 20,
//     c: 30
// };

// let sum = 0;

// for (key in obj) {
//     sum = sum + obj[key];
// }

// console.log(sum);


// 16. Подсчет количества свойств в объекте:

// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//     };

// let count = 0;

// for ( key in obj) {
//     count++;
// }

// console.log(count)


// 17. Получение всех значений свойств объекта в виде массива:

// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const arr = []

// for (key in obj) {
//     arr.push(obj[key]);
// }

// console.log(arr)


// 18. Получение всех ключей объекта в виде массива:

// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const arr = [];

// for (key in obj) {
//     arr.push(key);
// }

// console.log(arr)


// 19. Поиск значения свойства по ключу в объекте:

// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// let keyName = prompt("Введите название нужного поля")

// console.log(obj[keyName])


// 20. Проверка объекта на пустоту

// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const arr = [];

// for(key in obj) {
//     arr.push(key)
// }

// if (arr.length > 0) {
//     console.log("Not Empty");
// }
// else {
//     console.log("Empty");
// }


// 21. Получение нового объекта, в котором ключи и значения поменяны местами:

// const obj = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
// };

// const obj2 = {}

// for(key in obj) {
//     obj2[obj[key]] = key;
// }

// console.log(obj2)