#!/usr/bin/env node

import { startGame } from '../src/index.js';

const mainTask = 'Find the greatest common divisor of given numbers.';

const GCD = (x, y) => {
  if (y > x) return GCD(y, x);
  if (!y) return x;
  return GCD(y, x % y);
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const correctGCD = () => {
  const num1 = getRandomInt(0, 100);
  const num2 = getRandomInt(0, 100);
  const task = `${num1} ${num2}`;
  const corrNumber = String(GCD(num1, num2));
  const numberParity = [task, corrNumber];
  return numberParity;
};

startGame(mainTask, correctGCD);
