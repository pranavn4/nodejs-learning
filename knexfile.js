// Update with your config settings.
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: "./config/.env" });

const development = {
    client: 'pg',
    connection: {
        host: process.env.HOST,
        port: process.env.PORT,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: 'world',
    },
    migrations: {
        directory: './config/db/migrations/',
    },
    seeds: {
        directory:'./config/db/seeds',
    },
};

const production = {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: './config/db/migrations',
    },
    seeds: {
        directory: './config/db/seeds/production'
    },
};

const environment = process.env.NODE_ENV || 'development';

export default {
    development,
    production,
}[environment];
