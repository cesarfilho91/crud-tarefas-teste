import React from 'react';
import { Container, Typography, IconButton } from '@mui/material';
import Edit from '../components/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <IconButton color="default" onClick={() => navigate('/')} style={{ marginBottom: '1rem' }}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        Editar Cadastro
      </Typography>
      <Edit />
    </Container>
  );
};

export default EditPage;