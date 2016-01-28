import { combineReducers } from 'redux';

// (App reducers)
import inspector from './inspector';
import editor from './editor';
import tree from './tree';
import workspace from './workspace';

const reducer = combineReducers({
  inspector,
  editor,
  tree,
  workspace,
});

export default reducer;
