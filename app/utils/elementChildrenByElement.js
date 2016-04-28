import { TextInput } from 'react-native';
import { List } from 'immutable';
import elementPropValueByElementAndPropName from './elementPropValueByElementAndPropName';

export default function elementChildrenByElement(element) {
  if (element.get('type') === TextInput) {
    return undefined;
  }

  return elementPropValueByElementAndPropName(element, 'children') || new List;
}
