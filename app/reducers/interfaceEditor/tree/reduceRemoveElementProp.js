import elementPropTreePathByElementPathAndPropName from '../../../utils/elementPropTreePathByElementPathAndPropName';

export default function reduceRemoveElementProp(state, { elementPath, propName }) {
  const elementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, propName);

  return state.deleteIn(elementPropTreePath);
}
