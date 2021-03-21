#!/usr/bin/env node

import { startGame } from '../src/index.js';

const mainTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeNumber = (num) => {
  let flag = 'yes';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      flag = 'no';
      break;
    }
  }
  return flag;
};

const randomNumber = () => {
  const min = 0;
  const max = 20;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  const label = primeNumber(number);
  const numberParity = [number, label];
  return numberParity;
};

startGame(mainTask, randomNumber);
