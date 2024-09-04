const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: false
  },
  endereco: {
    type: String,
    required: false
  },
  bairro: {
    type: String,
    required: false
  },
  cidade: {
    type: String,
    required: false
  },
  estado: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Task', TaskSchema);