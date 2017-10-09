import { combineReducers } from 'redux';
import DataReducer from './data.reducer';

const rootReducers = combineReducers({
  data: DataReducer
});

export default rootReducers;
