import elementPropTreePathByElementPathAndPropName from '../../utils/elementPropTreePathByElementPathAndPropName';

export default function reduceRemoveInterfaceEditorComponentElementProp(state, { elementPath, propName }) {
  const elementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, propName);

  return state.deleteIn(elementPropTreePath);
}
