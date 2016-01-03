import { OPEN_EDITOR, CLOSE_EDITOR, TOGGLE_EDITOR } from '../constants/actionTypes';

export function openEditor() {
  return { type: OPEN_EDITOR };
}

export function closeEditor() {
  return { type: CLOSE_EDITOR };
}

export function toggleEditor() {
  return { type: TOGGLE_EDITOR };
}
