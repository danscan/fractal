import {
  BEGIN_FULL_SCREEN_PREVIEW,
  END_FULL_SCREEN_PREVIEW,
} from '../constants/actionTypes';

const initialState = true;

export default function fullScreenPreview(state = initialState, action) {
  switch (action.type) {
    case BEGIN_FULL_SCREEN_PREVIEW:
      return true;

    case END_FULL_SCREEN_PREVIEW:
      return false;

    default:
      return state;
  }
}
