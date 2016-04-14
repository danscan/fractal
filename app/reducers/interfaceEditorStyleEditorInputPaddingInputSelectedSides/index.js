import { SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES } from '../../actions/interfaceEditorStyleEditorInputPaddingInputSelectedSides';
import { boxSides } from '../../vendor/pro-inputs/src';

export const initialState = boxSides.ALL_SIDES;

export default function interfaceEditorStyleEditorInputPaddingInputSelectedSides(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_STYLE_EDITOR_INPUT_PADDING_INPUT_SELECTED_SIDES:
      return action.selectedSides;
    default:
      return state;
  }
}
