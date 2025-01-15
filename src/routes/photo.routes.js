import express, { Router } from 'express';
import {  photoController } from '../controllers/index.js';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname);
    }
  });

  const upload = multer({ storage: storage })


export const photoRouter = Router();

photoRouter.post('/', upload.single('image'), photoController.create);

photoRouter.get('/', photoController.findAll);

photoRouter.get('/:id', photoController.findOne);

photoRouter.put('/:id', photoController.update);

photoRouter.delete('/:id', photoController.delete);
