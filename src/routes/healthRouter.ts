/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Request, Response } from 'express';

const healthRouter = express.Router();

healthRouter.get('/', async (req: Request, res: Response) => {
  res.status(200).send('OK');
});

export { healthRouter };