import express, { Router } from 'express';
import { orderController } from '../controllers/index.js';

export const orderRouter = Router();

// CREATE -POST
// localhost:3000/api/orders - POST - create new order
orderRouter.post('/', orderController.create);

// get all orders
orderRouter.get('/', orderController.findAll);

// get  order by id
orderRouter.get('/:id', orderController.findOne);

// update order by id
orderRouter.put('/:id', orderController.update);

// delete order by id
orderRouter.delete('/:id', orderController.delete);
