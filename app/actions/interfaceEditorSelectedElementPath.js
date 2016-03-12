export const SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH = 'SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH';

export function setInterfaceEditorSelectedElementPath(selectedElementPath) {
  return {
    type: SET_INTERFACE_EDITOR_SELECTED_ELEMENT_PATH,
    selectedElementPath,
  };
}
