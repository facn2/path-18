import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './containers/welcome.jsx';
import Career from './containers/career.jsx';
import CareerDetails from './containers/career_details.jsx';
import List from './containers/list.jsx';
import Info from './components/help.jsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/career' exact component={Career} />
      <Route path='/career/:title' exact component={CareerDetails} />
      <Route path='/list' exact component={List} />
      <Route path='/info' exact component={Info} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
