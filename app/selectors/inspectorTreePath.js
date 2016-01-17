import { createSelector } from 'reselect';
import { presentState } from './undo';

export const inspectorTreePath = createSelector(
  presentState,
  (state) => state.inspectorTreePath,
);
