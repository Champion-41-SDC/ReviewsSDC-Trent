/*eslint-disable*/
const csv = require('csv-parser');
const fs = require('fs');

const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'reviews.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'product_id', title: 'product_id'},
    {id: 'title', title: 'title'},
    {id: '_description', title: '_description'},
    {id: 'stars', title: 'stars'},
    {id: 'comfort_level', title: 'comfort_level'},
    {id: 'fit', title: 'fit'},
    {id: 'quality', title: 'quality'},
    {id: 'recommend', title: 'recommend'},
    {id: 'createdAt', title: 'createdAt'},
    {id: '_user', title: '_user'},
    {id: 'email', title: 'email'},
    {id: '_yes', title: '_yes'},
    {id: '_no', title: '_no'},
    {id: 'report', title: 'report'},
  ]
});

const data = require('../faker.js');

csvWriter
  .writeRecords(data)
  .then(() => {console.log('The CSV file was written successfully')})
  .catch((err) => {
    console.log(err);
  })