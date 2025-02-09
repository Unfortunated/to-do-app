import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose, { mongo } from 'mongoose';
import Deck from './model/task';
import TaskModel from './model/task';

dotenv.config();
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello mom and dad');
});



mongoose.connect(process.env.MONGO_URI as string).then(() => {
  console.log(`listening on port ${process.env.PORT}`);
  app.listen(process.env.PORT);
});
