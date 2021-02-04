/* eslint-disable */
const faker = require('faker');
const fs = require('fs');

let array = [];

for (let i = 0; i < 1000; i++) {
  let newObj = {
    id: faker.random.number(),
    product_id: faker.random.number(),
    title: faker.name.title(),
    _description: faker.commerce.productDescription(),
    stars: faker.random.number(),
    comfort_level: faker.random.word(),
    fit: faker.random.word(),
    quality: faker.random.word(),
    recommend: faker.random.word(),
    createdAt: faker.random.number(),
    _user: faker.name.firstName(),
    email: faker.internet.email(),
    _yes: faker.random.number(),
    _no: faker.random.number(),
    report: 'report'
  }
  array.push(newObj);
}


module.exports = array;