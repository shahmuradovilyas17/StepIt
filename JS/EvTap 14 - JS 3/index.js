// 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let first = Number(prompt("Первое число"));
let last = Number(prompt("Последнее число"));
let i;
let res;

for(i = first ; i <= last; i++) {
    res = res + i;
}

alert(res);