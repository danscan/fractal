import {
  PUSH_SELECTED_ELEMENT_PATH,
  POP_SELECTED_ELEMENT_PATH,
  REPLACE_SELECTED_ELEMENT_PATH,
} from '../constants/actionTypes';

export function pushSelectedElementPath(pathValue) {
  return {
    type: PUSH_SELECTED_ELEMENT_PATH,
    pathValue,
  };
}

export function popSelectedElementPath() {
  return { type: POP_SELECTED_ELEMENT_PATH };
}

export function replaceSelectedElementPath(elementPath) {
  return {
    type: REPLACE_SELECTED_ELEMENT_PATH,
    elementPath,
  };
}
