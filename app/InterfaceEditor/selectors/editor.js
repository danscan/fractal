import { createSelector } from 'reselect';
import reducerMountPoint from './reducerMountPoint';
import { elementByElementPath } from './tree';

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

  return selectedElementState.displayName || selectedElementState.type.displayName;
}
