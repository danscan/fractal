import { combineReducers } from 'redux';
import undoable from 'redux-undo';

// (App reducers)
import fullScreenPreview from './fullScreenPreview';
import inspector from './inspector';
import tree from './tree';

// Filter actions that should be undoable
import * as actionTypes from '../constants/actionTypes';
function filterUndoableActions(action) {
  const actionsToOmitFromUndoableHistory = [
    actionTypes.BEGIN_FULL_SCREEN_PREVIEW,
    actionTypes.END_FULL_SCREEN_PREVIEW,
    actionTypes.SELECT_ELEMENT_PATH,
  ];

  return actionsToOmitFromUndoableHistory.indexOf(action.type) < 0;
}

const reducer = undoable(combineReducers({
  fullScreenPreview,
  inspector,
  tree,
}), {
  filter: filterUndoableActions,
});

export default reducer;
