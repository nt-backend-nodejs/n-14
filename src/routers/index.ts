import { Request, Response, Router } from "express";
import { setUpRouter } from "./setup";

export const appRouter = Router();

appRouter.use("/setup", setUpRouter);
appRouter.use((req: Request, res: Response) => {
  res.status(404).json({ message: "Not found" });
});
