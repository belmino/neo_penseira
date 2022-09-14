/* eslint-disable import/extensions */
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose'

import data from './data.js';
import config from './config.js';
import userRouter from './routers/userRouter.js';


mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Connected to mongodb.');
  })
  .catch((error) => {
    console.log(error);
    console.log(error.reason);
  });

const app = express();
app.use(cors());

app.use('/api/users', userRouter);
app.get('/api/products', (req, res) => {
  res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found!' });
  }
});

app.listen(5000, () => {
  console.log('serve at http://localhost:5000');
});
