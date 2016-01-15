import { createSelector } from 'reselect';
import { selectPresentState } from './undo';

export const selectPreview = createSelector(
  selectPresentState,
  (state) => state.preview,
);
