import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES } from '../../actions/interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides';
import { boxSides } from '../../vendor/pro-inputs/src';

export const initialState = boxSides.ALL_SIDES;

export default function interfaceEditorInspectorStyleEditorInputPaddingInputSelectedSides(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES:
      return action.selectedSides;
    default:
      return state;
  }
}
