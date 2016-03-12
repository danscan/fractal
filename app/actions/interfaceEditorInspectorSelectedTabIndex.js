export const SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX = 'SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX';
export function setInterfaceEditorInspectorSelectedTabIndex(selectedTabIndex) {
  return {
    type: SET_INTERFACE_EDITOR_INSPECTOR_SELECTED_TAB_INDEX,
    selectedTabIndex,
  };
}
