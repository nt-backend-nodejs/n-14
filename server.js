import express from "express";

const app = express();
const port = 5000;
const todos = [];

app.use(express.json());

app.post("/todo", (req, res) => {
  const body = req.body;
  const todo = { ...body, id: todos.length + 1 };
  todos.push(todo);
  res.send(todo);
});

app.get("/todo", (req, res) => {
  const querty = req.query
  console.log(querty);
  
  res.send(todos);
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.filter((todo) => todo.id === +id);
  res.send(todo);
});




app.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const todoIndex = todos.findIndex((todo) => todo.id === +id);
  const todo = todos.filter((todo) => todo.id === +id);

  todos.splice(todoIndex, 1, { ...todo[0], ...body });
  res.send(todos);
});

app.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === +id);
  todos.splice(todoIndex, 1);

  res.send(todos);
});

app.listen(port, () => {
  console.log("Server running on port : http://localhost:5000");
});
