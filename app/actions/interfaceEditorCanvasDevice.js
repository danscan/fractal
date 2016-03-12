export const SET_INTERFACE_EDITOR_CANVAS_DEVICE = 'SET_INTERFACE_EDITOR_CANVAS_DEVICE';

export function setInterfaceEditorCanvasDevice(canvasDevice) {
  return {
    type: SET_INTERFACE_EDITOR_CANVAS_DEVICE,
    canvasDevice,
  };
}
