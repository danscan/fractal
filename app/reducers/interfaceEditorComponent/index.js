import undoable from 'redux-undo';
import {
  UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
} from '../../actions/interfaceEditorComponent';
import {
  ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
  APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
} from '../../actions/interfaceEditorComponentElement';
import {
  SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  ADD_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  DELETE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  DUPLICATE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
} from '../../actions/interfaceEditorComponentStyleSheet';
import interfaceEditorComponentElement from '../interfaceEditorComponentElement';
import interfaceEditorComponentStyleSheet from '../interfaceEditorComponentStyleSheet';

const initialState = interfaceEditorComponent({}, {});

function interfaceEditorComponent(state = initialState, action) {
  return {
    element: interfaceEditorComponentElement(state.element, action),
    styleSheet: interfaceEditorComponentStyleSheet(state.styleSheet, action),
  };
}

export default undoable(interfaceEditorComponent, {
  redoType: REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  undoType: UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,

  filter: filterUndoableActionTypes,
});

// Filter undoable action types
function filterUndoableActionTypes(action) {
  const undoableActionTypes = [
    // interfaceEditorComponentElement actions
    ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
    REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
    CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
    APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
    REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,

    // interfaceEditorComponentStyleSheet actions
    SET_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    ADD_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    DELETE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
    DUPLICATE_INTERFACE_EDITOR_COMPONENT_STYLE_SHEET_STYLE,
  ];


  return undoableActionTypes.indexOf(action.type) >= 0;
}
