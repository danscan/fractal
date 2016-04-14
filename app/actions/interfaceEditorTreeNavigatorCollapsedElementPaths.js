export const SET_INTERFACE_EDITOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS = 'SET_INTERFACE_EDITOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS';
export const TOGGLE_INTERFACE_EDITOR_TREE_NAVIGATOR_ELEMENT = 'TOGGLE_INTERFACE_EDITOR_TREE_NAVIGATOR_ELEMENT';

export function setInterfaceEditorTreeNavigatorCollapsedElementPaths(collapsedElementPaths) {
  return {
    type: SET_INTERFACE_EDITOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS,
    collapsedElementPaths,
  };
}

export function toggleInterfaceEditorTreeNavigatorElementCollapsed(elementPath) {
  return {
    type: TOGGLE_INTERFACE_EDITOR_TREE_NAVIGATOR_ELEMENT,
    elementPath,
  };
}
