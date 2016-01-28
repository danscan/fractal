import { List } from 'immutable';

export default function reduceResetSelectedElementPath(state) {
  return state.set('selectedElementPath', new List());
}
