import { BEGIN_PEEK_BEHIND_TREE, END_PEEK_BEHIND_TREE } from '../constants/actionTypes';

export function beginPeekBehindTree() {
  return { type: BEGIN_PEEK_BEHIND_TREE };
}

export function endPeekBehindTree() {
  return { type: END_PEEK_BEHIND_TREE };
}
