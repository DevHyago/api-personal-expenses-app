import express from 'express';
import 'express-async-errors';
import { router } from './router';
import { middlewareError } from './middlewares/error';

const app = express();
app.use(express.json());
app.use(router);
app.use(middlewareError);

export { app }