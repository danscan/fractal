import { createSelector } from 'reselect';
import { presentState } from './undo';

export const tree = createSelector(
  presentState,
  (state) => state.tree,
);

export const elementCursorByElementPath = elementPath => createSelector(
  tree,
  (tree) => tree.select(elementPath),
);

export const elementByElementPath = elementPath => createSelector(
  elementCursorByElementPath(elementPath),
  (elementCursor) => elementCursor.get(),
);

export const elementPropValueByElementPathAndPropName = (elementPath, propName) => createSelector(
  elementByElementPath(elementPath),
  (element) => {
    const elementProps = element.props || {};

    return elementProps[propName];
  },
);
