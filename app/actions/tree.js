import {
  ADD_ELEMENT_CHILD,
  REMOVE_ELEMENT,
  CHANGE_ELEMENT_CHILD_INDEX,
  ADD_ELEMENT_PROP,
  CHANGE_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
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

export function changeElementChildIndex(elementPath, oldChildIndex, newChildIndex) {
  return {
    type: CHANGE_ELEMENT_CHILD_INDEX,
    elementPath,
    oldChildIndex,
    newChildIndex,
  };
}

export function addElementProp(elementPath, propName, propValue) {
  return {
    type: ADD_ELEMENT_PROP,
    elementPath,
    propName,
    propValue,
  };
}

export function changeElementProp(elementPath, propName, propValue) {
  return {
    type: CHANGE_ELEMENT_PROP,
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
