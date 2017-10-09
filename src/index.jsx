import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router.jsx';
import Career from './containers/career.jsx';
import Style from '../public/style.css';
import storeConfigure from './store.config';

const store = storeConfigure();

ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
