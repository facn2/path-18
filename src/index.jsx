import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './router.jsx';
import App from './containers/app.jsx';
import Style from '../public/style.css';
import storeConfigure from './store.config';

const store = storeConfigure();

ReactDOM.render(
  <Provider store={ store }>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
