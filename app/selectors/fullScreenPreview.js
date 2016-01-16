import { createSelector } from 'reselect';
import { presentState } from './undo';

export const fullScreenPreview = createSelector(
  presentState,
  (state) => state.fullScreenPreview,
);
