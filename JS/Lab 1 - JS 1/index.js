// 1. Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

// let num = prompt("Введите число");
// let res = Math.pow(num,2);
// alert("Ответ: " + res);

// 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.

// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// let res = ((Number(num1) + Number(num2)) / 2);
// alert("Ответ: " + res);

// 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.

// let length = prompt("Введите длину квадрата");
// let square = Math.pow(length,2);
// alert("Площадь квадрата равна: " + square);

// 4. Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу

// let km = prompt("Введите значение в километрах");
// let mile = (km * 0.621371);
// alert("Значение в милях равно " + mile)

// 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.

// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// let plus = (Number(num1) + Number(num2));
// let minus = (Number(num1) - Number(num2));
// let sum = (Number(num1) * Number(num2))
// alert("+: " + plus + " -: " + minus + " *: " + sum)

// 6. Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.

// let a = prompt("Введите a");
// let b = prompt("Введите b");
// let x = (-(b/a));
// alert(x)

// 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня

// let hour = prompt("Введите часы")
// let minute = prompt("Введите минуты")
// let nextHour;
// let nextMinute;

// if (minute == 0) {
//     nextHour = (24 - hour);
//     nextMinute = 0;
// }
// else {
//     nextHour = (23 - hour);
//     nextMinute = (60 - minute);
// }
// alert("До следующего дня осталось " + nextHour + " часов и " + nextMinute + " минут")

// 8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).

// let num = prompt("Введите число");
// let secNum = String(((num % 100) / 10));
// alert("Вторая цифра числа это " + parseInt(secNum))

// 9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234).

// let num = prompt("Введите число");
// let numeral1 = parseInt(num / 10000);
// let numeral2 = parseInt((num % 10000) / 1000);
// let numeral3 = parseInt(((num % 10000) % 1000) / 100);
// let numeral4 = parseInt((((num % 10000) % 1000) % 100) / 10);
// let numeral5 = parseInt((((num % 10000) % 1000) % 100) % 10);
// let newNum = String(numeral5) + String(numeral2) + String(numeral3) + String(numeral4) + String(numeral1);
//  alert(parseInt(newNum));

// 10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату. 

// let sales = prompt("Введите общию сумму продаж");
// let salary = (250 + (sales * 0.1));
// alert("Зарплата равна: $" + salary);

