import readlineSync from 'readline-sync';


export const helloName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export const answerNumber = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const randomNumber = () => {
    const min = 0
    const max = 100
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    const label = number % 2 === 0 ? 'yes' : 'no';
    const number_parity = [number, label];
    return number_parity;
};

