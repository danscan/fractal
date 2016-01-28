import treePathByElementPath from '../../utils/treePathByElementPath';

export default function reduceChangeElementPath(state, { elementPath, newElementPath }) {
  const elementTreePath = treePathByElementPath(elementPath);
  const newElementTreePath = treePathByElementPath(newElementPath);
  const element = state.getIn(elementTreePath);
  const treeWithElementAtNewElementPath = state.setIn(newElementTreePath, element);

  // Return tree with element at new element path, with value at old element path deleted
  return treeWithElementAtNewElementPath.deleteIn(elementPath);
}
