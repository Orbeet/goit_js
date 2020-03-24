'use strict';

const counter = document.querySelector('#value');
const plus = document.querySelector('button[data-action="increment"]');
const minus = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;

function increment() {
  counterValue += 1;
  counter.innerHTML = counterValue;
}

function decrement() {
  counterValue -= 1;
  counter.innerHTML = counterValue;
}

plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);
