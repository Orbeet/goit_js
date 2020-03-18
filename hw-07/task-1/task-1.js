'use strict';

const items = document.querySelectorAll('.item');
[...items].forEach((num, idx) => {
  console.log(num, idx, num.querySelectorAll('li').length);
  console.log((num.querySelector('h2').innerHTML += ` ${num.querySelectorAll('li').length}`));
});
