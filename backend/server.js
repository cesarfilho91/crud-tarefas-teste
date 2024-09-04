const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/task');

app.use(cors());
app.use(express.json()); 

app.use('/api/tarefas', taskRoutes);

mongoose.connect('mongodb://localhost/redizz_db', { });

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});