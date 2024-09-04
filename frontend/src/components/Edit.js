import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    endereco: '',
    bairro: '',
    cidade: '',
    estado: ''
  });
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/tarefas/${id}`);
        if (response.ok) {
          const task = await response.json();
          setFormData(task);
        } else {
          console.error('Erro ao buscar a cadastro.');
        }
      } catch (error) {
        console.error('Erro na conexão com o servidor:', error);
      }
    };
    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/tarefas/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Cadastro atualizado com sucesso!');
        navigate('/');
      } else {
        console.error('Erro ao atualizar cadastro.');
      }
    } catch (error) {
      console.error('Erro na conexão com o servidor:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Nome"
            name="nome"
            variant="outlined"
            fullWidth
            required
            value={formData.nome}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Telefone"
            name="telefone"
            variant="outlined"
            fullWidth
            value={formData.telefone}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Endereço"
            name="endereco"
            variant="outlined"
            fullWidth
            value={formData.endereco}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Bairro"
            name="bairro"
            variant="outlined"
            fullWidth
            value={formData.bairro}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Cidade"
            name="cidade"
            variant="outlined"
            fullWidth
            value={formData.cidade}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Estado"
            name="estado"
            variant="outlined"
            fullWidth
            value={formData.estado}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Atualizar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Edit;