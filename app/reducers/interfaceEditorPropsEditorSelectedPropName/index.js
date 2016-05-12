import { SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME } from '../../actions/interfaceEditorPropsEditorSelectedPropName';
import {
  APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
  REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP,
} from '../../actions/interfaceEditorComponentElement';

export const initialState = null;

export default function interfaceEditorPropsEditorSelectedPropName(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME:
    case APPLY_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP:
    case DUPLICATE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP:
      return action.propName;
    case REMOVE_INTERFACE_EDITOR_COMPONENT_ELEMENT_PROP:
      return initialState;
    default:
      return state;
  }
}
