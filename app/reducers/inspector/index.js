import {
  PUSH_INSPECTOR_ROUTE,
  POP_INSPECTOR_ROUTE,
  REPLACE_INSPECTOR_ROUTE,
} from '../../constants/actionTypes';
import initialState from './initialState';

// (Action reducer functions)
import reducePushInspectorRoute from './reducePushInspectorRoute';
import reducePopInspectorRoute from './reducePopInspectorRoute';
import reduceReplaceInspectorRoute from './reduceReplaceInspectorRoute';

export default function inspector(state = initialState, action) {
  switch (action.type) {
    case PUSH_INSPECTOR_ROUTE:
      return reducePushInspectorRoute(state, action);
    case POP_INSPECTOR_ROUTE:
      return reducePopInspectorRoute(state, action);
    case REPLACE_INSPECTOR_ROUTE:
        return reduceReplaceInspectorRoute(state, action);
    default:
      return state;
  }
}
