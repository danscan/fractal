import { OPEN_EDITOR, CLOSE_EDITOR, TOGGLE_EDITOR } from '../constants/actionTypes';

const initialState = true;

export default function editing(state = initialState, action) {
  switch (action.type) {
    case OPEN_EDITOR:
      return true;

    case CLOSE_EDITOR:
      return false;

    case TOGGLE_EDITOR:
      return !state;

    default:
      return state;
  }
}
