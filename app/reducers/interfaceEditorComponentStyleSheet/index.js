import {
  SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  ADD_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  DELETE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  DUPLICATE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
} from '../../actions/interfaceEditorComponentStyleSheet';

import initialState from './initialState';

export default function interfaceEditorComponentStyleSheet(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE:
      return state.set(action.styleName, action.styleValue);
    case ADD_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE:
      return state.set(action.styleName);
    case DELETE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE:
      return state.delete(action.styleName);
    case DUPLICATE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE:
      const styleValue = state.get(action.styleName);
      return state.set(action.newStyleName, styleValue);
    default:
      return state;
  }
}
