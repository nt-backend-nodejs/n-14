import { Router } from "express";
import { productController } from "../controllers/index.js";
export const productRoutes = Router();

// GET ALL PRODUCTS
productRoutes.get("/", productController.getAll);

// GET ONE PRODUCT
productRoutes.get("/:id", productController.getOne);

// CREATE PRODUCT
productRoutes.post("/", productController.create);

// UPDATE PRODUCT
productRoutes.put("/:id", productController.update);

// DELETE PRODUCT
productRoutes.delete("/:id", productController.delete);
