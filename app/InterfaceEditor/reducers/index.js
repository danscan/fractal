import { combineReducers } from 'redux';

// (App reducers)
import editor from './editor';
import inspector from './inspector';
import propsEditor from './propsEditor';
import tree from './tree';
import workspace from './workspace';

const reducer = combineReducers({
  editor,
  inspector,
  propsEditor,
  tree,
  workspace,
});

export default reducer;
