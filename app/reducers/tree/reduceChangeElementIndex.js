import {
  ELEMENT_PROPS_KEY,
  ELEMENT_PROPS_CHILDREN_KEY,
} from './constants';

export default function reduceChangeElementIndex(state, { elementPath, oldChildIndex, newChildIndex }) {
  const elementChildrenCursor = state.select([
    ...elementPath,
    ELEMENT_PROPS_KEY,
    ELEMENT_PROPS_CHILDREN_KEY,
  ]);
  const elementChild = state.select([
    ...elementChildrenCursor,
    oldChildIndex,
  ]).get();
  elementChildrenCursor.unset(oldChildIndex);
  elementChildrenCursor.splice(newChildIndex, 0, elementChild);

  return state;
}
