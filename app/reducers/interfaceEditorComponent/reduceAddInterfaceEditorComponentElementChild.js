import elementPropValueTreePathByElementPathAndPropName from '../../utils/elementPropValueTreePathByElementPathAndPropName';

export default function reduceAddInterfaceEditorComponentElementChild(state, { elementPath, child }) {
  const elementChildrenTreePath = elementPropValueTreePathByElementPathAndPropName(elementPath, 'children');
  const oldElementChildren = state.getIn(elementChildrenTreePath);
  const newElementChildren = oldElementChildren.push(child);

  return state.setIn(elementChildrenTreePath, newElementChildren);
}
