import express from 'express';
import { authRouter, orderRouter, productRouter, photoRouter } from './routes/index.js';


const app = express();
const port =  5001;

app.use(express.json());



app.use('/static', express.static('uploads'))
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
app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/photos', photoRouter);


app.listen(port, () => {
  console.log('Server running on port : http://localhost:5001');
});
