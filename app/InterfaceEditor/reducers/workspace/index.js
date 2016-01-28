import {
  BEGIN_FULL_SCREEN_PREVIEW,
  END_FULL_SCREEN_PREVIEW,
  SET_CANVAS_DEVICE,
  SET_CANVAS_ORIENTATION,
  SET_CANVAS_ZOOM,
} from '../../constants/actionTypes';
import initialState from './initialState';

// (Action reducer functions)
import reduceBeginFullScreenPreview from './reduceBeginFullScreenPreview';
import reduceEndFullScreenPreview from './reduceEndFullScreenPreview';
import reduceSetCanvasDevice from './reduceSetCanvasDevice';
import reduceSetCanvasOrientation from './reduceSetCanvasOrientation';
import reduceSetCanvasZoom from './reduceSetCanvasZoom';

export default function workspace(state = initialState, action) {
  switch (action.type) {
    case BEGIN_FULL_SCREEN_PREVIEW:
      return reduceBeginFullScreenPreview(state);
    case END_FULL_SCREEN_PREVIEW:
      return reduceEndFullScreenPreview(state);
    case SET_CANVAS_DEVICE:
      return reduceSetCanvasDevice(state, action);
    case SET_CANVAS_ORIENTATION:
      return reduceSetCanvasOrientation(state, action);
    case SET_CANVAS_ZOOM:
      return reduceSetCanvasZoom(state, action);
    default:
      return state;
  }
}
