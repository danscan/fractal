export const UNDO_INTERFACE_EDITOR_COMPONENT_ACTION = 'UNDO_INTERFACE_EDITOR_COMPONENT_ACTION';
export const REDO_INTERFACE_EDITOR_COMPONENT_ACTION = 'REDO_INTERFACE_EDITOR_COMPONENT_ACTION';

export function undoInterfaceEditorComponentAction() {
  return {
    type: UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  };
}

export function redoInterfaceEditorComponentAction() {
  return {
    type: REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  };
}
