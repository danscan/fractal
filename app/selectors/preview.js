import { createSelector } from 'reselect';
import { presentState } from './undo';

export const preview = createSelector(
  presentState,
  (state) => state.preview,
);
