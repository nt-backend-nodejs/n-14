import express, { Router } from 'express';
import { productController } from '../controllers/index.js';

export const orderRouter = Router();

// CREATE -POST
// localhost:3000/api/orders - POST - create new order
orderRouter.post('/', productController.create);

// get all orders
orderRouter.get('/', productController.findAll);

// get  order by id
orderRouter.get('/:id', productController.findOne);

// update order by id
orderRouter.put('/:id', productController.update);

// delete order by id
orderRouter.delete('/:id', productController.delete);
