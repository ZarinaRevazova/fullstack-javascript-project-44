import { startBrainGame } from '../index.js';
import getRandomNum from '../utils.js';

const generateProgression = (startNum, progressionLength, progressionStep) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNum + progressionStep * i);
  }
  return progression;
};

const rules = 'What number is missing in the progression?';

const getQA = () => {
  const progressionLength = getRandomNum(5, 10);
  const progressionStep = getRandomNum(1, 5);
  const startNum = getRandomNum(1, 10);

  const readyProgression = generateProgression(startNum, progressionLength, progressionStep);

  const randomIndex = Math.floor(Math.random() * readyProgression.length);
  const correctNumber = readyProgression[randomIndex];
  readyProgression[randomIndex] = '..';
  const question = readyProgression.join(' ');

  const correctAnswer = correctNumber.toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(rules, getQA);
};
