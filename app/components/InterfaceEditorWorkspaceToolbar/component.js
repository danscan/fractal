import React, { Component, PropTypes } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import beginFullScreenPreviewButtonImage from '../../assets/img/beginFullScreenPreviewButton.png';
import zoomInButtonImage from '../../assets/img/zoomInButton.png';
import zoomOutButtonImage from '../../assets/img/zoomOutButton.png';
import canvasDeviceImage from '../../assets/img/canvasDevice.png';
import canvasOrientationImage from '../../assets/img/canvasOrientation.png';
import { portraitOrientation } from '../../constants/canvasOrientations';
import { canvasDevicePropType, canvasOrientationPropType } from '../../constants/propTypes';
import styles from './styles';

export default class InterfaceEditorWorkspaceToolbar extends Component {
  static propTypes = {
    canvasDevice: canvasDevicePropType.isRequired,
    canvasOrientation: canvasOrientationPropType.isRequired,
    canvasZoom: PropTypes.number.isRequired,
    onPressBeginFullScreenPreview: PropTypes.func.isRequired,
    onPressCanvasDevice: PropTypes.func.isRequired,
    onPressCanvasOrientation: PropTypes.func.isRequired,
    setCanvasZoom: PropTypes.func.isRequired,
  };

  renderBeginFullScreenPreviewButton() {
    const { onPressBeginFullScreenPreview } = this.props;

    return (
      <TouchableOpacity onPress={onPressBeginFullScreenPreview} style={styles.column}>
        <Image source={beginFullScreenPreviewButtonImage} style={[styles.buttonImage, styles.beginFullScreenPreviewButtonImage]}/>
      </TouchableOpacity>
    );
  }

  renderCanvasZoomColumn() {
    const {
      canvasZoom,
      setCanvasZoom,
    } = this.props;
    const canvasZoomPercentage = canvasZoom * 100;
    // const canZoomOut = canvasZoomPercentage > 25;
    // const canZoomIn = canvasZoomPercentage < 400;
    const zoomOutValue = canvasZoom - 0.25;
    const zoomInValue = canvasZoom + 0.25;

    return (
      <View style={[styles.column, styles.canvasZoomColumn]}>
        <TouchableOpacity onPress={() => setCanvasZoom(zoomOutValue)} style={styles.button}>
          <Image source={zoomOutButtonImage} style={[styles.buttonImage, styles.zoomOutButtonImage]}/>
        </TouchableOpacity>
        <Text style={[styles.buttonLabel, styles.buttonValueLabel, styles.zoomValueLabel]}>
          {canvasZoomPercentage}%
        </Text>
        <TouchableOpacity onPress={() => setCanvasZoom(zoomInValue)} style={styles.button}>
          <Image source={zoomInButtonImage} style={[styles.buttonImage, styles.zoomInButtonImage]}/>
        </TouchableOpacity>
      </View>
    );
  }

  renderCanvasDeviceButton() {
    const {
      canvasDevice,
      onPressCanvasDevice,
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onPressCanvasDevice(canvasDevice)} style={styles.column}>
        <Image source={canvasDeviceImage} style={[styles.buttonImage, styles.canvasDeviceImage]}/>
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
      <TouchableOpacity onPress={onPressCanvasOrientation} style={styles.column}>
        <Image source={canvasOrientationImage} style={[styles.buttonImage, styles.canvasOrientationImage]}/>
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
        {this.renderCanvasZoomColumn()}
        {this.renderCanvasDeviceButton()}
        {this.renderCanvasOrientationButton()}
      </View>
    );
  }
}
