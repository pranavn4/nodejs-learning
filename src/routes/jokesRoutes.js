import express from 'express';
const router = express.Router();
import { validateFilterParams, validateJoke } from '../controllers/middleware.js';
import {getRandomJokeController} from "../controllers/getRandomJokeController.js";
// import {getJokeByIdController} from "../controllers/getjokesController.js";
// import {getJokesByTypeController} from "../controllers/getJokesByTypeController.js";
import {createJokeController} from "../controllers/createJokeController.js";
import {updateJokeController} from "../controllers/updateJokeController.js";
import {deleteJokeController} from "../controllers/deleteJokeController.js";
import {getJokesController} from "../controllers/getjokesController.js";

router.get('/random', getRandomJokeController);
router.get("/filter",validateFilterParams,getJokesController);
router.get("/:id",getJokesController);
router.post("/",validateJoke,createJokeController);
router.put("/:id",validateJoke,updateJokeController)
router.delete("/:id",deleteJokeController)
export default router;
