const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const taskRoutes = require('./routes/task');

app.use(cors({
  origin: 'https://crud-tarefas-teste.vercel.app',
}));

app.use(express.json());

app.use('/api/tarefas', taskRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(error => console.error('Erro ao conectar ao MongoDB:', error));