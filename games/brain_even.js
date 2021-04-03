#!/usr/bin/env node

import { startGame } from '../src/index.js';

const mainTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const randomNumber = () => {
  const min = 0;
  const max = 100;
  const number = Math.floor(Math.random() * (max - min + 1)) + min;
  const label = number % 2 === 0 ? 'yes' : 'no';
  const numberParity = [number, label];
  return numberParity;
};

startGame(mainTask, randomNumber);
