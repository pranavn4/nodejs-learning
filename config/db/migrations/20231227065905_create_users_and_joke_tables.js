
export const up = async function(knex) {
    return knex.schema.createTable('user', (table) => {
        table.increments('user_id').primary();
        table.string('username').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
        .createTable('jokes', (table) => {
        table.increments('joke_id').primary();
        table.string('joke_type');
        table.text('joke_text');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
        .createTable('comment', (table) => {
            table.increments('comment_id').primary();
            table.integer('joke_id').unsigned();
            table.foreign('joke_id').references('jokes.joke_id');
            table.integer('user_id').unsigned();
            table.foreign('user_id').references('user.user_id');
            table.text('comment_text');
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
};


export const down = async function(knex) {

    return knex.schema.dropTableIfExists('user').dropTableIfExists('jokes').dropTableIfExists('comment');
  
};

