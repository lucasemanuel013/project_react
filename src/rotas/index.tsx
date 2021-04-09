import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Detalhes } from '../paginas/Detalhes';
import { Principal } from '../paginas/Principal';

export const Rotas: React.FC = ({ children }) => {
  return (
    <Switch>
      <Route component={Principal} path="/" exact />
      <Route component={Detalhes} path="/detalhes/:id" exact />
    </Switch>
  );
};
