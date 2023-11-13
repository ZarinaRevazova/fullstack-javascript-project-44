import { startBrainGame, gamePrimeRule, getRandomNum } from '../src/index.js';

const isPrimeNumber = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (choice) => (choice ? 'yes' : 'no');

const getQA = () => {
  const randomNum = getRandomNum(1, 100);
  const correctAnswer = getCorrectAnswer(isPrimeNumber(randomNum));
  return {
    question: randomNum,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(gamePrimeRule, getQA);
};
