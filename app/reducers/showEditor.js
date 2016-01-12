import { SHOW_EDITOR, HIDE_EDITOR, TOGGLE_EDITOR } from '../constants/actionTypes';

const initialState = true;

export default function showEditor(state = initialState, action) {
  switch (action.type) {
    case SHOW_EDITOR:
      return true;

    case HIDE_EDITOR:
      return false;

    case TOGGLE_EDITOR:
      return !state;

    default:
      return state;
  }
}
