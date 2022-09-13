import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './admin/login';
import Home from './pages/home';
import Cadastrar from './admin/cadastrar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cadastrar/>
  </React.StrictMode>
);

