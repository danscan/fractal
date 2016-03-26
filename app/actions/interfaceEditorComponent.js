export const ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD = 'ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD';
export const REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT = 'REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT';
export const DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT = 'DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT';
export const MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT = 'MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT';
export const CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME = 'CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME';
export const APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP = 'APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP';
export const REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP = 'REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP';
export const UNDO_INTERFACE_EDITOR_COMPONENT_ACTION = 'UNDO_INTERFACE_EDITOR_COMPONENT_ACTION';
export const REDO_INTERFACE_EDITOR_COMPONENT_ACTION = 'REDO_INTERFACE_EDITOR_COMPONENT_ACTION';

export function addInterfaceEditorComponentElementChild(elementPath, child) {
  return {
    type: ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
    elementPath,
    child,
  };
}

export function removeInterfaceEditorComponentElement(elementPath) {
  return {
    type: REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    elementPath,
  };
}

export function duplicateInterfaceEditorComponentElement(elementPath) {
  return {
    type: DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    elementPath,
  };
}

export function moveInterfaceEditorComponentElement(elementPath, desiredParentElementPath) {
  return {
    type: MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    elementPath,
    desiredParentElementPath,
  };
}

export function changeInterfaceEditorComponentElementDisplayName(elementPath, newDisplayName) {
  return {
    type: CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
    elementPath,
    newDisplayName,
  };
}

export function applyInterfaceEditorComponentElementProp(elementPath, propName, propValue) {
  return {
    type: APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
    elementPath,
    propName,
    propValue,
  };
}

export function removeInterfaceEditorComponentElementProp(elementPath, propName) {
  return {
    type: REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
    elementPath,
    propName,
  };
}

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
