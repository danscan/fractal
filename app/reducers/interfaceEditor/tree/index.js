import {
  ADD_ELEMENT_CHILD,
  REMOVE_ELEMENT,
  DUPLICATE_ELEMENT,
  MOVE_ELEMENT,
  CHANGE_ELEMENT_DISPLAY_NAME,
  APPLY_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
  REDO_TREE_ACTION,
  UNDO_TREE_ACTION,
} from '../../../constants/actionTypes';
import undoable from 'redux-undo';
import initialState from './initialState';

// (Action reducer functions)
import reduceAddElementChild from './reduceAddElementChild';
import reduceRemoveElement from './reduceRemoveElement';
import reduceDuplicateElement from './reduceDuplicateElement';
import reduceMoveElement from './reduceMoveElement';
import reduceChangeElementDisplayName from './reduceChangeElementDisplayName';
import reduceApplyElementProp from './reduceApplyElementProp';
import reduceRemoveElementProp from './reduceRemoveElementProp';

// Filter undoable action types
function filterUndoableActionTypes(action) {
  const undoableActionTypes = [
    ADD_ELEMENT_CHILD,
    REMOVE_ELEMENT,
    DUPLICATE_ELEMENT,
    MOVE_ELEMENT,
    CHANGE_ELEMENT_DISPLAY_NAME,
    APPLY_ELEMENT_PROP,
    REMOVE_ELEMENT_PROP,
  ];

  return undoableActionTypes.indexOf(action.type) >= 0;
}

export default undoable(function tree(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT_CHILD:
      return reduceAddElementChild(state, action);
    case REMOVE_ELEMENT:
      return reduceRemoveElement(state, action);
    case MOVE_ELEMENT:
      return reduceMoveElement(state, action);
    case DUPLICATE_ELEMENT:
      return reduceDuplicateElement(state, action);
    case CHANGE_ELEMENT_DISPLAY_NAME:
      return reduceChangeElementDisplayName(state, action);
    case APPLY_ELEMENT_PROP:
      return reduceApplyElementProp(state, action);
    case REMOVE_ELEMENT_PROP:
      return reduceRemoveElementProp(state, action);
    default:
      return state;
  }
}, {
  redoType: REDO_TREE_ACTION,
  undoType: UNDO_TREE_ACTION,

  filter: filterUndoableActionTypes,
});
