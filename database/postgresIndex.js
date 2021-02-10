/*eslint-disable*/
const { Pool } = require('pg');

const pool = new Pool({
  user: 'trentito',
  host: 'localhost',
  port: 5432,
  database: 'reviews',
});

  module.exports = pool;