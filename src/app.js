import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/jokesRoutes.js';

const app = express();

app.use(bodyParser.json({ extended: true }));

app.use('/jokes', router);

export default app;
