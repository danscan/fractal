export const SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED = 'SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED';
export function setInterfaceEditorDirectSelectModeEnabled(directSelectModeEnabled) {
  return {
    type: SET_INTERFACE_EDITOR_DIRECT_SELECT_MODE_ENABLED,
    directSelectModeEnabled,
  };
}
