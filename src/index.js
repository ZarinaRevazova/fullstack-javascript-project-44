import readlineSync from 'readline-sync';
import { requestName } from './cli.js';

export const showQuestion = (question) => console.log(`Question: ${question}`);
export const yourAnswer = () => readlineSync.question('Your answer: ');

export const gameEvenRule = () =>
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const gameCalcRule = () =>
  console.log('What is the result of the expression?');
export const gameGcdRule = () =>
  console.log('Find the greatest common divisor of given numbers.');
export const gameProgressionRule = () =>
  console.log('What number is missing in the progression?');

export const getRandomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getRandomNumber = (num) => Math.floor(Math.random() * 10);

export const instruction = {
  wrong: (yourName, answer, correctAnswer) => {
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
    );
    console.log(`Let's try again, ${yourName}!`);
  },
  correct: () => console.log('Correct!'),
  congrats: (yourName) => console.log(`Congratulations, ${yourName}!`),
};

export const startBrainGame = (showRule, getQA) => {
  const yourName = requestName();
  showRule();

  const amountOfPossibleQuestions = 3;
  for (let i = 0; i < amountOfPossibleQuestions; i += 1) {
    const { question, correctAnswer } = getQA();

    showQuestion(question);
    const answer = yourAnswer();

    if (answer === correctAnswer) {
      instruction.correct();
    } else {
      instruction.wrong(yourName, answer, correctAnswer);
      return;
    }
  }
  instruction.congrats(yourName);
};
