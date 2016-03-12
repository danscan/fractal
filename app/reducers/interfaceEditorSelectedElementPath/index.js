import { SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH } from '../../actions/interfaceEditorSelectedElementPath';
import { List } from 'immutable';

export const initialState = new List;

export default function interfaceEditorSelectedElementPath(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH:
      return action.selectedElementPath;
    default:
      return state;
  }
}
