import readlineSync from 'readline-sync';

export const helloName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const questionAndAnswer = (task) => {
  console.log(`Question: ${task}`);
  const userValue = readlineSync.question('Your answer: ');
  return userValue;
};

const comparisonValues = (mainTask, tasks, correctValues) => {
  const userName = helloName();
  console.log(mainTask);
  for (let counter = 0; counter <= 3; counter += 1) {
    if (counter === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const task = tasks[counter];
    const correctValue = correctValues[counter];
    const valueUser = questionAndAnswer(task);
    if (valueUser === correctValue) {
      console.log('Correct!');
    } else {
      console.log(`${valueUser} is wrong answer ;(. Correct answer was ${correctValue}.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
};

export const startGame = (mainTask, functionGame) => {
  const tasks = [];
  const correctValues = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const taskValue = functionGame();
    tasks.push(taskValue[0]);
    correctValues.push(taskValue[1]);
  }
  comparisonValues(mainTask, tasks, correctValues);
};
