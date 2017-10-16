import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import careerImg from './../public/images/imageedit_1_3201666448.gif';

const options = {
  endpoint: 'http://localhost:9876/api/careers'
};

export default function configureStore() {
  return createStore(
    reducers, applyMiddleware(thunk)
  );
}
