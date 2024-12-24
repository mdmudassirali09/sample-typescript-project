import express from 'express';
import { json, urlencoded } from 'body-parser';
import cors from 'cors';
import { healthRouter } from './routes/healthRouter';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', healthRouter);

export default app;