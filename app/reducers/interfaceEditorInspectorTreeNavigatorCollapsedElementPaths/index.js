import {
  SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_COLLAPSED_SECTIONS,
  TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT,
} from '../../actions/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import { Set } from 'immutable';

export const initialState = new Set;

export default function interfaceEditorInspectorTreeNavigatorCollapsedElementPaths(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_STYLE_EDITOR_INPUT_COLLAPSED_SECTIONS:
      return action.collapsedSections;

    case TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT:
      return state.has(action.elementPath)
        ? state.delete(action.elementPath)
        : state.add(action.elementPath);
    default:
      return state;
  }
}
