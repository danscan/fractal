export const SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP = 'SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP';
export function setInterfaceEditorInspectorStyleEditorSelectedProp(selectedProp) {
  return {
    type: SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP,
    selectedProp,
  };
}
