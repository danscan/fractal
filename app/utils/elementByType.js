import { Map } from 'immutable';
import propByValueAndPropType from './propByValueAndPropType';

const defaultPropValues = new Map({});

export default function elementByType(type, propValues = defaultPropValues, displayName) {
  const typePropTypes = type.propTypes || {};
  const props = propValues.map((propValue, propName) => {
    const propType = typePropTypes[propName];

    return propByValueAndPropType(propValue, propType);
  });

  return new Map({
    displayName,
    type,
    props,
  });
}
