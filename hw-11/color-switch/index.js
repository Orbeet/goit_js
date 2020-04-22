'use strict';

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const arrValues = {
  MIN: 0,
  MAX: colors.length - 1,
};

let isActive = false;

const timer = {
  start() {
    if (isActive) {
      return;
    }

    this.timerId = setInterval(() => {
      changeBgColor();
    }, 1000);
    isActive = true;
  },
  stop() {
    clearInterval(this.timerId);
    isActive = false;
  },
};

function changeBgColor() {
  const colorindex = randomIntegerFromInterval(arrValues.MIN, arrValues.MAX);
  const selectedColor = colors[colorindex];
  refs.body.style.backgroundColor = `${selectedColor}`;
}

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));
