import { BEGIN_PEEK_BEHIND_TREE, END_PEEK_BEHIND_TREE } from '../constants/actionTypes';

const initialState = false;

export default function peekBehindTree(state = initialState, action) {
  switch (action.type) {
    case BEGIN_PEEK_BEHIND_TREE:
      return true;

    case END_PEEK_BEHIND_TREE:
      return false;

    default:
      return state;
  }
}
