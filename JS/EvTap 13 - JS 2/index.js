// #1

// let age = prompt("Укажите возраст");

// if (age >=0 && age <=2)
// {
//     alert("Вы ребёнок");
// }
// else if (age >= 12 && age <= 18)
// {
//     alert("Вы подросток");
// }
// else if (age >= 18 && age <= 60)
// {
//     alert("Вы взрослый");
// }
// else if (age >= 60)
// {
//     alert("Вы пенсионер");
// }
// else 
// {
//     alert("Вам ещё не придумали название")
// }

// #2

// let num = prompt("Укажите число");

// switch(parseInt(num))
// {
//     case 1:
//         alert("!");
//         break;
//     case 2:
//         alert("@");
//         break;
//     case 3:
//         alert("#");
//         break;
//     case 4:
//         alert("$");
//         break;
//     case 5:
//         alert("%");
//         break;
//     case 6:
//         alert("^");
//         break;
//     case 7:
//         alert("&");
//         break;
//     case 8:
//         alert("*");
//         break;
//     case 9:
//         alert("(");
//         break;
//     case 0:
//         alert(")");
//         break;
//     default:
//         alert("Неправильное значение")
//         break;
// }

// #3

// let num = prompt("Укажите число");
// if ( num / 100 >= 10 || num / 100 == 0 )
// {
//     alert("Неправильное значение");
// }
// else  
// {
//     Num1 = String((num % 100) % 10);
//     Num2 = String((num/10) % 10);
//     Num3 = String(num/100);
//     if (parseInt(Num1) == parseInt(Num2) || parseInt(Num1) == parseInt(Num3) || parseInt(Num2) == parseInt(Num3))
//     {
//         alert("Есть одинаковые числа");
//     }
//     else 
//     {
//         alert("Нету одинаковых чисел");
//     }
// }

// #4

// let year = prompt("Укажите год");

// if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
// {
//     alert("Год является високосным")
// }
// else 
// {
//     alert("Год не является високосным")
// }

// #5

// let num = prompt("Укажите число");
// let num1,renum1,num2,renum2;

// if(num/10000 <= 0)
// {
//     alert("Неправильно число");
// }
// else {
//     String(num1) = num / 100000;
//     String(renum1) = (((num % 10000) % 1000) % 100) % 10;
//     String(num2) = (num % 10000) / 1000;
//     String(renum2) = (((num % 10000) % 1000) % 100) / 10;

//     if(parseInt(num1) == parseInt(renum1) && parseInt(num2) == parseInt(renum2))
//     {
//         alert("Число является палиндромом")
//     }
//     else {
//         alert("Число не является палиндромом")
//     }
// }

// #6

// let money = prompt("Введите сумму перевода");
// let currency = prompt("В какую валюту хотите перевести: EUR, UAN или AZN?");

// if(currency == "EUR")
// {
//     let convMoney = money * 0.93;
//     alert("По-нынешнему курсу за " + money + " долларов вы получите " + convMoney + " евро");
// }
// else if(currency == "UAN")
// {
//     let convMoney = money * 38.14;
//     alert("По-нынешнему курсу за " + money + " долларов вы получите " + convMoney + " гривн");
// }
// else if(currency == "AZN")
// {
//     let convMoney = money * 1.7;
//     alert("По-нынешнему курсу за " + money + " долларов вы получите " + convMoney + " манат");
// }
// else 
// {
//     alert("Введите валюту правильно")
// }

// #7

// let price = prompt("Введите сумму покупки");

// if(price >= 200 && price <= 300){
//     let fPrice = price - (price * 0.03);
//     alert("Вам предоставлена скидку в 3% и общая сумма для оплаты составляет " + fPrice)
// }
// else if (price > 300 && price <= 500) {
//     let fPrice = price - (price * 0.05);
//     alert("Вам предоставлена скидку в 5% и общая сумма для оплаты составляет " + fPrice)
// }
// else if (price > 500){
//     let fPrice = price - (price * 0.07);
//     alert("Вам предоставлена скидку в 7% и общая сумма для оплаты составляет " + fPrice)
// }
// else {
//     alert("Общая сумма для оплаты составляет " + price)
// }

// #8

// let length = prompt("Введите длину окружности");
// let perimetr = prompt("Введите периметр квадрата");

// if(length <= (perimetr/4))
// {
//     alert("Окружность поместится внутри квадрата")
// }
// else  {
//     alert("Окружность не поместится внутри квадрата")
// }

// #9

// let quest1 = prompt("Самая большая страна? А)Россия Б)США В)Ватикан")
// let quest2 = prompt("Самая большая страна? А)Россия Б)США В)Ватикан")
// let quest3 = prompt("Самая большая страна? А)Россия Б)США В)Ватикан")

// let point1
// let point2
// let point3
// let pointAll

// switch(quest1) 
// {
//     case "Россия":
//         point1 = 2;
//         break;
//     case "США":
//         point1 = 0;
//         break;
//     case "Ватикан":
//         point1 = 0;
//         break;
// }

// switch(quest2) 
// {
//     case "Россия":
//         point2 = 2;
//         break;
//     case "США":
//         point2 = 0;
//         break;
//     case "Ватикан":
//         point2 = 0;
//         break;
// }

// switch(quest3) 
// {
//     case "Россия":
//         point3 = 2;
//         break;
//     case "США":
//         point3 = 0;
//         break;
//     case "Ватикан":
//         point3 = 0;
//         break;
// }

// pointAll = point1 + point2 + point3;
// alert("Вы набрали " + pointAll + " баллов");

// #10

// let day = prompt("Укажите день");
// let month = prompt("Укажите месяц");
// let year = prompt("Укажите год");

// if (month == 12 && day == 31) {
//     day = "01";
//     month = "01";
//     year++;
//     alert(day + "," + month + "," + year)
// }
// else if(month != 12 && day == 31) {
//     day = "01";
//     month++;
//     alert(day + "," + month + "," + year)
// }
// else if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0 && day == 28 && month == "02")
// {
//     day = "01";
//     month++;
//     alert(day + "," + "0" + month + "," + year)
// }