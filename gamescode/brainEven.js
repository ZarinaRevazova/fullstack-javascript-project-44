import readlineSync from 'readline-sync';

const requestName = () => {
  console.log('Welcome to the Brain Games!');
  const yourName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${yourName}`);
  return yourName;
};

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const showQuestionNumber = (question) => console.log(`Question: ${question}`);
const yourAnswer = () => readlineSync.question('Your answer: ');

const instruction = {
  wrong: (yourName, answer, correctAnswer) => {
    console.log(
      `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`
    );
    console.log(`Let's try again, ${yourName}!`);
  },
  correct: () => console.log('Correct!'),
  congrats: (yourName) => console.log(`Congratulations, ${yourName}!`),
};

const isEvenNumber = (num) => num % 2 === 0;
const getCorrectAnswer = (choice) => (choice ? 'yes' : 'no');

function getQA() {
  const randomNum = getRandomNum(1, 1000000);
  const correctAnswer = getCorrectAnswer(isEvenNumber(randomNum));

  return {
    question: randomNum,
    correctAnswer,
  };
}

const startBrainEvenGame = () => {
  const yourName = requestName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const amountOfPossibleQuestions = 3;
  for (let i = 0; i < amountOfPossibleQuestions; i += 1) {
    const { question, correctAnswer } = getQA();

    showQuestionNumber(question);
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

export default startBrainEvenGame;
