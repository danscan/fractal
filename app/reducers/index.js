import { combineReducers } from 'redux';

// (App reducers)
import interfaceEditorComponent from './interfaceEditorComponent';
import interfaceEditorSelectedElementPath from './interfaceEditorSelectedElementPath';
import interfaceEditorCanvasDevice from './interfaceEditorCanvasDevice';
import interfaceEditorCanvasOrientation from './interfaceEditorCanvasOrientation';
import interfaceEditorCanvasZoom from './interfaceEditorCanvasZoom';
import interfaceEditorDirectSelectModeEnabled from './interfaceEditorDirectSelectModeEnabled';
import interfaceEditorFullscreenPreview from './interfaceEditorFullscreenPreview';
import interfaceEditorPropsEditorSelectedPropName from './interfaceEditorPropsEditorSelectedPropName';
import interfaceEditorStyleSheetEditorSelectedStyleName from './interfaceEditorStyleSheetEditorSelectedStyleName';
import interfaceEditorWorkspacePanelModalContent from './interfaceEditorWorkspacePanelModalContent';
import modules from './modules';

const reducer = combineReducers({
  interfaceEditorComponent,
  interfaceEditorSelectedElementPath,
  interfaceEditorCanvasDevice,
  interfaceEditorCanvasOrientation,
  interfaceEditorCanvasZoom,
  interfaceEditorDirectSelectModeEnabled,
  interfaceEditorFullscreenPreview,
  interfaceEditorPropsEditorSelectedPropName,
  interfaceEditorStyleSheetEditorSelectedStyleName,
  interfaceEditorWorkspacePanelModalContent,
  modules,
});

export default reducer;
