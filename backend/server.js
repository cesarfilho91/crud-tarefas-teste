const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/task');

app.use(cors({
  origin: '*',
}));

app.use(express.json());

const mongoURI = 'mongodb://mongo:NUwGKyDrZguPCEQwzjcgZffFGtDnvOqK@autorack.proxy.rlwy.net:44944';

mongoose.connect(mongoURI, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use('/api/tarefas', taskRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
