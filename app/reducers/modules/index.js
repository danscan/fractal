import {
  SET_MODULES,
  SET_MODULE,
  DELETE_MODULE,
} from '../../actions/modules';
import initialState from './initialState';

export default function modules(state = initialState, action) {
  switch (action.type) {
    case SET_MODULES:
      return action.modules;
    case SET_MODULE:
      return state
        .set(action.moduleName, action.module);
    case DELETE_MODULE:
      return state
        .delete(action.moduleName);
    default:
      return state;
  }
}
