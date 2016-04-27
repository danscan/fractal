import { Map } from 'immutable';
import {
  defaultPropValueInputTypeByPropType,
  LITERAL,
} from '../constants/propValueInputTypes';

export default function propByValueAndPropType(value, propType) {
  const valueInputType = defaultPropValueInputTypeByPropType.get(propType, LITERAL);

  return new Map({
    value,
    valueInputType,
  });
}
