import { Map } from 'immutable';
import {
  defaultPropValueInputTypesByPropType,
  LITERAL,
} from '../constants/propValueInputTypes';

export default function propByValueAndPropType(value, propType) {
  const valueInputType = defaultPropValueInputTypesByPropType.get(propType, LITERAL);

  return new Map({
    value,
    valueInputType,
  });
}
