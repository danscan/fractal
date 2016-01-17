import { combineReducers } from 'redux';
import undoable from 'redux-undo';

// (App reducers)
import editorModalRouteStack from './editorModalRouteStack';
import fullScreenPreview from './fullScreenPreview';
import inspectorTreePath from './inspectorTreePath';
import tree from './tree';

// Filter actions that should be undoable
import * as actionTypes from '../constants/actionTypes';
function filterUndoableActions(action) {
  const actionsToOmitFromUndoableHistory = [
    actionTypes.BEGIN_FULL_SCREEN_PREVIEW,
    actionTypes.END_FULL_SCREEN_PREVIEW,
    actionTypes.PUSH_INSPECTOR_TREE_PATH,
    actionTypes.POP_INSPECTOR_TREE_PATH,
    actionTypes.REPLACE_INSPECTOR_TREE_PATH,
  ];

  return actionsToOmitFromUndoableHistory.indexOf(action.type) < 0;
}

const reducer = undoable(combineReducers({
  editorModalRouteStack,
  fullScreenPreview,
  inspectorTreePath,
  tree,
}), {
  filter: filterUndoableActions,
});

export default reducer;
