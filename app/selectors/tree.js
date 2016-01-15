import { createSelector } from 'reselect';

export function selectTree(state) {
  // Present value of *undoable* tree reducer state
  return state.tree.present;
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
