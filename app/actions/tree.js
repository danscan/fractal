import {
  ADD_ELEMENT,
  REMOVE_ELEMENT,
  CHANGE_ELEMENT_CHILD_INDEX,
  ADD_ELEMENT_PROP,
  CHANGE_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
} from '../constants/actionTypes';

export function addElement(parentElementPath, element) {
  return {
    type: ADD_ELEMENT,
    parentElementPath,
    element,
  };
}

export function removeElement(elementPath) {
  return {
    type: REMOVE_ELEMENT,
    elementPath,
  };
}

export function changeElementChildIndex(elementPath, oldElementChildIndex, newElementChildIndex) {
  return {
    type: CHANGE_ELEMENT_CHILD_INDEX,
    elementPath,
    oldElementChildIndex,
    newElementChildIndex,
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
