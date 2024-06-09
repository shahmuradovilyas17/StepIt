// #1

// let namee = prompt("Укажите имя");
// alert("Привет, " + namee);

// #2

// let currentYear = 2024;
// let birthYear = prompt("Укажите год рождения");
// let age = currentYear - birthYear;
// alert("Вам " + age + " лет");

// #3

// let length = prompt("Укажите длину квадрата");
// let Perimetr = length * 4;
// alert("Периметр квадрата равен: " + Perimetr)

// #4

// let choice = prompt("Использовать полное значение PI или PI=3.14?");

// if (choice == "Полное" || choice == "полное")
// {
//     let radius = prompt("Укажите радиус окружности");
//     let Square = Math.PI * (Math.pow(radius, 2));
//     alert("Площадь окружности равна: " + Square);
// }
// else if (choice == "PI=3.14")
// {
//     let radius = prompt("Укажите радиус окружности");
//     let Square = (3.14 * (Math.pow(radius, 2)));
//     alert("Площадь окружности равна: " + Square);
// }
// else {
//     alert("Неправильный Ответ")
// }

// #5

// let distance = prompt("Расстояние между городами:");
// let time = prompt("За какое время хотите добраться?");
// let speed = distance / time;
// alert("Оптимальная скорость равна: " + speed)

// #6

// let dollar = prompt("Сколько долларов хотите обменять?");
// let rate = 1.5;
// let euro = rate * dollar;
// alert("Вы получите " + euro + " Евро");

// #7

// let storage = prompt("Укажите объем памяты флешки в Гб");
// let fileCount = String(((storage * 1024) / 820));
// alert("На флешку помещается " + parseInt(fileCount) + " файлов размером в 820 Мб");

// #8

// let money = prompt("Укажите количество денег");
// let price = prompt("Укажите цену шоколадки");
// let count = String(money / price);
// let rest = money % price;
// alert("Вы сможете купить " + parseInt(count) + " шоколадок и у вас останется " + rest);

// #9

// let num = prompt("Укажите число");
// if ( num / 100 >= 10 || num / 100 == 0 )
// {
//     alert("Неправильное значение");
// }
// else  
// {
//     reNum1 = String((num % 100) % 10);
//     reNum2 = String((num/10) % 10)
//     reNum3 = String(num/100)
//     alert("Перевёрнутое число - " + parseInt(reNum1) + parseInt(reNum2) + parseInt(reNum3))
// }

// #10

// let num = prompt("Введите целое число");
// let res = num % 2 ==0 ? "Число чётное" : "Число нечётное";
// alert(res);
