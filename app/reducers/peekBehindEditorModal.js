import { BEGIN_PEEK_BEHIND_EDITOR_MODAL, END_PEEK_BEHIND_EDITOR_MODAL } from '../constants/actionTypes';

const initialState = false;

export default function peekBehindEditorModal(state = initialState, action) {
  switch (action.type) {
    case BEGIN_PEEK_BEHIND_EDITOR_MODAL:
      return true;

    case END_PEEK_BEHIND_EDITOR_MODAL:
      return false;

    default:
      return state;
  }
}
