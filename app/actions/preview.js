import {
  BEGIN_PREVIEW,
  END_PREVIEW,
} from '../constants/actionTypes';

export function beginPreview() {
  return { type: BEGIN_PREVIEW };
}

export function endPreview() {
  return { type: END_PREVIEW };
}
