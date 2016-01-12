import {
  PUSH_EDITOR_MODAL_ROUTE,
  POP_EDITOR_MODAL_ROUTE,
  RESET_EDITOR_MODAL_ROUTE_STACK,
} from '../constants/actionTypes';
import { List } from 'immutable';

const initialState = new List();

export default function editorModalRouteStack(state = initialState, action) {
  switch (action.type) {
    case PUSH_EDITOR_MODAL_ROUTE:
      return state.push(action.route);

    case POP_EDITOR_MODAL_ROUTE:
      return state.pop();

    case RESET_EDITOR_MODAL_ROUTE_STACK:
      return action.routes
        ? new List(action.routes)
        : initialState;

    default:
      return state;
  }
}
