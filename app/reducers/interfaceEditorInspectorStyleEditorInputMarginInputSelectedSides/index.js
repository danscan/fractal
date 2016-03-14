import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES } from '../../actions/interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides';

export const initialState = [];

export default function interfaceEditorInspectorStyleEditorInputMarginInputSelectedSides(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_MARGIN_INPUT_SELECTED_SIDES:
      return action.selectedSides;
    default:
      return state;
  }
}
