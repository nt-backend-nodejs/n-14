import { Router } from "express";
import {
  createTodoController,
  getAllTodoController,
  getOneTodoController,
  updateTodoController,
  deleteTodoController,
} from "../controllers/todo.controllers.js";
const router = Router();

router.post("/", createTodoController);
router.get("/", getAllTodoController);
router.get("/:id", getOneTodoController);
router.put("/:id", updateTodoController);
router.delete("/:id", deleteTodoController);

export default router;

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
