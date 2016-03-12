import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
import middleware from './middleware';

// Compose createStore in applyMiddleware w/ middleware...
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

// Given initialState, return a single store for Provider...
export default function getStore(initialState = {}) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
