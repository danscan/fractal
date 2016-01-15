import { ELEMENT_PROPS_KEY } from './constants';

export default function reduceApplyElementProp(state, { elementPath, propName, propValue }) {
  state.set([
    ...elementPath,
    ELEMENT_PROPS_KEY,
    propName,
  ], propValue);

  return state;
}
