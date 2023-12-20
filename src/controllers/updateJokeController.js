import _ from "lodash";
import {updateJoke} from "../model/jokeModels.js";
import {handleDatabaseError} from "../../config/errorHandler.js";

const updateJokeController = async (req, res) => {
    const id = _.parseInt(req.params.id);
    const { joke_text, joke_type } = req.body;

    try {
        const [updated_joke] = await updateJoke(id, { joke_text, joke_type });

        if (updated_joke) {
            res.json(updated_joke);
        } else {
            res.sendStatus(404);
        }
    } catch (error) {
        handleDatabaseError(res, error);
    }
};

export {updateJokeController}