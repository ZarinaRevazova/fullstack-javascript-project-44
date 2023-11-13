import { startBrainGame, gameCalcRule, getRandomNum } from '../src/index.js';

const getRandomOperand = () => {
  const operators = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
  ];
  const selectedOperator = Math.floor(Math.random() * operators.length);
  return operators[selectedOperator];
};

const getQA = () => {
  const firstRandomOperator = getRandomNum(1, 100);
  const secondRandomOperator = getRandomNum(1, 100);
  const randomOperand = getRandomOperand();

  const question = `${firstRandomOperator} ${randomOperand[0]} ${secondRandomOperator}`;
  const correctAnswer = randomOperand[1](firstRandomOperator, secondRandomOperator).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(gameCalcRule, getQA);
};
