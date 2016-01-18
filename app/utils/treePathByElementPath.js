import { List } from 'immutable';

export default function treePathByElementPath(elementPath) {
  return elementPath
    .interpose(List.of('props', 'children'))
    .flatten(1);
}
