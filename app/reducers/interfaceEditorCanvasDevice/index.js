import { SET_INTERFACE_EDITOR_CANVAS_DEVICE } from '../../actions/interfaceEditorCanvasDevice';
import canvasDevices from '../../constants/canvasDevices';

export const initialState = canvasDevices.last();

export default function interfaceEditorCanvasDevice(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_CANVAS_DEVICE:
      return action.canvasDevice;
    default:
      return state;
  }
}
