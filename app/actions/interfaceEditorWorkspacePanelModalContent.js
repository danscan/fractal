export const SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT = 'SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT';
export function setInterfaceEditorWorkspacePanelModalContent(modalContent) {
  return {
    type: SET_INTERFACE_EDITOR_WORKSPACE_PANEL_MODAL_CONTENT,
    modalContent,
  };
}
