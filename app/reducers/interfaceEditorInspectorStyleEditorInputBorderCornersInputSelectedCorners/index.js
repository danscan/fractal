import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_CORNERS_INPUT_SELECTED_CORNERS } from '../../actions/interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners';
import { List } from 'immutable';

export const initialState = new List;

export default function interfaceEditorInspectorStyleEditorInputBorderCornersInputSelectedCorners(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_CORNERS_INPUT_SELECTED_CORNERS:
      return action.selectedCorners;
    default:
      return state;
  }
}
