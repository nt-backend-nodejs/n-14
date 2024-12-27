const todos = [];

export const createTodoController = (req, res) => {
  const body = req.body;
  const todo = { ...body, id: todos.length + 1 };
  todos.push(todo);
  res.send(todo);
};

export const getAllTodoController = (req, res) => {
  const querty = req.query;
  console.log(querty);
  res.send(todos);
};

export const getOneTodoController = (req, res) => {
  const { id } = req.params;
  const todo = todos.filter((todo) => todo.id === +id);
  res.send(todo);
};

export const updateTodoController = (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const todoIndex = todos.findIndex((todo) => todo.id === +id);
  const todo = todos.filter((todo) => todo.id === +id);

  todos.splice(todoIndex, 1, { ...todo[0], ...body });
  res.send(todos);
};

export const deleteTodoController = (req, res) => {
  const { id } = req.params;
  const todoIndex = todos.findIndex((todo) => todo.id === +id);
  todos.splice(todoIndex, 1);

  res.send(todos);
};
