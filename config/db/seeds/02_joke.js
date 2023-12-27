/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('jokes').del()
  await knex('jokes').insert([
    { joke_id: 1, joke_type: 'Type1', joke_text: 'Joke 1 text' },
    { joke_id: 2, joke_type: 'Type2', joke_text: 'Joke 2 text' },
    { joke_id: 3, joke_type: 'Type3', joke_text: 'Joke 3 text' }
  ]);
};
