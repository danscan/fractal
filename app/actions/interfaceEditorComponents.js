export const ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD = 'ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD';
export const REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT = 'REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT';
export const DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT = 'DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT';
export const MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT = 'MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT';
export const CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME = 'CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME';
export const APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP = 'APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP';
export const REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP = 'REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP';
export const UNDO_INTERFACE_EDITOR_COMPONENT_ACTION = 'UNDO_INTERFACE_EDITOR_COMPONENT_ACTION';
export const REDO_INTERFACE_EDITOR_COMPONENT_ACTION = 'REDO_INTERFACE_EDITOR_COMPONENT_ACTION';

export function addInterfaceEditorComponentElementChild(componentKey, elementPath, child) {
  return {
    type: ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
    componentKey,
    elementPath,
    child,
  };
}

export function removeInterfaceEditorComponentElement(componentKey, elementPath) {
  return {
    type: REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    componentKey,
    elementPath,
  };
}

export function duplicateInterfaceEditorComponentElement(componentKey, elementPath) {
  return {
    type: DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    componentKey,
    elementPath,
  };
}

export function moveInterfaceEditorComponentElement(componentKey, elementPath, desiredParentElementPath) {
  return {
    type: MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    componentKey,
    elementPath,
    desiredParentElementPath,
  };
}

export function changeInterfaceEditorComponentElementDisplayName(componentKey, elementPath, newDisplayName) {
  return {
    type: CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
    componentKey,
    elementPath,
    newDisplayName,
  };
}

export function applyInterfaceEditorComponentElementProp(componentKey, elementPath, propName, propValue) {
  return {
    type: APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
    componentKey,
    elementPath,
    propName,
    propValue,
  };
}

export function removeInterfaceEditorComponentElementProp(componentKey, elementPath, propName) {
  return {
    type: REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
    componentKey,
    elementPath,
    propName,
  };
}

export function undoInterfaceEditorComponentAction(componentKey) {
  return {
    type: UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
    componentKey,
  };
}

export function redoInterfaceEditorComponentAction(componentKey) {
  return {
    type: REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
    componentKey,
  };
}
