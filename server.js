import router from './routes/crud_routes.js';
import  connectDB  from './config/database.js';
import express from 'express';

const app = express();  

const port = 8080;

connectDB();

//adiciona os middleware
app.use(express.json());

app.use('/api/',router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
