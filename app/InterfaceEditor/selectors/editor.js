import { createSelector } from 'reselect';
import { List, OrderedMap } from 'immutable';
import reducerMountPoint from './reducerMountPoint';
import { elementByElementPath, treeRootElement } from './tree';
import elementDisplayNameByElement from '../utils/elementDisplayNameByElement';

function editor(state) {
  return reducerMountPoint(state).editor;
}

export const showAddElementModal = createSelector(
  editor,
  (editorState) => editorState.get('showAddElementModal'),
);

export const selectedElementPath = createSelector(
  editor,
  (editorState) => editorState.get('selectedElementPath'),
);

export function selectedElement(state) {
  const selectedElementPathState = selectedElementPath(state);
  const selectedElementState = elementByElementPath(selectedElementPathState)(state);

  return selectedElementState;
}

export function selectedElementDisplayName(state) {
  const selectedElementState = selectedElement(state);

  return elementDisplayNameByElement(selectedElementState);
}

export function selectedElementBreadCrumbElements(state) {
  const selectedElementPathState = selectedElementPath(state);
  const baseBreadCrumbElements = new OrderedMap([[new List(), treeRootElement(state)]]);
  console.log('baseBreadCrumbElements:', baseBreadCrumbElements);

  // Return root element if root path is selected
  if (selectedElementPathState.isEmpty()) {
    return baseBreadCrumbElements;
  }

  return selectedElementPathState.reduce((aggregateElements, elementIndex, pathEntryIndex) => {
    const elementPath = selectedElementPathState.take(pathEntryIndex + 1);
    const element = elementByElementPath(elementPath)(state);

    return aggregateElements.set(elementPath, element);
  }, baseBreadCrumbElements);
}
