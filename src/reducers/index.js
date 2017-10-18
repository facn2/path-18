import { combineReducers } from 'redux';
import persistReducer from './persist.reducer';

const rootReducers = combineReducers({
  careers: persistReducer
});

export default rootReducers;
