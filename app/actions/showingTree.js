import { SHOW_TREE, HIDE_TREE, TOGGLE_TREE } from '../constants/actionTypes';

export function showTree() {
  return { type: SHOW_TREE };
}

export function hideTree() {
  return { type: HIDE_TREE };
}

export function toggleTree() {
  return { type: TOGGLE_TREE };
}
