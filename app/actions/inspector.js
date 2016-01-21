import {
  PUSH_INSPECTOR_ROUTE,
  POP_INSPECTOR_ROUTE,
} from '../constants/actionTypes';

export function pushInspectorRoute(route) {
  return {
    type: PUSH_INSPECTOR_ROUTE,
    route,
  };
}

export function popInspectorRoute() {
  return { type: POP_INSPECTOR_ROUTE };
}
