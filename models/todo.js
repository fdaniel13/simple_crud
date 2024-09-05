import mongoose from 'mongoose';

const Todo = new mongoose.model("Todos",{
  description:  String,
});


export default Todo;
