/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('comment').del()
  await knex('comment').insert([
    { comment_id: 1, joke_id: 1, user_id: 1, comment_text: 'Comment 1 text' },
    { comment_id: 2, joke_id: 2, user_id: 2, comment_text: 'Comment 2 text' },
    { comment_id: 3, joke_id: 3, user_id: 3, comment_text: 'Comment 3 text' }
  ]);
};
