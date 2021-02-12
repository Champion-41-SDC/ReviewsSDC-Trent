/*eslint-disable*/
const { Pool } = require('pg');

const pool = new Pool({
  user: 'ternt',
  host: '18.216.46.4',
  port: 5432,
  password: 'password',
  database: 'postgres',
});

  module.exports = pool;
