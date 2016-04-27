import { SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP } from '../../actions/interfaceEditorPropsEditorSelectedProp';

export const initialState = null;

export default function interfaceEditorPropsEditorSelectedProp(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP:
      return action.selectedProp;
    default:
      return state;
  }
}
