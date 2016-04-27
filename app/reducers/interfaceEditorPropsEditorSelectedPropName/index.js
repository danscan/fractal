import { SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME } from '../../actions/interfaceEditorPropsEditorSelectedPropName';

export const initialState = null;

export default function interfaceEditorPropsEditorSelectedPropName(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME:
      return action.propName;
    default:
      return state;
  }
}
