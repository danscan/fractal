import { createSelector } from 'reselect';
import { Map } from 'immutable';
import { StyleSheet } from 'react-native';
import { interfaceEditorComponent } from './interfaceEditorComponent';

export function interfaceEditorComponentStyleSheetStyleMap(state) {
  return interfaceEditorComponent(state).styleSheet;
}

export const interfaceEditorComponentStyleSheet = createSelector(
  interfaceEditorComponentStyleSheetStyleMap,
  (styleSheetStyleMapState) => StyleSheet.create(styleSheetStyleMapState.toJS()),
);

export const interfaceEditorComponentStyleSheetStyleValueMapByStyleName = (styleName) => createSelector(
  interfaceEditorComponentStyleSheetStyleMap,
  (styleSheetStyleMapState) => new Map(styleSheetStyleMapState.get(styleName)),
);
