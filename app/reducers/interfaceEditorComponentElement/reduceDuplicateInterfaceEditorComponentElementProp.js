import elementPropTreePathByElementPathAndPropName from '../../utils/elementPropTreePathByElementPathAndPropName';


export default function reduceDuplicateInterfaceEditorComponentElementProp(state, { elementPath, propName, newPropName }) {
  const elementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, propName);
  const elementProp = state.getIn(elementPropTreePath);
  const newElementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, newPropName);

  return state.setIn(newElementPropTreePath, elementProp);
}
