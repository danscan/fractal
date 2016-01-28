import { SET_SELECTED_INSPECTOR_TAB } from '../../constants/actionTypes';
import initialState from './initialState';

// (Action reducer functions)
import reduceSetSelectedTab from './reduceSetSelectedTab';

export default function inspector(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_INSPECTOR_TAB:
      return reduceSetSelectedTab(state, action);
    default:
      return state;
  }
}
