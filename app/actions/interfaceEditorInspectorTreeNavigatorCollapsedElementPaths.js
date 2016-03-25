export const SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS = 'SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS';
export const TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT = 'TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT';

export function setInterfaceEditorInspectorTreeNavigatorCollapsedElementPaths(collapsedElementPaths) {
  return {
    type: SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS,
    collapsedElementPaths,
  };
}

export function toggleInterfaceEditorInspectorTreeNavigatorElementCollapsed(elementPath) {
  return {
    type: TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT,
    elementPath,
  };
}
