import {
  ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD,
  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT,
  CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME,
  APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  // UNDO_INTERFACE_EDITOR_COMPONENT_ACTION,
  // REDO_INTERFACE_EDITOR_COMPONENT_ACTION,
} from '../../actions/interfaceEditorComponents';

import initialState from './initialState';

import reduceAddInterfaceEditorComponentElementChild from './reduceAddInterfaceEditorComponentElementChild';
import reduceRemoveInterfaceEditorComponentElement from './reduceRemoveInterfaceEditorComponentElement';
import reduceDuplicateInterfaceEditorComponentElement from './reduceDuplicateInterfaceEditorComponentElement';
import reduceMoveInterfaceEditorComponentElement from './reduceMoveInterfaceEditorComponentElement';
import reduceChangeInterfaceEditorComponentElementDisplayName from './reduceChangeInterfaceEditorComponentElementDisplayName';
import reduceApplyInterfaceEditorComponentElementProp from './reduceApplyInterfaceEditorComponentElementProp';
import reduceRemoveInterfaceEditorComponentElementProp from './reduceRemoveInterfaceEditorComponentElementProp';
// import reduceUndoInterfaceEditorComponentAction from './reduceUndoInterfaceEditorComponentAction';
// import reduceRedoInterfaceEditorComponentAction from './reduceRedoInterfaceEditorComponentAction';

export default function interfaceEditorComponents(state = initialState, action) {
  const { componentKey } = action;
  const componentState = state.get(componentKey);

  return state
    .set(componentKey, _reduceActionWithComponentState(componentState, action));
}

// (Private helpers)
function _reduceActionWithComponentState(state, action) {
  switch (action.type) {
    case ADD_INTERFACE_EDITOR_COMPONENT_ELEMENT_CHILD:
      return reduceAddInterfaceEditorComponentElementChild(state, action);
    case REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT:
      return reduceRemoveInterfaceEditorComponentElement(state, action);
    case DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT:
      return reduceDuplicateInterfaceEditorComponentElement(state, action);
    case MOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT:
      return reduceMoveInterfaceEditorComponentElement(state, action);
    case CHANGE_INTERFACE_EDITOR_COMPONENT_ELEMENT_DISPLAY_NAME:
      return reduceChangeInterfaceEditorComponentElementDisplayName(state, action);
    case APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP:
      return reduceApplyInterfaceEditorComponentElementProp(state, action);
    case REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP:
      return reduceRemoveInterfaceEditorComponentElementProp(state, action);
    // case UNDO_INTERFACE_EDITOR_COMPONENT_ACTION:
    //   return reduceUndoInterfaceEditorComponentAction(state, action);
    // case REDO_INTERFACE_EDITOR_COMPONENT_ACTION:
    //   return reduceRedoInterfaceEditorComponentAction(state, action);
    default:
      return state;
  }
}
