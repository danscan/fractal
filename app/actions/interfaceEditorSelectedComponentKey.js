export const SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY = 'SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY';

export function setInterfaceEditorSelectedComponentKey(selectedComponentKey) {
  return {
    type: SET_INTERFACE_EDITOR_SELECTED_COMPONENT_KEY,
    selectedComponentKey,
  };
}
