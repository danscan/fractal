import { SET_INTERFACE_EDITOR_CANVAS_ORIENTATION } from '../../actions/interfaceEditorCanvasOrientation';
import { portraitOrientation } from '../../constants/canvasOrientations';

export const initialState = portraitOrientation;

export default function interfaceEditorCanvasOrientation(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_CANVAS_ORIENTATION:
      return action.canvasOrientation;
    default:
      return state;
  }
}
