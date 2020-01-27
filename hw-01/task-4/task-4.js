'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const howManyDroids = prompt('Сколько дроидов Вы хотите купить?');

if (howManyDroids !== null) {
  let totalPrice = pricePerDroid * howManyDroids;

  if (totalPrice > credits) {
    console.log('Недостаточно средств на счету!');
  } else {
    console.log(
      `Вы купили ${howManyDroids} дроидов, на счету осталось ${credits -
        totalPrice} кредитов.`,
    );
  }
} else {
  console.log('Отменено пользователем!');
}
