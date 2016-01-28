import {
  SHOW_ADD_ELEMENT_MODAL,
  HIDE_ADD_ELEMENT_MODAL,
  SET_SELECTED_ELEMENT_PATH,
  RESET_SELECTED_ELEMENT_PATH,
  SET_SELECTED_INSPECTOR_TAB,
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

export function setSelectedInspectorTab(selectedInspectorTab) {
  return {
    type: SET_SELECTED_INSPECTOR_TAB,
    selectedInspectorTab,
  };
}
