import {
  BEGIN_PEEK_BEHIND_EDITOR_MODAL,
  END_PEEK_BEHIND_EDITOR_MODAL,
} from '../constants/actionTypes';

export function beginPeekBehindEditorModal() {
  return { type: BEGIN_PEEK_BEHIND_EDITOR_MODAL };
}

export function endPeekBehindEditorModal() {
  return { type: END_PEEK_BEHIND_EDITOR_MODAL };
}
