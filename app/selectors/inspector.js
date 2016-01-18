import { createSelector } from 'reselect';
import { presentState } from './undo';
import { elementByElementPath } from './tree';
import treePathByElementPath from '../utils/treePathByElementPath';

export const inspector = createSelector(
  presentState,
  (state) => state.inspector,
);

export const routeStack = createSelector(
  inspector,
  (inspectorState) => inspectorState.routeStack,
);

export const selectedElementPath = createSelector(
  inspector,
  (inspectorState) => inspectorState.selectedElementPath,
);

export const selectedElementTreePath = createSelector(
  selectedElementPath,
  (selectedElementPathState) => treePathByElementPath(selectedElementPathState),
);

export const selectedElement = createSelector(
  (state) => state,
  selectedElementPath,
  (state, selectedElementPathState) => elementByElementPath(selectedElementPathState)(state),
);

export const selectedElementTitle = createSelector(
  selectedElement,
  (selectedElementState) => {
    return selectedElementState.displayName || selectedElementState.type.displayName;
  },
);
