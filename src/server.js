import express from 'express';
import { authRouter } from './routes/index.js';
const app = express();
const port = 5000;

app.use(express.json());

app.use((req, res, next) => {
  console.time('middleware');
  console.log({
    method: req.method,
    url: req.url,
  });

  next();
  console.timeEnd('middleware');
});

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log('Server running on port : http://localhost:5000');
});
