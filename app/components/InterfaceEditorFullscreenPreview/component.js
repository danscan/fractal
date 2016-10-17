import React, { Component, PropTypes } from 'react';
import { Image, Modal, TouchableOpacity, View } from 'react-native';
import { elementPropType } from '../../constants/propTypes';
import closeButtonImage from '../../assets/img/closeButton.png';
import InterfaceEditorElement from '../InterfaceEditorElement';
import styles from './styles';

export default class InterfaceEditorFullscreenPreview extends Component {
  static propTypes = {
    onPressClose: PropTypes.func.isRequired,
    element: elementPropType.isRequired,
    visible: PropTypes.bool.isRequired,
  };

  renderCloseButton() {
    const { onPressClose } = this.props;

    return (
      <TouchableOpacity onPress={() => onPressClose()} style={styles.closeButton}>
        <Image source={closeButtonImage} style={styles.closeButtonImage}/>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      visible,
      element,
    } = this.props;

    return (
      <Modal animated visible={visible}>
        <View style={styles.container}>
          <InterfaceEditorElement element={element}/>
          {this.renderCloseButton()}
        </View>
      </Modal>
    );
  }
}
