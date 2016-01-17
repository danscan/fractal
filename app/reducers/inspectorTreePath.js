import {
  PUSH_INSPECTOR_TREE_PATH,
  POP_INSPECTOR_TREE_PATH,
  REPLACE_INSPECTOR_TREE_PATH,
} from '../constants/actionTypes';
import { List } from 'immutable';

const initialState = new List();

export default function inspectorTreePath(state = initialState, action) {
  switch (action.type) {
    case PUSH_INSPECTOR_TREE_PATH:
      return state.push(action.pathValue);

    case POP_INSPECTOR_TREE_PATH:
      return state.pop();

    case REPLACE_INSPECTOR_TREE_PATH:
      return action.treePath
        ? new List(action.treePath)
        : initialState;

    default:
      return state;
  }
}
