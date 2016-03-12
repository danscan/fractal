export const SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW = 'SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW';

export function setInterfaceEditorFullscreenPreview(fullscreenPreview) {
  return {
    type: SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW,
    fullscreenPreview,
  };
}
