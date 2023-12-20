// import {getJokesByType} from "../model/jokeModels.js";
import {handleDatabaseError} from "../../config/errorHandler.js";

const getJokesByTypeController = async (req, res) => {
    const type = req.query.type.toLowerCase();

    try {
        const jokes = await getJokesByType(type);
        if (jokes.length > 0) {
            res.json(jokes);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        handleDatabaseError(res, error);
    }
};
export {getJokesByTypeController}