import { combineReducers } from 'redux';
import DataReducer from './data.reducer';
import persistReducer from './persist.reducer';

const rootReducers = combineReducers({
  careers: persistReducer
});

export default rootReducers;
