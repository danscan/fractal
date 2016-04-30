import { SET_INTERFACE_EDITOR_STYLE_SHEET_EDITOR_SELECTED_STYLE_NAME } from '../../actions/interfaceEditorStyleSheetEditorSelectedStyleName';

export const initialState = 'container';

export default function interfaceEditorStyleSheetEditorSelectedStyleName(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_STYLE_SHEET_EDITOR_SELECTED_STYLE_NAME:
      return action.styleName;
    default:
      return state;
  }
}
