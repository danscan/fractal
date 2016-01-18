import {
  SELECT_ELEMENT_PATH,
  EDIT_ELEMENT_PROP,
  CREATE_ELEMENT_CHILD,
} from '../constants/actionTypes';

export function selectElementPath(elementPath) {
  return {
    type: SELECT_ELEMENT_PATH,
    elementPath,
  };
}

export function editElementProp(elementPath, propName) {
  return {
    type: EDIT_ELEMENT_PROP,
    elementPath,
    propName,
  };
}

export function createElementChild(elementPath) {
  return {
    type: CREATE_ELEMENT_CHILD,
    elementPath,
  };
}
