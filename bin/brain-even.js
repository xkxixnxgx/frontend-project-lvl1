#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { answerNumber, randomNumber } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let counter = 1; counter <= 4; counter += 1) {
  if (counter === 4) {
    console.log(`Congratulations, ${name}!`);
    break;
  }
  const number = randomNumber();
  console.log(`Question: ${number[0]}`);
  const userAnswer = answerNumber();
  if (userAnswer === number[1]) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${number[1]}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
