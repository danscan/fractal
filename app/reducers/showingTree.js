import { SHOW_TREE, HIDE_TREE, TOGGLE_TREE } from '../constants/actionTypes';

const initialState = false;

export default function showingTree(state = initialState, action) {
  switch (action.type) {
    case SHOW_TREE:
      return true;

    case HIDE_TREE:
      return false;

    case TOGGLE_TREE:
      return !state;

    default:
      return state;
  }
}
