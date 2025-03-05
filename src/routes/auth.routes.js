import { Router } from "express";
import { authController } from "../controllers/index.js";
import { validateData } from "../middlewares/validationMiddleware.js";
import { signUpSchema } from "../validations/auth.validation.js";

export const authRouter = Router();

authRouter.post("/signup", validateData(signUpSchema), authController.signup);
authRouter.post("/signin", authController.signin);
authRouter.get("/profile", authController.profile);
