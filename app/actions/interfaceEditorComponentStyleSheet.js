export const SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE = 'SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE';

export function setInterfaceEditorComponentStyleSheetStyle(styleName, styleValue) {
  return {
    type: SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    styleName,
    styleValue,
  };
}
