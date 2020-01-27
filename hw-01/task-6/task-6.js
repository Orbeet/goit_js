'use strict';

let input;
let total = 0;

do {
  input = prompt('Введите число');
  total += Number(input);

  if (isNaN(input)) {
    alert('Введено не число, попробуйте еще раз');
    input = prompt('Введите число');
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
