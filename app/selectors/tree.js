import { createSelector } from 'reselect';
import { presentState } from './undo';
import treePathByElementPath from '../utils/treePathByElementPath';

export const tree = createSelector(
  presentState,
  (state) => state.tree,
);

export const treeCursorByTreePath = treePath => createSelector(
  tree,
  (treeState) => treeState.select(treePath),
);

export const elementByElementPath = elementPath => {
  return _treeNodeByTreePath(treePathByElementPath(elementPath));
};

export const elementPropValueByElementPathAndPropName = (elementPath, propName) => createSelector(
  elementByElementPath(elementPath),
  (element) => {
    const elementProps = element.props || {};

    return elementProps[propName];
  },
);

function _treeNodeByTreePath(treePath) {
  return createSelector(
    treeCursorByTreePath(treePath),
    (nodeCursor) => nodeCursor.get(),
  );
}
