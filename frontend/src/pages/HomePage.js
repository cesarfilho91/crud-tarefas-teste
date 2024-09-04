import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import Form from '../components/Form';
import List from '../components/List';

const HomePage = () => {
  const [tasksUpdated, setTasksUpdated] = useState(false);

  return (
    <div>
      <Container>
      <Typography variant="h4" gutterBottom>
        Novo Cadastro
      </Typography>
      <Form setTasksUpdated={setTasksUpdated} />
      <br/>
      <hr/>
      <br/>
      <Typography variant="h5" gutterBottom>
        Usuários Cadastros
      </Typography>
      <List tasksUpdated={tasksUpdated} />
    </Container>
    </div>
  );
};

export default HomePage;