import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES } from '../../actions/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';

export const initialState = [];

export default function interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES:
      return action.selectedSides;
    default:
      return state;
  }
}
