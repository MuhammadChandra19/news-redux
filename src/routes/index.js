import React  from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ROUTES } from './routes'
import { routeFactory } from '../utils/routes/routes.factory'

export const ApplicationRouting = (
  <Router>
    <Switch>
      {routeFactory(ROUTES)}
    </Switch>
  </Router>
);
