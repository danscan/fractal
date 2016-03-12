import treePathByElementPath from '../../utils/treePathByElementPath';

export default function reduceChangeInterfaceEditorComponentElementDisplayName(state, { elementPath, newDisplayName }) {
  const elementTreePath = treePathByElementPath(elementPath);
  const elementDisplayNameTreePath = elementTreePath.push('displayName');

  return state.setIn(elementDisplayNameTreePath, newDisplayName);
}
