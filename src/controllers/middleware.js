import Joi from 'joi';

const filterJokeSchema = Joi.object({
    type: Joi.required(),
});

const jokeSchema = Joi.object({
    id: Joi.number().integer().min(1),
    joke_text: Joi.string(),
    joke_type: Joi.string(),
});


const validateFilterParams = (req, res, next) => {
    const validationResult = filterJokeSchema.validate(req.query);
    if (validationResult.error) {
        return res.status(422).json({ error: validationResult.error.details });
    }
    next();
};

const validateJoke = (req, res, next) => {
    const validationResult = jokeSchema.validate(req.body);
    if (validationResult.error) {
        return res.status(422).json({ error_message:validationResult.error.details[0].message,data:req.body,success:false});
    }
    next();
};

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    if (err.name === 'ValidationError') {
        return res.status(422).json({ error_message:err.details[0].message,data:req.body,success:false});
    }

    res.status(500).json({ error: 'Internal Server Error' });
    next();
};
export {
    validateJoke,
    validateFilterParams,
    errorHandler
};