import {
  SHOW_ADD_ELEMENT_MODAL,
  HIDE_ADD_ELEMENT_MODAL,
  SET_SELECTED_ELEMENT_PATH,
  RESET_SELECTED_ELEMENT_PATH,
} from '../../constants/actionTypes';
import initialState from './initialState';

// (Action reducer functions)
import reduceShowAddElementModal from './reduceShowAddElementModal';
import reduceHideAddElementModal from './reduceHideAddElementModal';
import reduceSetSelectedElementPath from './reduceSetSelectedElementPath';
import reduceResetSelectedElementPath from './reduceResetSelectedElementPath';

export default function interfaceEditor(state = initialState, action) {
  switch (action.type) {
    case SHOW_ADD_ELEMENT_MODAL:
      return reduceShowAddElementModal(state);
    case HIDE_ADD_ELEMENT_MODAL:
      return reduceHideAddElementModal(state);
    case SET_SELECTED_ELEMENT_PATH:
      return reduceSetSelectedElementPath(state, action);
    case RESET_SELECTED_ELEMENT_PATH:
      return reduceResetSelectedElementPath(state);
    default:
      return state;
  }
}
