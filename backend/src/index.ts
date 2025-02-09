import express, { Request, Response } from 'express';
import mongoose from 'mongodb';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('hello mom and dad');
});
app.listen(process.env.PORT);

