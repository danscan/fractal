import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP } from '../../actions/interfaceEditorInspectorStyleEditorSelectedProp';

export const initialState = 'style';

export default function interfaceEditorInspectorStyleEditorSelectedProp(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_SELECTED_PROP:
      return action.selectedProp;
    default:
      return state;
  }
}
