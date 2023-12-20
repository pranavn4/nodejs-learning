import {createJoke} from "../model/jokeModels.js";
import {handleDatabaseError} from "../../config/errorHandler.js";

const createJokeController = async (req, res) => {
    const { joke_text, joke_type } = req.body;
    try {
        const [new_joke] = await createJoke({ joke_text, joke_type });

        res.json({ new_joke });
    } catch (error) {
        handleDatabaseError(res, error);
    }
};
export {createJokeController}