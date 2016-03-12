import { SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED } from '../../actions/interfaceEditorDirectSelectModeEnabled';

export const initialState = false;

export default function interfaceEditorDirectSelectModeEnabled(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED:
      return action.directSelectModeEnabled;
    default:
      return state;
  }
}
