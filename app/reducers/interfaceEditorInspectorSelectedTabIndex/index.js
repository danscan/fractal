import { SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX } from '../../actions/interfaceEditorInspectorSelectedTabIndex';

export const initialState = 0;

export default function interfaceEditorInspectorSelectedTabIndex(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX:
      return action.selectedTabIndex;
    default:
      return state;
  }
}
