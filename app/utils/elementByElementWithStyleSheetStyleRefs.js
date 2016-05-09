import { Map } from 'immutable';
import propValueByProp from './propValueByProp';
import propByValueAndPropType from './propByValueAndPropType';

const styleSheetRefKey = '$$styleSheetRef';

export default function elementByElementWithStyleSheetStyleRefs(element, componentStyleSheet) {
  if (typeof element !== 'object') {
    return element;
  }

  const elementPropsWithoutChildren = element.get('props').delete('children');
  const elementChildren = propValueByProp(element.getIn(['props', 'children']));
  const elementType = element.type || {};
  const elementTypePropTypes = elementType.propTypes || {};

  // TODO: What about arrays of stylesheet style refs?
  const transformedElementPropsWithoutChildren = elementPropsWithoutChildren.map((elementProp, propName) => {
    const propType = elementTypePropTypes[propName];
    const propValue = propValueByProp(elementProp);
    const propValueIsStyleSheetStyleRef = Map.isMap(propValue)
      ? propValue.has(styleSheetRefKey)
      : false;
    const styleSheetStyleRefStyleName = propValueIsStyleSheetStyleRef
      ? propValue.get(styleSheetRefKey)
      : undefined;

    if (propValueIsStyleSheetStyleRef) {
      return propByValueAndPropType(
        componentStyleSheet[styleSheetStyleRefStyleName],
        propType,
      );
    }

    return elementProp;
  });

  const transformedElementChildren = elementChildren
    ? elementChildren.map(child => elementByElementWithStyleSheetStyleRefs(child, componentStyleSheet))
    : undefined;

  return element
    .set('props', transformedElementPropsWithoutChildren)
    .setIn(['props', 'children'], propByValueAndPropType(transformedElementChildren, undefined));
}
