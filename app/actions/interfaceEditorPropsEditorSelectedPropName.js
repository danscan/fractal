export const SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME = 'SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME';

export function setInterfaceEditorPropsEditorSelectedPropName(propName) {
  return {
    type: SET_INTERFACE_EDITOR_PROPS_EDITOR_SELECTED_PROP_NAME,
    propName,
  };
}
