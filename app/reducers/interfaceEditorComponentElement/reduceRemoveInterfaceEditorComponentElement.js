import treePathByElementPath from '../../utils/treePathByElementPath';
import emptyRootElement from '../../constants/emptyRootElement';

export default function reduceRemoveInterfaceEditorComponentElement(state, { elementPath }) {
  console.log('state:', state);
  const elementTreePath = treePathByElementPath(elementPath);

  // Avoid result in which tree has no root element. If element path is root,
  // replace root element with empty root element instead of deleting it.
  if (elementPath.isEmpty()) {
    return state.setIn(elementTreePath, emptyRootElement);
  }

  return state.deleteIn(elementTreePath);
}
