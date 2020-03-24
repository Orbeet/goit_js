'use strict';

let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

const addName = function({ target }) {
  output.textContent = target.value ? target.value : 'незнакомец';
};

input.addEventListener('input', addName);
