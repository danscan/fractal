import { List } from 'immutable';

export default function treePathByElementPath(elementPath) {
  return elementPath
    .map(childElementIndex => List.of('props', 'children', childElementIndex))
    .flatten(1);
}
