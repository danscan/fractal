import {
  BEGIN_PREVIEW,
  END_PREVIEW,
} from '../constants/actionTypes';

const initialState = true;

export default function preview(state = initialState, action) {
  switch (action.type) {
    case BEGIN_PREVIEW:
      return true;

    case END_PREVIEW:
      return false;

    default:
      return state;
  }
}
