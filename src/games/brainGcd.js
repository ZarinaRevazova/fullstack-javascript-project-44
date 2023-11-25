import { startBrainGame } from '../index.js';
import getRandomNum from '../utils.js';

const calcGcd = (x, y) => {
  if (x === 0) {
    return y;
  }
  if (y === 0) {
    return x;
  }

  return calcGcd(y, x % y);
};

const rules = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  const firstRandomOperator = getRandomNum(1, 100);
  const secondRandomOperator = getRandomNum(1, 100);

  const question = `${firstRandomOperator} ${secondRandomOperator}`;
  const correctAnswer = calcGcd(firstRandomOperator, secondRandomOperator).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(rules, getQA);
};
