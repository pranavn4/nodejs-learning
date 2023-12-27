import process from 'process';
import knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
const config = require('../../knexfile.js')[environment];

console.log(config);

const db = knex(config);

export default db;
