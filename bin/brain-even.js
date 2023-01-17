#!/usr/bin/env node
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 21);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('');
  let boolenAnswer;
  let correctAnswer;
  const endOfWrongAnswer = () => {
    number % 2 === 0 ? correctAnswer = 'yes' : correctAnswer = 'no';
    console.log(`Your answer: ${answer}\n'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  };
  if (answer === 'yes' || answer === 'no') {
    answer === 'yes' ? boolenAnswer = true : boolenAnswer = false;
    if (boolenAnswer === (number % 2 === 0)) {
      console.log(`Your answer: ${answer}\nCorrect!`);
      if (i === 2) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      endOfWrongAnswer();
      break;
    }
  } else {
    endOfWrongAnswer();
    break;
  }
}
