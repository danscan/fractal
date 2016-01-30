import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import beginFullScreenPreviewButtonImage from '../../../assets/img/beginFullScreenPreviewButton.png';
import { portraitOrientation } from '../../../constants/canvasOrientations';
import { canvasDevicePropType, canvasOrientationPropType } from '../../../constants/propTypes';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    canvasDevice: canvasDevicePropType.isRequired,
    canvasOrientation: canvasOrientationPropType.isRequired,
    canvasZoom: PropTypes.number.isRequired,
    onPressBeginFullScreenPreview: PropTypes.func.isRequired,
    onPressCanvasOrientation: PropTypes.func.isRequired,
  }

  renderBeginFullScreenPreviewButton() {
    const { onPressBeginFullScreenPreview } = this.props;

    return (
      <TouchableOpacity onPress={onPressBeginFullScreenPreview} style={styles.button}>
        <Image source={beginFullScreenPreviewButtonImage} style={styles.buttonImage}/>
      </TouchableOpacity>
    );
  }

  renderZoomButton() {
    const { canvasZoom } = this.props;

    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>
          Zoom
        </Text>
        <Text style={[styles.buttonLabel, styles.buttonValueLabel]}>
          {canvasZoom * 100}%
        </Text>
      </TouchableOpacity>
    );
  }

  renderCanvasDeviceButton() {
    const { canvasDevice } = this.props;

    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonLabel}>
          Canvas Device
        </Text>
        <Text style={[styles.buttonLabel, styles.buttonValueLabel]}>
          {canvasDevice.get('name')}
        </Text>
      </TouchableOpacity>
    );
  }

  renderCanvasOrientationButton() {
    const {
      canvasOrientation,
      onPressCanvasOrientation,
    } = this.props;

    return (
      <TouchableOpacity onPress={onPressCanvasOrientation} style={styles.button}>
        <Text style={styles.buttonLabel}>
          Canvas Orientation
        </Text>
        <Text style={[styles.buttonLabel, styles.buttonValueLabel]}>
          {canvasOrientation === portraitOrientation ? 'Portrait' : 'Landscape'}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBeginFullScreenPreviewButton()}
        {this.renderZoomButton()}
        {this.renderCanvasDeviceButton()}
        {this.renderCanvasOrientationButton()}
      </View>
    );
  }
}
