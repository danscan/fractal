import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import beginPreviewButtonImage from '../../assets/img/beginPreviewButton.png';
import redoButtonImage from '../../assets/img/redoButton.png';
import undoButtonImage from '../../assets/img/undoButton.png';
import styles from './styles';

export default class EditorToolbar extends Component {
  static propTypes = {
    canRedo: PropTypes.bool.isRequired,
    canUndo: PropTypes.bool.isRequired,
    onPressBeginPreview: PropTypes.func.isRequired,
    onPressRedo: PropTypes.func.isRequired,
    onPressUndo: PropTypes.func.isRequired,
  }

  renderRedoButton() {
    const {
      canRedo,
      onPressRedo,
    } = this.props;
    const buttonStyle = [
      styles.button,
      !canRedo
        ? styles.buttonDisabled
        : null,
    ];

    return (
      <TouchableOpacity onPress={() => onPressRedo()} style={buttonStyle}>
        <Image source={redoButtonImage} style={styles.redoButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderUndoButton() {
    const {
      canUndo,
      onPressUndo,
    } = this.props;
    const buttonStyle = [
      styles.button,
      !canUndo
        ? styles.buttonDisabled
        : null,
    ];

    return (
      <TouchableOpacity onPress={() => onPressUndo()} style={buttonStyle}>
        <Image source={undoButtonImage} style={styles.undoButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderBeginPreviewButton() {
    const { onPressBeginPreview } = this.props;

    return (
      <TouchableOpacity onPress={() => onPressBeginPreview()} style={styles.button}>
        <Image source={beginPreviewButtonImage} style={styles.beginPreviewButtonImage}/>
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
          {this.renderBeginPreviewButton()}
        </View>
      </View>
    );
  }
}
