import express, { Router } from 'express';
import { photoController } from '../controllers/index.js';

export const orderRouter = Router();

// CREATE -POST
// localhost:3000/api/orders - POST - create new order
orderRouter.post('/', photoController.create);

// get all orders
orderRouter.get('/', photoController.findAll);

// get  order by id
orderRouter.get('/:id', photoController.findOne);

// update order by id
orderRouter.put('/:id', photoController.update);

// delete order by id
orderRouter.delete('/:id', photoController.delete);
