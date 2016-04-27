import { Map } from 'immutable';

export default function elementStylePropValueByElementAndPropName(element, propName) {
  return element.getIn(['props', propName, 'value'], new Map);
}
