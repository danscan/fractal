import { createSelector } from 'reselect';
import reducerMountPoint from './reducerMountPoint';
import treePathByElementPath from '../utils/treePathByElementPath';

function rootState(state) {
  return reducerMountPoint(state);
}

function tree(state) {
  return rootState(state).tree.present;
}

export function canRedoTreeAction(state) {
  const future = rootState(state).tree.future || [];

  return future.length > 0;
}

export function canUndoTreeAction(state) {
  const past = rootState(state).tree.past || [];

  return past.length > 0;
}

export function treeRootElement(state) {
  return tree(state).toJS();
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

export const elementPropTypeByElementPathAndPropName = (elementPath, propName) => createSelector(
  elementByElementPath(elementPath),
  (element) => {
    const elementPropTypes = element.type.propTypes || {};

    return elementPropTypes[propName];
  },
);

// (Private helpers)
function _treeCursorByTreePath(treePath) {
  console.log('treePath.toJS():', treePath.toJS());
  return createSelector(
    tree,
    (treeState) => treeState.getIn(treePath),
  );
}

function _treeNodeByTreePath(treePath) {
  return createSelector(
    _treeCursorByTreePath(treePath),
    (treeNodeCursor) => treeNodeCursor.toJS(),
  );
}
