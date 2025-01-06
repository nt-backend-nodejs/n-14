import express from "express";
import { todoRoutes, productRoutes, userRoutes } from "./routes/index.js";
const app = express();
const port = 5000;

app.use(express.json());

app.use("/todo", todoRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("Server running on port : http://localhost:5000");
});
