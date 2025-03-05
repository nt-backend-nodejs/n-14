import { Router } from "express";
import { authController } from "../controllers/index.js";

export const authRouter = Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/signin", authController.signin);
authRouter.get("/profile", authController.profile);
