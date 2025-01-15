import express, { Router } from 'express';
import { photoController } from '../controllers/index.js';

export const productRouter = Router();

// CREATE -POST
// localhost:3000/api/products - POST - create new product
productRouter.post('/', photoController.create);

// get all products
productRouter.get('/', photoController.findAll);

// get  product by id
productRouter.get('/:id', photoController.findOne);

// update product by id
productRouter.put('/:id', photoController.update);

// delete product by id
productRouter.delete('/:id', photoController.delete);
