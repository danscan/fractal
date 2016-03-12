import reduceAddInterfaceEditorComponentElementChild from './reduceAddInterfaceEditorComponentElementChild';
import treePathByElementPath from '../../utils/treePathByElementPath';

export default function reduceDuplicateInterfaceEditorComponentElement(state, { elementPath }) {
  const elementParentElementPath = elementPath.pop();
  const elementTreePath = treePathByElementPath(elementPath);
  const element = state.getIn(elementTreePath);

  return reduceAddInterfaceEditorComponentElementChild(state, {
    elementPath: elementParentElementPath,
    child: element,
  });
}
