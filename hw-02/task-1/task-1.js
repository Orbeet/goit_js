'use strict';

const logItems = function(array) {
  for (let i = 0; i < array.length; i += 1) {
    let el = i + 1;
    console.log(`${el} - ${array[i]}`);
  }
};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
