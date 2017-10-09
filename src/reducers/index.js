import { combineReducers } from 'redux';
import DataReducer from './data.reducer';

const rootReducers = combineReducers({
  careers: DataReducer
});

export default rootReducers;
