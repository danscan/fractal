import elementPropTreePathByElementPathAndPropName from '../../utils/elementPropTreePathByElementPathAndPropName';

export default function reduceRemoveElementProp(state, { elementPath, propName }) {
  const elementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, propName);
  const elementPropTreePathArray = elementPropTreePath.toArray();

  state.unset(elementPropTreePathArray);

  return state;
}
