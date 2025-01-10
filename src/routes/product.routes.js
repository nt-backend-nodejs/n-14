import express, { Router } from 'express';
import { productController } from '../controllers/index.js';

export const productRouter = Router();

// CREATE -POST
// localhost:3000/api/products - POST - create new product
productRouter.post('/', productController.create);

// get all products
productRouter.get('/', productController.findAll);

// get  product by id
productRouter.get('/:id', productController.findOne);

// update product by id
productRouter.put('/:id', productController.update);

// delete product by id
productRouter.delete('/:id', productController.delete);
