import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

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
