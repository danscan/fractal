import { SET_INTERFACE_EDITOR_CANVAS_ZOOM } from '../../actions/interfaceEditorCanvasZoom';

export const initialState = 1.0;

export default function interfaceEditorCanvasZoom(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_CANVAS_ZOOM:
      return action.canvasZoom;
    default:
      return state;
  }
}
