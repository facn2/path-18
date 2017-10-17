import * as asyncInitialState from 'redux-async-initial-state';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import reducers from './reducers/index';

const store = createStore(
  reducers, undefined, compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);

persistStore(store);

export default store;
