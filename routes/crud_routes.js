import todoController from '../controller/todo_controller.js';
import express from 'express';


const router = express.Router();



router.post('/todos', todoController.createTodo);
router.get('/todos', todoController.getTodos);
router.get('/todos/:id', todoController.getTodoById);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);
  
 export default router;