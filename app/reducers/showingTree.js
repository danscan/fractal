import { SHOW_TREE, HIDE_TREE } from '../constants/actionTypes';

const initialState = false;

export default function showingTree(state = initialState, action) {
  switch (action.type) {
    case SHOW_TREE:
      return true;

    case HIDE_TREE:
      return false;

    default:
      return state;
  }
}
