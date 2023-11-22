import { startBrainGame, gameProgressionRule, getRandomNumber } from '../index.js';
import getRandomNum from '../utils.js';

const generateArray = (startNum, progressionLength, arrayStep) => {
  const arr = [];
  let nextNum = startNum;
  for (let i = 0; i < progressionLength; i += 1) {
    nextNum = startNum + arrayStep * i;
    arr.push(nextNum);
  }
  return arr;
};

const getQA = () => {
  const progressionLength = getRandomNum(5, 10);
  const arrayStep = getRandomNum(1, 5);
  const startNum = getRandomNumber(10);

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
  startBrainGame(gameProgressionRule, getQA);
};
