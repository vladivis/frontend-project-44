#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import {
  greetingAndAskName, askAnswer, congratulations, gameOverText,
} from '../src/index.js';

const name = greetingAndAskName();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const doesDigitPrime = (tmpNumber) => {
  for (let i = 2; i < tmpNumber; i += 1) {
    if (tmpNumber % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

for (let i = 0; i < 3; i += 1) {
  const number = Math.floor(Math.random() * 48) + 2;
  const rightAnswer = doesDigitPrime(number);
  console.log(`Question: ${number}`);
  const answer = askAnswer();
  if (answer === rightAnswer) {
    console.log('Correct!');
  } else {
    gameOverText(answer, rightAnswer, name);
    break;
  }
  if (i === 2) {
    congratulations(name);
  }
}
