import { combineReducers } from 'redux';
import undoable from 'redux-undo';

// (App reducers)
import editorModalRouteStack from './editorModalRouteStack';
import preview from './preview';
import selectedElementPath from './selectedElementPath';
import tree from './tree';

const reducer = undoable(combineReducers({
  editorModalRouteStack,
  preview,
  selectedElementPath,
  tree,
}));

export default reducer;
