import * as asyncInitialState from 'redux-async-initial-state';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { autoRehydrate, persistStore } from 'redux-persist';
import reducers from './reducers/index';
//
// configureStore() {
//   createStore(
//     reducers, applyMiddleware(thunk)
//   );
// }

const store = createStore(
  reducers, undefined, compose(
    applyMiddleware(thunk, logger),
    autoRehydrate()
  )
);

persistStore(store);

// const reducer = asyncInitialState.outerReducer(reducers({
//   ...reducers, asyncInitialState: asyncInitialState.innerReducer
// }));
//
// const loadStore = () => new Promise((resolve) => {
//   axios.get('/api/careers')
//     .then(resolve);
// });
//
//
// const store = createStore(
//   reducer,
//   compose(applyMiddleware(asyncInitialState.middleware(loadStore)))
// );
//
// export default store;

export default store;
