import { createSelector } from 'reselect';
import { List, OrderedMap } from 'immutable';
import { interfaceEditorSelectedComponentKey } from './interfaceEditorSelectedComponentKey';
import { interfaceEditorSelectedElementPath } from './interfaceEditorSelectedElementPath';
import treePathByElementPath from '../utils/treePathByElementPath';

export function interfaceEditorComponents(state) {
  return state.interfaceEditorComponents;
}

export const interfaceEditorSelectedComponent = createSelector(
  interfaceEditorComponents,
  interfaceEditorSelectedComponentKey,
  (componentsState, selectedComponentKeyState) => {
    // If selectedComponentKey has a (truthy) value, return the component w/ its
    // value as its key.  Otherwise return the first component.
    if (selectedComponentKeyState) {
      return componentsState.get(selectedComponentKeyState);
    }

    return componentsState.first();
  },
);

export const interfaceEditorSelectedComponentTree = createSelector(
  interfaceEditorSelectedComponent,
  // Currently, `interfaceEditorComponents` just stores component trees
  (treeState) => treeState,
);

export const interfaceEditorSelectedElement = createSelector(
  interfaceEditorSelectedComponentTree,
  interfaceEditorSelectedElementPath,
  (treeState, selectedElementPathState) => {
    const selectedElementTreePath = treePathByElementPath(selectedElementPathState);

    return treeState.getIn(selectedElementTreePath);
  },
);

export const interfaceEditorSelectedElementBreadcrumbElements = createSelector(
  interfaceEditorSelectedElementPath,
  interfaceEditorSelectedComponentTree,
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
