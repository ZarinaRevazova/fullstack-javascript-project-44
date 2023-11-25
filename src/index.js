import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

export const showQuestion = (question) => console.log(`Question: ${question}`);
export const yourAnswer = () => readlineSync.question('Your answer: ');

export const instruction = {
  wrong: (yourName, answer, correctAnswer) => {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${yourName}!`);
  },
  correct: () => console.log('Correct!'),
  congrats: (yourName) => console.log(`Congratulations, ${yourName}!`),
};

export const startBrainGame = (rules, getQA) => {
  const yourName = makeWelcome();
  console.log(rules);

  const amountOfPossibleQuestions = 3;
  for (let i = 0; i < amountOfPossibleQuestions; i += 1) {
    const { question, correctAnswer } = getQA();

    showQuestion(question);
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
