require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/task');

app.use(cors({
  origin: '*', 
}));

app.use(express.json());

const mongoURI = process.env.MONGO_URL;
const NODE_ENV = process.env.NODE_ENV || 'development';

mongoose.connect(mongoURI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use('/api/tarefas', taskRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});