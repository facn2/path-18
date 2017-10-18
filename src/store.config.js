import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import reducers from './reducers/index';
import careerImg from './../public/images/example.gif';


const store = createStore(
  reducers, undefined, compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);

persistStore(store);

export default store;
