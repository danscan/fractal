export const SET_INTERFACE_EDITOR_CANVAS_ZOOM = 'SET_INTERFACE_EDITOR_CANVAS_ZOOM';
export function setInterfaceEditorCanvasZoom(canvasZoom) {
  return {
    type: SET_INTERFACE_EDITOR_CANVAS_ZOOM,
    canvasZoom,
  };
}
