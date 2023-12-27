/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  await knex('user').insert([
    { user_id: 1, username: 'user1', email: 'user1@example.com', password: 'password1' },
    { user_id: 2, username: 'user2', email: 'user2@example.com', password: 'password2' },
    { user_id: 3, username: 'user3', email: 'user3@example.com', password: 'password3' }
  ]);
};
