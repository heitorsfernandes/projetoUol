import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';
import Provider from './context/Provider';
import ClientsBoard from './pages/ClientsBoard';
import ClientEdit from './pages/ClientEdit';

function App() {
  return (
  <Provider>
    <Switch>
     <Route exact path="/" render={ () => (<Redirect to="/clients" />) } />
      <Route path="/clients" element={ <ClientsBoard /> } />
      <Route path="/client/edit" element={ <ClientEdit /> } />
    </Switch>
  </Provider>
  );
}

export default App;
