import {
  SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS,
  TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT,
} from '../../actions/interfaceEditorInspectorTreeNavigatorCollapsedElementPaths';
import { Set } from 'immutable';

export const initialState = new Set;

export default function interfaceEditorInspectorTreeNavigatorCollapsedElementPaths(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_COLLAPSED_ELEMENT_PATHS:
      return action.collapsedElementPaths;

    case TOGGLE_INTERFACE_EDITOR_INSPECTOR_TREE_NAVIGATOR_ELEMENT:
      return state.has(action.elementPath)
        ? state.delete(action.elementPath)
        : state.add(action.elementPath);
    default:
      return state;
  }
}
