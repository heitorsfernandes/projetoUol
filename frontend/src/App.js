import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Provider from './context/Provider';
import ClientsBoard from './pages/ClientsBoard';
import ClientEdit from './pages/ClientEdit';

function App() {
  return (
  <Provider>
    <Routes>
      <Route path="/" element={<Navigate to="/clients" replace />} />
      <Route path="/clients" element={ <ClientsBoard /> } />
      <Route path="/client/edit" element={ <ClientEdit /> } />
    </Routes>
  </Provider>
  );
}

export default App;
