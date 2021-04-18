import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard/index';
import Repository from '../pages/Repository/index'

//switch é responsável por fazer que apenas uma rota seja exibida
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
