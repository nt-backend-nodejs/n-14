import express from "express";
import { config } from "./config";
import { setUpRouter } from "./routers";

const app = express();

const PORT = config.app.port || 4000;

app.use(express.json());

//ROUTER
app.use("/setup", setUpRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
