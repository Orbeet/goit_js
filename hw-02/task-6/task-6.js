// 'use strict';

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt('Введите число');

//   numbers.push(Number(input));
//   console.log(numbers);
// } while (input !== null);

// if (numbers.length > 0) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     total += numbers[i];
//   }
// }

// alert(`Общая сумма чисел равна ${total}`);

'use strict';

const YOU_NUMBER = 'You number';
const NO_NUMBER = 'Было введено не число, попробуйте еще раз';
let userInput;
let total = 0;
const numbers = [];

while (userInput !== null) {
  userInput = prompt(YOU_NUMBER, 0);
  if (userInput === null) break;
  const userNumber = +userInput;
  if (Number.isNaN(userNumber)) {
    alert(NO_NUMBER);
  } else {
    numbers.push(userNumber);
  }
}
