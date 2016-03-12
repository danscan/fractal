export const SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES = 'SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES';
export function setInterfaceEditorInspectorStyleEditorSelectedSizeClasses(selectedSizeClasses) {
  return {
    type: SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_SIZE_CLASSES,
    selectedSizeClasses,
  };
}
