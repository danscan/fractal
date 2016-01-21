import { combineReducers } from 'redux';

// (App reducers)
import fullScreenPreview from './fullScreenPreview';
import inspector from './inspector';
import tree from './tree';

const reducer = combineReducers({
  fullScreenPreview,
  inspector,
  tree,
});

export default reducer;
