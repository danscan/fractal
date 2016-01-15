import { combineReducers } from 'redux';
import undoable from 'redux-undo';

// (App reducers)
import editorModalRouteStack from './editorModalRouteStack';
import preview from './preview';
import tree from './tree';

const reducer = undoable(combineReducers({
  editorModalRouteStack,
  preview,
  tree,
}));

export default reducer;
