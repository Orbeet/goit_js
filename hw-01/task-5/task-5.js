'use strict';

const china = 'китай';
const chile = 'чили';
const australia = 'австралия';
const india = 'индия';
const jamaica = 'ямайка';

let chooseCountry = prompt('Введите страну:').toLowerCase();

switch (chooseCountry) {
  case china:
    alert('Доставка в Китай будет стоить 100 кредитов');
    break;

  case chile:
    alert('Доставка в Чили будет стоить 250 кредитов');
    break;

  case australia:
    alert('Доставка в Австралию будет стоить 170 кредитов');
    break;

  case india:
    alert('Доставка в Индию будет стоить 80 кредитов');
    break;

  case jamaica:
    alert('Доставка на Ямайку будет стоить 120 кредитов');
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
