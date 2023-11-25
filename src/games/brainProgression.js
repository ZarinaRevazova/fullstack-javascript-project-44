import { startBrainGame } from '../index.js';
import getRandomNum from '../utils.js';

const generateArray = (startNum, progressionLength, arrayStep) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + arrayStep * i);
  }
  return progression;
};

const rules = 'What number is missing in the progression?';

const getQA = () => {
  const progressionLength = getRandomNum(5, 10);
  const arrayStep = getRandomNum(1, 5);
  const startNum = getRandomNum(1, 10);

  const readyArray = generateArray(startNum, progressionLength, arrayStep);

  const randomIndex = Math.floor(Math.random() * readyArray.length);
  const correctNumber = readyArray[randomIndex];
  readyArray[randomIndex] = '..';
  const question = readyArray.join(' ');

  const correctAnswer = correctNumber.toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(rules, getQA);
};
