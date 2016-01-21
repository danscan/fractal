import {
  ADD_ELEMENT_CHILD,
  REMOVE_ELEMENT,
  HIDE_ELEMENT,
  CHANGE_ELEMENT_PATH,
  APPLY_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
  REDO_TREE_ACTION,
  UNDO_TREE_ACTION,
} from '../constants/actionTypes';

export function addElementChild(elementPath, child) {
  return {
    type: ADD_ELEMENT_CHILD,
    elementPath,
    child,
  };
}

export function removeElement(elementPath) {
  return {
    type: REMOVE_ELEMENT,
    elementPath,
  };
}

export function hideElement(elementPath) {
  return {
    type: HIDE_ELEMENT,
    elementPath,
  };
}

export function changeElementPath(elementPath, newElementPath) {
  return {
    type: CHANGE_ELEMENT_PATH,
    elementPath,
    newElementPath,
  };
}

export function applyElementProp(elementPath, propName, propValue) {
  return {
    type: APPLY_ELEMENT_PROP,
    elementPath,
    propName,
    propValue,
  };
}

export function removeElementProp(elementPath, propName) {
  return {
    type: REMOVE_ELEMENT_PROP,
    elementPath,
    propName,
  };
}

export function redoTreeAction() {
  return { type: REDO_TREE_ACTION };
}

export function undoTreeAction() {
  return { type: UNDO_TREE_ACTION };
}
