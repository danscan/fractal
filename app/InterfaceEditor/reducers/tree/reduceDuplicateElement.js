import reduceAddElementChild from './reduceAddElementChild';
import treePathByElementPath from '../../utils/treePathByElementPath';

export default function reduceDuplicateElement(state, { elementPath }) {
  const elementParentElementPath = elementPath.pop();
  const elementTreePath = treePathByElementPath(elementPath);
  const element = state.getIn(elementTreePath);

  return reduceAddElementChild(state, {
    elementPath: elementParentElementPath,
    child: element,
  });
}
