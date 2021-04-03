#!/usr/bin/env node

import { startGame } from '../src/index.js';

const mainTask = 'What is the result of the expression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const correctNumber = (num1, num2, operator) => {
  if (operator === '*') {
    const corrNumber = num1 * num2;
    return corrNumber;
  }
  return (operator === '+') ? num1 + num2 : num1 - num2;
};

const mathOperations = () => {
  const symbols = ['+', '-', '*'];
  const num1 = getRandomInt(0, 10);
  const num2 = getRandomInt(0, 10);
  const symbol = symbols[getRandomInt(0, symbols.length - 1)];
  const task = `${num1} ${symbol} ${num2}`;
  const corrNumber = String(correctNumber(num1, num2, symbol));
  const numberParity = [task, corrNumber];
  return numberParity;
};

startGame(mainTask, mathOperations);
