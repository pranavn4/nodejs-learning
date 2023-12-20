import {getRandomJoke} from "../model/jokeModels.js";
import {handleDatabaseError} from "../../config/errorHandler.js";

const getRandomJokeController = async (req, res) => {
    try {
        const joke = await getRandomJoke();
        res.json(joke);
    } catch (error) {
        handleDatabaseError(res, error);
    }
};

export {getRandomJokeController}