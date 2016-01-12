import {
  PUSH_EDITOR_MODAL_ROUTE,
  POP_EDITOR_MODAL_ROUTE,
  RESET_EDITOR_MODAL_ROUTE_STACK,
} from '../constants/actionTypes';

export function pushEditorModalRoute(route) {
  return {
    type: PUSH_EDITOR_MODAL_ROUTE,
    route,
  };
}

export function popEditorModalRoute() {
  return {
    type: POP_EDITOR_MODAL_ROUTE,
  };
}

export function resetEditorModalRouteStack(routes) {
  return {
    type: RESET_EDITOR_MODAL_ROUTE_STACK,
    routes,
  };
}
