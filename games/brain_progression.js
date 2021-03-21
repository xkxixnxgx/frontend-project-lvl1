#!/usr/bin/env node

import { startGame } from '../src/index.js';

const mainTask = 'What number is missing in the progression?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateArr = () => {
  const counterMax = getRandomInt(4, 9);
  const startNumber = getRandomInt(1, 100);
  const arr = [startNumber];
  const increase = getRandomInt(1, 10)
  for (let counter = 0; counter < counterMax; counter += 1) {
      const lastNumber = arr[arr.length-1]
      arr.push(lastNumber + increase)
  };
  return arr;
};


const replaceNumber = () => {
  const arr = generateArr();
  const randomPosition = getRandomInt(0, arr.length - 2);
  const corrNumber = String(arr[randomPosition]);
  arr.splice(randomPosition, 1, '..');
  const task = arr.join(' ');
  const numberParity = [task, corrNumber];
  return numberParity;
};

startGame(mainTask, replaceNumber);