import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import beginFullScreenPreviewButtonImage from '../../../assets/img/beginFullScreenPreviewButton.png';
import redoButtonImage from '../../../assets/img/redoButton.png';
import undoButtonImage from '../../../assets/img/undoButton.png';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    onPressbeginFullScreenPreview: PropTypes.func.isRequired,
    onPressRedo: PropTypes.func.isRequired,
    onPressUndo: PropTypes.func.isRequired,
  }

  renderRedoButton() {
    const {
      canRedo,
      onPressRedo,
    } = this.props;

    return this.renderImageButton({
      buttonImageSource: redoButtonImage,
      buttonImageStyle: styles.redoButtonImage,
      buttonStyle: styles.button,
      enabled: canRedo,
      onPress: onPressRedo,
    });
  }

  renderUndoButton() {
    const {
      canUndo,
      onPressUndo,
    } = this.props;

    return this.renderImageButton({
      buttonImageSource: undoButtonImage,
      buttonImageStyle: styles.undoButtonImage,
      buttonStyle: styles.button,
      enabled: canUndo,
      onPress: onPressUndo,
    });
  }

  renderbeginFullScreenPreviewButton() {
    const { onPressbeginFullScreenPreview } = this.props;

    return this.renderImageButton({
      buttonImageSource: beginFullScreenPreviewButtonImage,
      buttonImageStyle: styles.beginFullScreenPreviewButtonImage,
      buttonStyle: styles.button,
      onPress: onPressbeginFullScreenPreview,
    });
  }

  renderImageButton({ buttonImageSource, buttonImageStyle, buttonStyle, enabled = true, onPress }) {
    let activeOpacity;
    let _onPress;
    let _buttonImageStyle;

    if (enabled) {
      _onPress = onPress;
      _buttonImageStyle = buttonImageStyle;
    } else {
      activeOpacity = 1;
      _onPress = () => {};
      _buttonImageStyle = [buttonImageStyle, styles.buttonImageDisabled];
    }

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => _onPress()}
        style={buttonStyle}
      >
        <Image source={buttonImageSource} style={_buttonImageStyle}/>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftButtons}>
          {this.renderUndoButton()}
          {this.renderRedoButton()}
        </View>
        <View style={styles.rightButtons}>
          {this.renderbeginFullScreenPreviewButton()}
        </View>
      </View>
    );
  }
}
