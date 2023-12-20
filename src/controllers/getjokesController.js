// controllers/getJokesController.js
import _ from 'lodash';
import { getJokes } from '../model/jokeModels.js';
import { handleDatabaseError } from '../../config/errorHandler.js';

const getJokesController = async (req, res) => {
    try {
        if (req.params.id) {
            // If ID is provided, fetch joke by ID
            const id = _.parseInt(req.params.id);
            const joke = await getJokes({ id });

            if (joke.length > 0) {
                res.json(joke[0]);
            } else {
                res.sendStatus(404);
            }
        } else {
            // If no ID, assume it's a filter request
            const type = req.query.type.toLowerCase();
            const jokes = await getJokes({ joke_type: type });

            if (jokes.length > 0) {
                res.json(jokes);
            } else {
                res.sendStatus(404);
            }
        }
    } catch (error) {
        handleDatabaseError(res, error);
    }
};

export { getJokesController };
