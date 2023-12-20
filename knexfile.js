// Update with your config settings.
module.exports = {

  development: {
    client: 'pg',
    connection:'postgres://localhost/jokes'
  },

  migrations: {
      directory:__dirname+"/config/migration"
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'world',
      user:     process.env.USER,
      password: process.env.PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
