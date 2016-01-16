import {
  BEGIN_FULL_SCREEN_PREVIEW,
  END_FULL_SCREEN_PREVIEW,
} from '../constants/actionTypes';

export function beginFullScreenPreview() {
  return { type: BEGIN_FULL_SCREEN_PREVIEW };
}

export function endFullScreenPreview() {
  return { type: END_FULL_SCREEN_PREVIEW };
}
