import {
  ELEMENT_PROPS_KEY,
  ELEMENT_PROPS_CHILDREN_KEY,
} from './constants';

export default function reduceAddElementChild(state, { elementPath, child }) {
  const elementChildrenPath = [
    ...elementPath,
    ELEMENT_PROPS_KEY,
    ELEMENT_PROPS_CHILDREN_KEY,
  ];

  state.push(elementChildrenPath, child);

  return state;
}
