import elementPropTreePathByElementPathAndPropName from '../../utils/elementPropTreePathByElementPathAndPropName';

export default function reduceApplyInterfaceEditorComponentElementProp(state, { elementPath, propName, propValue }) {
  const elementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, propName);

  return state.setIn(elementPropTreePath, propValue);
}
