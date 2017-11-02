import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Welcome from './containers/welcome.jsx';
import Career from './containers/career.jsx';
import Detail from './containers/detail.jsx';
import List from './containers/list.jsx';
import Help from './components/help.jsx';
import Admin from './components/admin.jsx';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Welcome} />
      <Route path='/career' exact component={Career} />
      <Route path='/career/:title' exact component={Detail} />
      <Route path='/list' exact component={List} />
      <Route path='/help' exact component={Help} />
      <Route path='/admin' exact component={Admin} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
