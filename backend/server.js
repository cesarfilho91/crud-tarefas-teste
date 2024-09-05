const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/task');
require('dotenv').config();

app.use(cors({
  origin: '*',
}));

app.use(express.json());

app.use('/api/tarefas', taskRoutes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});