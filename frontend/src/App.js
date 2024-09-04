import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Form from './components/Form';
import List from './components/List';
import EditPage from './pages/EditPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </Router>
  );
};

export default App;