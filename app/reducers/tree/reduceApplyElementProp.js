import elementPropTreePathByElementPathAndPropName from '../../utils/elementPropTreePathByElementPathAndPropName';

export default function reduceApplyElementProp(state, { elementPath, propName, propValue }) {
  const elementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, propName);
  const elementPropTreePathArray = elementPropTreePath.toArray();

  state.set(elementPropTreePathArray, propValue);

  return state;
}
