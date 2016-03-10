import React, { Component, Image, Modal, PropTypes, TouchableOpacity, View } from 'react-native';
import { elementPropType } from '../../constants/propTypes';
import closeButtonImage from '../../assets/img/closeButton.png';
import InterfaceEditorElement from '../InterfaceEditorElement';
import styles from './styles';

export default class FullScreenPreview extends Component {
  static propTypes = {
    onPressClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
    element: elementPropType.isRequired,
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
