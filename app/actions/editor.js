import {
  SHOW_ADD_ELEMENT_MODAL,
  HIDE_ADD_ELEMENT_MODAL,
  SET_SELECTED_ELEMENT_PATH,
  RESET_SELECTED_ELEMENT_PATH,
} from '../constants/actionTypes';

export function showAddElementModal() {
  return { type: SHOW_ADD_ELEMENT_MODAL };
}

export function hideAddElementModal() {
  return { type: HIDE_ADD_ELEMENT_MODAL };
}

export function setSelectedElementPath(selectedElementPath) {
  return {
    type: SET_SELECTED_ELEMENT_PATH,
    selectedElementPath,
  };
}

export function resetSelectedElementPath() {
  return { type: RESET_SELECTED_ELEMENT_PATH };
}
