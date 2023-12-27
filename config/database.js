import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });

const host = process.env.HOST;
const database = process.env.DATABASE;
const port = process.env.PORT;
const username = process.env.USER;
const password = process.env.PASSWORD;

const db = knex({
    client: 'pg',
    connection: {
        host,
        user: username,
        password,
        database,
        port,
    },
});

export default db;
