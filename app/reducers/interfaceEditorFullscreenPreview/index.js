import { SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW } from '../../actions/interfaceEditorFullscreenPreview';

export const initialState = false;

export default function interfaceEditorFullscreenPreview(state = initialState, action) {
  switch (action.type) {
    case SET_INTERFACE_EDITOR_FULLSCREEN_PREVIEW:
      return action.fullscreenPreview;
    default:
      return state;
  }
}
