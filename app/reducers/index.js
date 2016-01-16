import { combineReducers } from 'redux';
import undoable from 'redux-undo';

// (App reducers)
import editorModalRouteStack from './editorModalRouteStack';
import preview from './preview';
import selectedElementPath from './selectedElementPath';
import tree from './tree';

// Filter actions that should be undoable
import * as actionTypes from '../constants/actionTypes';
function filterUndoableActions(action) {
  const actionsToOmitFromUndoableHistory = [
    actionTypes.BEGIN_PREVIEW,
    actionTypes.END_PREVIEW,
    actionTypes.PUSH_SELECTED_ELEMENT_PATH,
    actionTypes.POP_SELECTED_ELEMENT_PATH,
    actionTypes.REPLACE_SELECTED_ELEMENT_PATH,
  ];

  return actionsToOmitFromUndoableHistory.indexOf(action.type) < 0;
}

const reducer = undoable(combineReducers({
  editorModalRouteStack,
  preview,
  selectedElementPath,
  tree,
}), {
  filter: filterUndoableActions,
});

export default reducer;
