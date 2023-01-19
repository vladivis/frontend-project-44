#!/usr/bin/env node
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';

// 1. Задать вопрос

// 2. Получить ответ

export const greetingAndAskName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askAnswer = () => {
  const answer = readlineSync.question('');
  console.log(`Your answer: ${answer}`);
  return answer;
};

// 3. Сравнить ответ с правильным

export const gameOverText = (answer, result, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${name}!`);
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};
