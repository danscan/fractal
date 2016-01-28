import { createSelector } from 'reselect';
import reducerMountPoint from './reducerMountPoint';

function inspector(state) {
  return reducerMountPoint(state).inspector;
}

export const selectedTab = createSelector(
  inspector,
  (inspectorState) => inspectorState.get('selectedTab'),
);
