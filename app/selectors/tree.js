import { createSelector } from 'reselect';
import treePathByElementPath from '../utils/treePathByElementPath';

function tree(state) {
  return state.tree.present;
}

export function canRedoTreeAction(state) {
  const future = state.tree.future || [];

  return future.length > 0;
}

export function canUndoTreeAction(state) {
  const past = state.tree.past || [];

  return past.length > 0;
}

export function treeRootElement(state) {
  return tree(state).get();
}

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
