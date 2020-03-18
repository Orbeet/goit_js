'use strict';

const valueInput = document.getElementById('font-size-control');
const valText = document.getElementById('text');
valueInput.value = 16;

valueInput.addEventListener('input', function() {
  valText.style.fontSize = `${valueInput.value}px `;
});
