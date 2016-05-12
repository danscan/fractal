import elementPropTreePathByElementPathAndPropName from '../../utils/elementPropTreePathByElementPathAndPropName';
import propByValueAndPropType from '../../utils/propByValueAndPropType';

export default function reduceApplyInterfaceEditorComponentElementProp(state, { elementPath, propName, propValue }) {
  const elementPropTreePath = elementPropTreePathByElementPathAndPropName(elementPath, propName);
  const elementType = state.get('type');
  const elementPropTypes = elementType.propTypes || {};
  const elementPropType = elementPropTypes[propName];
  const elementProp = propByValueAndPropType(propValue, elementPropType);

  return state.setIn(elementPropTreePath, elementProp);
}
