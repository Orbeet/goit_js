'use strict';

let input = document.querySelector('#name-input');
let output = document.querySelector('#name-output');

const addName = function(e) {
  output.textContent = e.target.value ? e.target.value : 'незнакомец';
};

input.addEventListener('input', addName);
