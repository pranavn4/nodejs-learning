import db from '../../config/database.js';


const getRandomJoke = () => {
    return db('joke').select('*').orderByRaw('RANDOM()').limit(1);

};

// const getJokeById = (id) => {
//     return  db('joke').select('*').where('id', id);
// };
//
// const getJokesByType =  (type) => {
//     return db('joke').select('*').where('joke_type', type);
// };

const createJoke = (jokeData) => {
    return  db('joke').insert(jokeData).returning('*');
};

const updateJoke =  (id, jokeData) => {
    return  db('joke').where('id', id).update(jokeData).returning('*');
};

const deleteJoke =  (id) => {
    return db('joke').where('id', id).del();
};
const getJokes = (criteria) => {
    return db('joke').select('*').where(criteria);
};
export {
    getRandomJoke,
    // getJokeById,
    // getJokesByType,
    createJoke,
    updateJoke,
    deleteJoke,
    getJokes
};
