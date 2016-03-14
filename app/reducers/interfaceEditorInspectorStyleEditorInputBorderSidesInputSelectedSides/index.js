import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_SIDES_INPUT_SELECTED_SIDES } from '../../actions/interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides';

export const initialState = [];

export default function interfaceEditorInspectorStyleEditorInputBorderSidesInputSelectedSides(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_BORDER_SIDES_INPUT_SELECTED_SIDES:
      return action.selectedSides;
    default:
      return state;
  }
}
