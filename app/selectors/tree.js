import { createSelector } from 'reselect';

export function selectTree(state) {
  return state.tree;
}

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
