import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_SIDES_INPUT_SELECTED_SIDES } from '../../actions/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';
import { boxSides } from '../../vendor/pro-inputs/src';

export const initialState = boxSides.ALL_SIDES;

export default function interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_SIDES_INPUT_SELECTED_SIDES:
      return action.selectedSides;
    default:
      return state;
  }
}
