import { createStore } from 'redux';
import reducers from './reducers/index';

const storeConfigure = () => {
  const initialStore = {};

  const store = createStore(reducers, initialStore);

  return store;
};

export default storeConfigure;
