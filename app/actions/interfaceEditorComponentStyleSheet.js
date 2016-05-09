export const SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE = 'SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE';
export const ADD_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE = 'ADD_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE';
export const DELETE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE = 'DELETE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE';
export const DUPLICATE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE = 'DUPLICATE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE';

export function setInterfaceEditorComponentStyleSheetStyle(styleName, styleValue) {
  return {
    type: SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    styleName,
    styleValue,
  };
}

export function addInterfaceEditorComponentStyleSheetStyle(styleName) {
  return {
    type: ADD_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    styleName,
  };
}

export function deleteInterfaceEditorComponentStyleSheetStyle(styleName) {
  return {
    type: DELETE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    styleName,
  };
}

export function duplicateInterfaceEditorComponentStyleSheetStyle(styleName, newStyleName) {
  return {
    type: DUPLICATE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    styleName,
    newStyleName,
  };
}
