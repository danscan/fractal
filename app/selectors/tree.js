import { createSelector } from 'reselect';
import { presentState } from './undo';
import treePathByElementPath from '../utils/treePathByElementPath';
import { List } from 'immutable';

export const tree = createSelector(
  presentState,
  (state) => state.tree,
);

export const treeRootElement = _treeNodeByTreePath(new List());

export const elementByElementPath = elementPath => {
  const elementTreePath = treePathByElementPath(elementPath);

  return _treeNodeByTreePath(elementTreePath);
};

export const elementPropValueByElementPathAndPropName = (elementPath, propName) => createSelector(
  elementByElementPath(elementPath),
  (element) => {
    const elementProps = element.props || {};

    return elementProps[propName];
  },
);

// (Private helpers)
function _treeCursorByTreePath(treePath) {
  const treePathArray = treePath.toArray();

  return createSelector(
    tree,
    (treeState) => treeState.select(treePathArray),
  );
}

function _treeNodeByTreePath(treePath) {
  return createSelector(
    _treeCursorByTreePath(treePath),
    (treeNodeCursor) => treeNodeCursor.get(),
  );
}
