import treePathByElementPath from '../../utils/treePathByElementPath';

export default function reduceRemoveElement(state, { elementPath }) {
  const elementTreePath = treePathByElementPath(elementPath);

  return state.deleteIn(elementTreePath);
}
