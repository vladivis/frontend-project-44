#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import {
  greetingAndAskName, askAnswer, congratulations, gameOverText,
} from '../src/index.js';

const name = greetingAndAskName();
console.log('What number is missing in the progression?');

const progression = () => {
  const startNumber = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const progressionReturn = [startNumber];
  for (let i = 0; i < (Math.floor(Math.random() * 4) + 5); i += 1) {
    progressionReturn.push(progressionReturn.at(-1) + step);
  }
  return progressionReturn;
};

for (let i = 0; i < 3; i += 1) {
  const progressionLine = progression();
  const hideTarget = Math.floor(Math.random() * (progressionLine.length));
  let rightAnswer = progressionLine[hideTarget];
  progressionLine[hideTarget] = '..';
  console.log(`Question: ${progressionLine.join(' ')}`);
  const answer = askAnswer();
  rightAnswer = _.toString(rightAnswer);
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
