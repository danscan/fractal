import { ELEMENT_PROPS_KEY } from './constants';

export default function reduceRemoveElementProp(state, { elementPath, propName }) {
  state.unset([
    ...elementPath,
    ELEMENT_PROPS_KEY,
    propName,
  ]);

  return state;
}
