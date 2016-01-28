import {
  BEGIN_FULL_SCREEN_PREVIEW,
  END_FULL_SCREEN_PREVIEW,
  SET_CANVAS_DEVICE,
  SET_CANVAS_ORIENTATION,
  SET_CANVAS_ZOOM,
} from '../constants/actionTypes';

export function beginFullScreenPreview() {
  return { type: BEGIN_FULL_SCREEN_PREVIEW };
}

export function endFullScreenPreview() {
  return { type: END_FULL_SCREEN_PREVIEW };
}

export function setCanvasDevice(canvasDevice) {
  return {
    type: SET_CANVAS_DEVICE,
    canvasDevice,
  };
}

export function setCanvasOrientation(canvasOrientation) {
  return {
    type: SET_CANVAS_ORIENTATION,
    canvasOrientation,
  };
}

export function setCanvasZoom(canvasZoom) {
  return {
    type: SET_CANVAS_ZOOM,
    canvasZoom,
  };
}
