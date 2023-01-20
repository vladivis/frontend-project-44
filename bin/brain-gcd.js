#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import {
  greetingAndAskName, askAnswer, congratulations, gameOverText,
} from '../src/index.js';

const name = greetingAndAskName();
console.log('Find the greatest common divisor of given numbers.');

const findingHighestDivisor = (biggerNumber, lowerNumber) => {
  let highestDivisor;
  for (let i = 1; i <= lowerNumber; i += 1) {
    if (biggerNumber % i === 0 && lowerNumber % i === 0) {
      highestDivisor = i;
    }
  }
  return highestDivisor;
};

for (let i = 0; i < 3; i += 1) {
  const number1 = Math.floor(Math.random() * 31);
  const number2 = Math.floor(Math.random() * 31);
  let result;

  console.log(`Question: ${number1} ${number2}`);
  if (number1 > number2) {
    result = findingHighestDivisor(number1, number2);
  } else {
    result = findingHighestDivisor(number2, number1);
  }
  const answer = askAnswer();
  result = _.toString(result);
  if (answer === result) {
    console.log('Correct!');
  } else {
    gameOverText(answer, result, name);
    break;
  }
  if (i === 2) {
    congratulations(name);
  }
}
