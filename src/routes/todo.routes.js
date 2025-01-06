import { Router } from "express";
import {
  createTodoController,
  getAllTodoController,
  getOneTodoController,
  updateTodoController,
  deleteTodoController,
} from "../controllers/todo.controllers.js";

export const todoRoutes = Router();

todoRoutes.post("/", createTodoController);
todoRoutes.get("/", getAllTodoController);
todoRoutes.get("/:id", getOneTodoController);
todoRoutes.put("/:id", updateTodoController);
todoRoutes.delete("/:id", deleteTodoController);

// //GET ALL TODO
// router.get("/");
// //GET ONE TODO
// router.get("/:id");
// //CREATE TODO
// router.post("/");
// //UPDATE TODO
// router.put("/:id");
// //DELETE TODO
// router.delete("/:id");
