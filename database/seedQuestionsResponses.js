// const dbHelpers = require('./index.js');
// const mongoose = require('mongoose');

// const items = ['hoodie', 'shirt', 'product', 'pair of shorts', 'pair of socks', 'pair of pants'];
// // const users = ['kevin', 'bob', 'greg', 'matthew', 'jason', 'sam', 'trent', 'vini', 'ant', 'smith', 'dogo', 'rob', 'joshua', 'charmander', 'ashe', 'pika', 'peace'];
// const users = ['DoubleCheckYouAreNotZoomedInWhileDoingCSS','iLOVEcss', 'scrimba', 'jQueryisgreatSike','HelpDesk', 'CovidSucks', 'ilovebobatea', 'TrentIsaGOD', 'HireMeChampion', 'HireMeNetflix', 'HireMeFacebook', 'HireMeGoogle', 'VenmoMe$5Bucks', 'DivDivDivDivDiv', 'MyBrainIsDone', 'iBrokeMyCode', 'CtrlC+CtrlV', 'EatSleepCodeRepeat', 'WhatIsAtree?', 'GroceryListsAllDay'];
// const emails = ['@yahoo.com', '@gmail.com', '@outlook.com', '@aol.com', '@microsoft.com', '@hackreactor.com'];
// const numbers = [3, 5, 10, 203, 121, 557, 32, 88, 433, 23, 2, 4, 8, 093, 3465, 123, 11, 17, 35, 91, 56, 69, 48, 57, 1];
// const colors = ['red', 'black', 'purple', 'orange', 'yellow', 'pink', 'maroon', 'olive', 'blue', 'turquoise', 'white'];
// const responses = ['Yes this color is available', 'No this color is not available for this product']
// const responseCounter = [1, 2];

// const randomizer = (arr) => {
//   var output = arr[Math.floor(Math.random() * arr.length)];
//   return output;
// }

// const createAnswer = () => {
//   let answer = {};

//   answer.description = randomizer(responses);
//   answer.createdAt = Math.ceil(Math.random() * 100);
//   answer.user = randomizer(users) + Math.floor(Math.random() * 100).toString();
//   answer.email = randomizer(users) + randomizer(numbers).toString() + randomizer(emails);

//   return answer;
// }

// const createQuestion = () => {
//   let question = {};

//   question.productId = Math.floor(Math.random() * 3);
//   question.description = 'Does this ' + randomizer(items) + ' come in ' + randomizer(colors) + '?';
//   question.createdAt = Math.ceil(Math.random() * 100);
//   question.user = randomizer(users) + randomizer(numbers).toString();
//   question.email = randomizer(users) + randomizer(numbers).toString() + randomizer(emails);
//   question.response = [createAnswer()];
//   question.responseCount = question.response.length;

//   return question;
// }

// const generateQuestions = () => {
//   const questions = [];
//   for (var i = 0; i < 500; i++) {
//     questions.push(createQuestion());
//   }
//   return questions;
// }

// const sampleData = generateQuestions();

// dbHelpers.Question.create(sampleData)
//   .then(() => {
//     console.log('Seeded Database!');
//   })
//   .then(() => {
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });