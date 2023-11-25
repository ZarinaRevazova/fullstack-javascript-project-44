import { startBrainGame } from '../index.js';
import getRandomNum from '../utils.js';

const isEvenNumber = (num) => num % 2 === 0;
const getCorrectAnswer = (choice) => (choice ? 'yes' : 'no');

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQA = () => {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = getCorrectAnswer(isEvenNumber(randomNum));

  return {
    question: randomNum,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(rules, getQA);
};
