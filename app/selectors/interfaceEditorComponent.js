import { createSelector } from 'reselect';
import { List, OrderedMap } from 'immutable';
import { interfaceEditorSelectedElementPath } from './interfaceEditorSelectedElementPath';
import treePathByElementPath from '../utils/treePathByElementPath';

export function interfaceEditorComponent(state) {
  return state.interfaceEditorComponent.present;
}

export const interfaceEditorComponentTree = createSelector(
  interfaceEditorComponent,
  // Currently, `interfaceEditorComponents` just stores component trees
  (treeState) => treeState,
);

export const interfaceEditorSelectedElement = createSelector(
  interfaceEditorComponentTree,
  interfaceEditorSelectedElementPath,
  (treeState, selectedElementPathState) => {
    const selectedElementTreePath = treePathByElementPath(selectedElementPathState);

    return treeState.getIn(selectedElementTreePath);
  },
);

export const interfaceEditorSelectedElementBreadcrumbElements = createSelector(
  interfaceEditorSelectedElementPath,
  interfaceEditorComponentTree,
  (selectedElementPathState, treeState) => {
    const baseBreadCrumbElements = new OrderedMap([[new List(), treeState]]);

    // Return root element if root path is selected
    if (selectedElementPathState.isEmpty()) {
      return baseBreadCrumbElements;
    }

    return selectedElementPathState.reduce((aggregateElements, elementIndex, pathEntryIndex) => {
      const elementPath = selectedElementPathState.take(pathEntryIndex + 1);
      const elementTreePath = treePathByElementPath(elementPath);
      const element = treeState.getIn(elementTreePath);

      return aggregateElements.set(elementPath, element);
    }, baseBreadCrumbElements);
  },
);

export function canRedoInterfaceEditorComponentAction(state) {
  const future = state.interfaceEditorComponent.future || [];

  return future.length > 0;
}

export function canUndoInterfaceEditorComponentAction(state) {
  const past = state.interfaceEditorComponent.past || [];

  return past.length > 0;
}
