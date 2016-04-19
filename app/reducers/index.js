import { combineReducers } from 'redux';

// (App reducers)
import interfaceEditorComponent from './interfaceEditorComponent';
import interfaceEditorSelectedComponentKey from './interfaceEditorSelectedComponentKey';
import interfaceEditorSelectedElementPath from './interfaceEditorSelectedElementPath';
import interfaceEditorCanvasDevice from './interfaceEditorCanvasDevice';
import interfaceEditorCanvasOrientation from './interfaceEditorCanvasOrientation';
import interfaceEditorCanvasZoom from './interfaceEditorCanvasZoom';
import interfaceEditorDirectSelectModeEnabled from './interfaceEditorDirectSelectModeEnabled';
import interfaceEditorFullscreenPreview from './interfaceEditorFullscreenPreview';
import interfaceEditorWorkspacePanelModalContent from './interfaceEditorWorkspacePanelModalContent';
import interfaceEditorStyleEditorSelectedProp from './interfaceEditorStyleEditorSelectedProp';
import interfaceEditorTreeNavigatorCollapsedElementPaths from './interfaceEditorTreeNavigatorCollapsedElementPaths';

const reducer = combineReducers({
  interfaceEditorComponent,
  interfaceEditorSelectedComponentKey,
  interfaceEditorSelectedElementPath,
  interfaceEditorCanvasDevice,
  interfaceEditorCanvasOrientation,
  interfaceEditorCanvasZoom,
  interfaceEditorDirectSelectModeEnabled,
  interfaceEditorFullscreenPreview,
  interfaceEditorWorkspacePanelModalContent,
  interfaceEditorStyleEditorSelectedProp,
  interfaceEditorTreeNavigatorCollapsedElementPaths,
});

export default reducer;
