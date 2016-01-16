import { createSelector } from 'reselect';
import { presentState } from './undo';

export const selectedElementPath = createSelector(
  presentState,
  (state) => state.selectedElementPath,
);
