import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import addElementButtonImage from '../../assets/img/addElementButton.png';
import redoButtonImage from '../../assets/img/redoButton.png';
import undoButtonImage from '../../assets/img/undoButton.png';
import { elementPropType } from '../../constants/propTypes';
import styles from './styles';

export default class InterfaceEditorToolbar extends Component {
  static propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    isShowingAddElementPanel: PropTypes.bool.isRequired,
    onPressAddElement: PropTypes.func.isRequired,
    onPressRedo: PropTypes.func.isRequired,
    onPressUndo: PropTypes.func.isRequired,
    selectedElement: elementPropType.isRequired,
  };

  renderRedoButton() {
    const {
      canRedo,
      onPressRedo,
    } = this.props;

    return this.renderImageButton({
      buttonImageSource: redoButtonImage,
      buttonImageStyle: styles.buttonImage,
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
      buttonImageStyle: styles.buttonImage,
      buttonStyle: styles.button,
      enabled: canUndo,
      onPress: onPressUndo,
    });
  }

  renderAddElementButton() {
    const {
      isShowingAddElementPanel,
      onPressAddElement,
      selectedElement,
    } = this.props;
    const selectedElementType = selectedElement.get('type');
    // Add element button should be disabled if selected element type is Text.
    // Text elements can only have other Text elements as children, and text
    // children should be edited using the Inspector's Text Editor tab instead.
    const addElementButtonShouldBeEnabled = selectedElementType !== Text;

    return this.renderImageButton({
      buttonImageSource: addElementButtonImage,
      buttonImageStyle: styles.buttonImage,
      buttonStyle: [
        styles.button,
        (isShowingAddElementPanel ? styles.buttonActive : {}),
      ],
      onPress: onPressAddElement,
      enabled: addElementButtonShouldBeEnabled,
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
          <View style={[styles.buttonsGroup, styles.addElementButtonsGroup]}>
            {this.renderAddElementButton()}
          </View>
        </View>
        <View style={styles.rightButtons}>
          <View style={[styles.buttonsGroup, styles.undoRedoButtonsGroup]}>
            {this.renderUndoButton()}
            {this.renderRedoButton()}
          </View>
        </View>
      </View>
    );
  }
}
