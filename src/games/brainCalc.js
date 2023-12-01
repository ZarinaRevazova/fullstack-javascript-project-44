import { startBrainGame } from '../index.js';
import getRandomNum from '../utils.js';

const getRandomExpression = () => {
  const operators = [
    ['+', (a, b) => a + b],
    ['-', (a, b) => a - b],
    ['*', (a, b) => a * b],
  ];
  const selectedOperator = Math.floor(Math.random() * operators.length);
  return operators[selectedOperator];
};

const rules = 'What is the result of the expression?';

const getQA = () => {
  const firstRandomOperator = getRandomNum(1, 100);
  const secondRandomOperator = getRandomNum(1, 100);
  const randomExpression = getRandomExpression();
  const [operation, calculation] = randomExpression;

  const question = `${firstRandomOperator} ${[operation]} ${secondRandomOperator}`;
  const correctAnswer = calculation(firstRandomOperator, secondRandomOperator).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(rules, getQA);
};
