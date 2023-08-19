import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import ClientsBoard from './pages/ClientsBoard';
import ClientEdit from './pages/ClientEdit';

function App() {
  return (
  <Switch>
    <Route exact path="/" render={ () => (<Redirect to="/clients" />) } />
    <Route path="/clients" element={ <ClientsBoard /> } />
    <Route path="/client/edit" element={ <ClientEdit /> } />
  </Switch>
  );
}

export default App;
