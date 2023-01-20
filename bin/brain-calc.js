#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import {
  greetingAndAskName, askAnswer, congratulations, gameOverText,
} from '../src/index.js';
// 1. Задать вопрос

const name = greetingAndAskName();
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const number1 = Math.floor(Math.random() * 31);
  const number2 = Math.floor(Math.random() * 31);
  let result;
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      result = number1 + number2;
      console.log(`Question: ${number1} + ${number2}`);
      break;
    case 1:
      result = number1 - number2;
      console.log(`Question: ${number1} - ${number2}`);
      break;
    case 2:
      result = number1 * number2;
      console.log(`Question: ${number1} * ${number2}`);
      break;
    // no default
  }
  // 2. Получить ответ
  const answer = askAnswer();
  // 3. Сравнить ответ с правильным
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
