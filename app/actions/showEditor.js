import {
  SHOW_EDITOR,
  HIDE_EDITOR,
  TOGGLE_EDITOR,
} from '../constants/actionTypes';

export function showEditor() {
  return { type: SHOW_EDITOR };
}

export function hideEditor() {
  return { type: HIDE_EDITOR };
}

export function toggleEditor() {
  return { type: TOGGLE_EDITOR };
}
