import { SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY } from '../../actions/interfaceEditorSelectedComponentKey';

export const initialState = null;

export default function interfaceEditorSelectedComponentKey(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY:
      return action.selectedComponentKey;
    default:
      return state;
  }
}
