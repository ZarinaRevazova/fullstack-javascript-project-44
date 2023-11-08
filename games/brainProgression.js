import { startBrainGame, gameProgressionRule } from '../src/index.js';

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

const generateArray = (startNum) => {
  const arr = [];
  for (let i = 1; i <= 20; i += 2) {
    const nextNum = startNum + i;
    arr.push(nextNum);
  }
  return arr;
};

const getQA = () => {
  const startNum = getRandomNumber(10);
  console.log(generateArray(startNum));
  const readyArray = generateArray(startNum);
  console.log(readyArray);
  const randomIndex = Math.floor(Math.random() * readyArray.length);
  readyArray[randomIndex] = '..';
  const question = readyArray.join(' ');
  console.log(question);

  // не понимаю, как провести проверку? Как определить correctNumber? Логически я должна сравнить
  // два массива -> generateArray(startNum) и readyArray, и посмотреть совпало ли введенное
  // мной вместо '..' число со значением в изначальном массиве;
  const correctNumber = startNum * randomIndex; // пока только такой вариант приходит на ум.
  // Массивы generateArray и readyArray совпадают, а при вводе ответа выдаются совершенно
  // другие числа

  const correctAnswer = correctNumber.toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => {
  startBrainGame(gameProgressionRule, getQA);
};

// А также в этом шаге после установки пакета не заработал вывод игры в виде brain-progression.
// Игра выводится в терминале только из директории bin в виде node brain-progression.js.
// Но это, я думаю, я попробую исправить после того, как игра заработает.
// С другими играми таких проблем не было.
