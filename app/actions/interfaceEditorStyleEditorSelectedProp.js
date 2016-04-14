export const SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP = 'SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP';

export function setInterfaceEditorStyleEditorSelectedProp(selectedProp) {
  return {
    type: SET_INTERFACE_EDITOR_STYLE_EDITOR_SELECTED_PROP,
    selectedProp,
  };
}
