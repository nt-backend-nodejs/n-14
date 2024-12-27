import express from "express";
import todoRoutes from "./routes/todo.routes.js";
const app = express();
const port = 5000;

app.use(express.json());
app.use("/todo", todoRoutes);

app.listen(port, () => {
  console.log("Server running on port : http://localhost:5000");
});
