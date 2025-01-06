import express from 'express';
import { authRouter } from './routes/index.js';
const app = express();
const port = 5000;

app.use(express.json());

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log('Server running on port : http://localhost:5000');
});
