import { combineReducers } from 'redux';

// (App reducers)
import interfaceEditorComponent from './interfaceEditorComponent';
import interfaceEditorSelectedElementPath from './interfaceEditorSelectedElementPath';
import interfaceEditorCanvasDevice from './interfaceEditorCanvasDevice';
import interfaceEditorCanvasOrientation from './interfaceEditorCanvasOrientation';
import interfaceEditorCanvasZoom from './interfaceEditorCanvasZoom';
import interfaceEditorDirectSelectModeEnabled from './interfaceEditorDirectSelectModeEnabled';
import interfaceEditorFullscreenPreview from './interfaceEditorFullscreenPreview';
import interfaceEditorWorkspacePanelModalContent from './interfaceEditorWorkspacePanelModalContent';
import interfaceEditorStyleEditorSelectedProp from './interfaceEditorStyleEditorSelectedProp';
import modules from './modules';

const reducer = combineReducers({
  interfaceEditorComponent,
  interfaceEditorSelectedElementPath,
  interfaceEditorCanvasDevice,
  interfaceEditorCanvasOrientation,
  interfaceEditorCanvasZoom,
  interfaceEditorDirectSelectModeEnabled,
  interfaceEditorFullscreenPreview,
  interfaceEditorWorkspacePanelModalContent,
  interfaceEditorStyleEditorSelectedProp,
  modules,
});

export default reducer;
