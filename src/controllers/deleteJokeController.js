import _ from "lodash";
import {deleteJoke, getJokes} from "../model/jokeModels.js";
import {handleDatabaseError} from "../../config/errorHandler.js";
const deleteJokeController = async (req, res) => {
    const id = _.parseInt(req.params.id);

    try {
        const existing_joke = await getJokes(id);

        if (existing_joke.length === 0) {
            return res.status(404).json({
                error_message: `Joke with id: ${id} not found, no jokes were deleted`,
                data:req.body,
                key:id,
                success:false
            });
        }
        await deleteJoke(id);

        res.sendStatus(204);
    } catch (error) {
        handleDatabaseError(res, error);
    }
};

export {deleteJokeController}