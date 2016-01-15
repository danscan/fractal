import { createSelector } from 'reselect';
import { selectPresentState } from './undo';

export const selectTree = createSelector(
  selectPresentState,
  (state) => state.tree,
);

export const selectElementCursorWithElementPath = elementPath => createSelector(
  selectTree,
  (tree) => tree.select(elementPath),
);

export const selectElementWithElementPath = elementPath => createSelector(
  selectElementCursorWithElementPath(elementPath),
  (elementCursor) => elementCursor.get(),
);

export const selectElementPropValueWithElementPathAndPropName = (elementPath, propName) => createSelector(
  selectElementWithElementPath(elementPath),
  (element) => {
    const elementProps = element.props || {};

    return elementProps[propName];
  },
);
