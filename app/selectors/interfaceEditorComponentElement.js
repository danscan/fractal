import { createSelector } from 'reselect';
import { List, OrderedMap } from 'immutable';
import { interfaceEditorComponent } from './interfaceEditorComponent';
import { interfaceEditorSelectedElementPath } from './interfaceEditorSelectedElementPath';
import { interfaceEditorComponentStyleSheet } from './interfaceEditorComponentStyleSheet';
import elementByElementWithStyleSheetStyleRefs from '../utils/elementByElementWithStyleSheetStyleRefs';
import treePathByElementPath from '../utils/treePathByElementPath';

export function interfaceEditorComponentElement(state) {
  return interfaceEditorComponent(state).element;
}

export const interfaceEditorComponentElementTree = createSelector(
  interfaceEditorComponentElement,
  interfaceEditorComponentStyleSheet,
  (treeWithStyleSheetStyleRefs, componentStyleSheet) => elementByElementWithStyleSheetStyleRefs(treeWithStyleSheetStyleRefs, componentStyleSheet),
);

export const interfaceEditorSelectedElement = createSelector(
  interfaceEditorComponentElementTree,
  interfaceEditorSelectedElementPath,
  (treeState, selectedElementPathState) => {
    const selectedElementTreePath = treePathByElementPath(selectedElementPathState);

    return treeState.getIn(selectedElementTreePath);
  },
);

export const interfaceEditorSelectedElementBreadcrumbElements = createSelector(
  interfaceEditorSelectedElementPath,
  interfaceEditorComponentElementTree,
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
