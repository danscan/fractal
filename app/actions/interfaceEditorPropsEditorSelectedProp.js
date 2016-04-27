export const SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP = 'SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP';

export function setInterfaceEditorPropsEditorSelectedProp(selectedProp) {
  return {
    type: SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP,
    selectedProp,
  };
}
