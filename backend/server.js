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

if (!mongoURI) {
  console.error('A variável de ambiente MONGO_URL não está definida.');
  process.exit(1);
}

mongoose.connect(mongoURI, {
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use('/api/tarefas', taskRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});