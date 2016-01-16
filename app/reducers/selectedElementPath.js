import {
  PUSH_SELECTED_ELEMENT_PATH,
  POP_SELECTED_ELEMENT_PATH,
  REPLACE_SELECTED_ELEMENT_PATH,
} from '../constants/actionTypes';
import { List } from 'immutable';

const initialState = new List();

export default function selectedElementPath(state = initialState, action) {
  switch (action.type) {
    case PUSH_SELECTED_ELEMENT_PATH:
      return state.push(action.pathValue);

    case POP_SELECTED_ELEMENT_PATH:
      return state.pop();

    case REPLACE_SELECTED_ELEMENT_PATH:
      return action.elementPath
        ? new List(action.elementPath)
        : initialState;

    default:
      return state;
  }
}
