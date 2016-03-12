import { SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_COLLAPSED_SECTIONS } from '../../actions/interfaceEditorInspectorStyleEditorInputCollapsedSections';
import { List } from 'immutable';

export const initialState = new List;

export default function interfaceEditorInspectorStyleEditorInputCollapsedSections(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_COLLAPSED_SECTIONS:
      return action.collapsedSections;
    default:
      return state;
  }
}
