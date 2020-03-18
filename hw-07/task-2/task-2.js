'use strict';

let element = document.getElementById('ingredients');
let fragment = document.createDocumentFragment();
let ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

element.insertAdjacentHTML('beforebegin', '<h2>Our Ingridients</h2>');

ingredients.forEach(function(browser) {
  let li = document.createElement('li');
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
