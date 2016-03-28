import { TextInput } from 'react-native';
import { List } from 'immutable';

export default function elementChildrenByElement(element) {
  if (element.get('type') === TextInput) {
    return undefined;
  }

  return element.getIn(['props', 'children'], new List);
}
