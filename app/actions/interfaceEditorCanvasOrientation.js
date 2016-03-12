export const SET_INTERFACE_EDITOR_CANVAS_ORIENTATION = 'SET_INTERFACE_EDITOR_CANVAS_ORIENTATION';
export function setInterfaceEditorCanvasOrientation(canvasOrientation) {
  return {
    type: SET_INTERFACE_EDITOR_CANVAS_ORIENTATION,
    canvasOrientation,
  };
}
