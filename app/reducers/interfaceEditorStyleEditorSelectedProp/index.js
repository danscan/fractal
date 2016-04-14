import { SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP } from '../../actions/interfaceEditorStyleEditorSelectedProp';

export const initialState = 'style';

export default function interfaceEditorStyleEditorSelectedProp(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP:
      return action.selectedProp;
    default:
      return state;
  }
}
