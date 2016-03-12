import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES } from '../../actions/interfaceEditorInspectorStyleEditorSelectedSizeClasses';
import { List } from 'immutable';

export const initialState = new List;

export default function interfaceEditorInspectorStyleEditorSelectedSizeClasses(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES:
      return action.selectedSizeClasses;
    default:
      return state;
  }
}
