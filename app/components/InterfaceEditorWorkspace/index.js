import React, { View } from 'react-native';
import canvasDevices from '../../constants/canvasDevices';
import { portraitOrientation } from '../../constants/canvasOrientations';
// import Toolbar from './Toolbar';
import * as Element from '../InterfaceEditorElement';
// import FullScreenPreview from './FullScreenPreview';
// import BreadCrumbBar from './BreadCrumbBar';
import styles from './styles';

// -- MODEL
import { List } from 'immutable';
const initialState = {
  canvasDevice: canvasDevices.last(),
  canvasOrientation: portraitOrientation,
  canvasZoom: 1,
  selectedElementPath: new List,
};
export function init({ tree }) {
  return {
    ...initialState,
    element: Element.init({ tree }),
  };
}

// -- UPDATE
export function update(state) {
  return state;
}

// -- VIEW
export function view({ state }) {
  return (
    <View style={styles.container}>
      <View style={styles.contentSection}>
        {renderPreviewSection(state)}
      </View>
      {/* <Toolbar/> */}
      {/* <BreadCrumbBar/> */}
      {/* this.renderFullScreenPreview() */}
    </View>
  );
}

export function renderPreviewSection({
  canvasDevice,
  canvasOrientation,
  canvasZoom,
  element,
}) {
  const previewElementWidth = canvasOrientation === portraitOrientation
                            ? canvasDevice.get('width')
                            : canvasDevice.get('height');
  const previewElementHeight = canvasOrientation === portraitOrientation
                            ? canvasDevice.get('height')
                            : canvasDevice.get('width');
  const previewElementWrapperStyle = [
    styles.previewElementWrapper,
    {
      width: previewElementWidth,
      height: previewElementHeight,
      transform: [
        { scale: canvasZoom },
      ],
    },
  ];

  return (
    <View style={styles.previewSection}>
      <View style={previewElementWrapperStyle}>
        {Element.view({ state: element })}
      </View>
    </View>
  );
}
