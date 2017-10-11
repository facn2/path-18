import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Career from './containers/career.jsx';
import CareerDetails from './containers/career_details.jsx';
import List from './containers/list.jsx';
import Help from './components/help.jsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/career' exact component={Career} />
      <Route path='/career/:title' exact component={CareerDetails} />
      <Route path='/list' exact component={List} />
      <Route path='/help' exact component={Help} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
