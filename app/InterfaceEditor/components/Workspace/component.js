import React, { Component, Image, Modal, PropTypes, StatusBarIOS, TouchableOpacity, View } from 'react-native';
import { canvasDevicePropType, canvasOrientationPropType, elementPropType, elementPathPropType } from '../../constants/propTypes';
import { portraitOrientation } from '../../constants/canvasOrientations';
import endFullScreenPreviewButtonImage from '../../assets/img/closeButton.png';
import Toolbar from './Toolbar';
import Element from './Element';
import styles from './styles';

export default class Workspace extends Component {
  static propTypes = {
    beginFullScreenPreview: PropTypes.func.isRequired,
    canvasDevice: canvasDevicePropType,
    canvasOrientation: canvasOrientationPropType.isRequired,
    canvasZoom: PropTypes.number.isRequired,
    endFullScreenPreview: PropTypes.func.isRequired,
    fullScreenPreview: PropTypes.bool.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    treeRootElement: elementPropType.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  renderFullScreenPreview() {
    const {
      fullScreenPreview,
      treeRootElement,
    } = this.props;

    return (
      <Modal animated visible={fullScreenPreview}>
        <View style={styles.container}>
          <Element element={treeRootElement}/>
          {this.renderFullScreenPreviewButton()}
        </View>
      </Modal>
    );
  }

  renderFullScreenPreviewButton() {
    const { endFullScreenPreview } = this.props;

    return (
      <TouchableOpacity onPress={() => endFullScreenPreview()} style={styles.endFullScreenPreviewButton}>
        <Image source={endFullScreenPreviewButtonImage} style={styles.endFullScreenPreviewButtonImage}/>
      </TouchableOpacity>
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
          <Element element={treeRootElement} callOutPath={selectedElementPath}/>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Toolbar/>
        <View style={styles.contentSection}>
          {this.renderPreviewSection()}
        </View>
        {this.renderFullScreenPreview()}
      </View>
    );
  }
}
