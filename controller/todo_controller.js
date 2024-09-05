import Todo from '../models/todo.js';

const createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = Todo({description:description});
    await newTodo.save();
    res.json(newTodo);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Erro ao criar o ToDo.' });
  }
};

const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'ToDo ao buscar os todos.' });
  }
};

const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    res.json(todo);
   
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Erro ao buscar o ToDo.' });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { description:description }, { new: true });
    res.json(updatedTodo);
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Erro ao atualizar o ToDo.' });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Todo.findByIdAndDelete(id);
    res.json({ success: deleted ? 'ToDo deletado.' : 'ToDo não encontrado.' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Erro ao deletar o ToDo.' });
  }
};

export default  {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
};
