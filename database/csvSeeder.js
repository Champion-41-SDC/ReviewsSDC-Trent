const fs = require('fs');
const faker = require('faker');
const csvWriter = require('csv-write-stream');

const writer = csvWriter();

const dataGenerator = () => {
  writer.pipe(fs.createWriteStream('reviews.csv'));
  for (let i = 0; i < 10000000; i++) {
    writer.write({
      product_id: faker.random.number({ min: 0, max: 2 }),
      title: faker.name.title(),
      _description: faker.commerce.productDescription(),
      stars: faker.random.number({ min: 0, max: 5 }),
      comfort_level: faker.random.number({ min: 0, max: 4 }),
      fit: faker.random.number({ min: 0, max: 4 }),
      quality: faker.random.number({ min: 0, max: 4 }),
      recommend: faker.random.number({ min: 0, max: 4 }),
      createdAt: faker.random.number(),
      _user: faker.name.firstName(),
      email: faker.internet.email(),
      _yes: 0,
      _no: 0,
      report: 'Report',
    });
  }
  writer.end();
};

dataGenerator();
