import { createStore, applyMiddleware } from 'redux';

import reducer from '../reducers';
import middleware from './middleware';

// Compose createStore in applyMiddleware w/ middleware...
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

// Given initialState, return a single store for Provider...
export default function getStore(initialState = {}) {
  const store = createStoreWithMiddleware(reducer, initialState);

  return store;
}
