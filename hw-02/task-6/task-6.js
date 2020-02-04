'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');

  numbers.push(Number(input));
  console.log(numbers);
} while (input !== null);

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
}

alert(`Общая сумма чисел равна ${total}`);
