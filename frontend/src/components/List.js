import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const List = ({ tasksUpdated }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tarefas');
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        console.error('Erro ao buscar cadastros.');
      }
    } catch (error) {
      console.error('Erro na conexão com o servidor:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tarefas/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(tasks.filter(task => task._id !== id));
      } else {
        console.error('Erro ao deletar cadastro.');
      }
    } catch (error) {
      console.error('Erro na conexão com o servidor:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [tasksUpdated]); 

  if (loading) return <div>Loading...</div>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Endereço</TableCell>
            <TableCell>Bairro</TableCell>
            <TableCell>Cidade</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map(task => (
            <TableRow key={task._id}>
              <TableCell>{task.nome}</TableCell>
              <TableCell>{task.email}</TableCell>
              <TableCell>{task.telefone}</TableCell>
              <TableCell>{task.endereco}</TableCell>
              <TableCell>{task.bairro}</TableCell>
              <TableCell>{task.cidade}</TableCell>
              <TableCell>{task.estado}</TableCell>
              <TableCell>
                <IconButton color="primary" onClick={() => handleEdit(task._id)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(task._id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;