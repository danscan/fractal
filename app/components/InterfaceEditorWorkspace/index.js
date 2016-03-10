import React, { Component, PropTypes, StatusBarIOS, View } from 'react-native';
import { canvasDevicePropType, canvasOrientationPropType, elementPropType, elementPathPropType } from '../../constants/propTypes';
import { portraitOrientation } from '../../constants/canvasOrientations';
import InterfaceEditorWorkspaceToolbar from '../InterfaceEditorWorkspaceToolbar';
import InterfaceEditorElement from '../InterfaceEditorElement';
import InterfaceEditorFullscreenPreview from '../InterfaceEditorFullscreenPreview';
import InterfaceEditorWorkspaceBreadcrumbBar from '../InterfaceEditorWorkspaceBreadcrumbBar';
import styles from './styles';

export default class InterfaceEditorWorkspace extends Component {
  static propTypes = {
    beginFullScreenPreview: PropTypes.func.isRequired,
    canvasDevice: canvasDevicePropType,
    canvasOrientation: canvasOrientationPropType.isRequired,
    canvasZoom: PropTypes.number.isRequired,
    endFullScreenPreview: PropTypes.func.isRequired,
    fullScreenPreview: PropTypes.bool.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    treeRootElement: elementPropType.isRequired,
  };

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  renderFullScreenPreview() {
    const {
      endFullScreenPreview,
      fullScreenPreview,
      treeRootElement,
    } = this.props;

    return (
      <InterfaceEditorFullscreenPreview
        element={treeRootElement}
        visible={fullScreenPreview}
        onPressClose={endFullScreenPreview}
      />
    );
  }

  renderPreviewSection() {
    const {
      canvasDevice,
      canvasOrientation,
      canvasZoom,
      treeRootElement,
      selectedElementPath,
    } = this.props;
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
          <InterfaceEditorElement element={treeRootElement} callOutPath={selectedElementPath}/>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentSection}>
          {this.renderPreviewSection()}
        </View>
        <InterfaceEditorWorkspaceToolbar/>
        <InterfaceEditorWorkspaceBreadcrumbBar/>
        {this.renderFullScreenPreview()}
      </View>
    );
  }
}
