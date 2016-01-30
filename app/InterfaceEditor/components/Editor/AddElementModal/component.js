import React, { Component, Modal, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import elementTypes from '../../../constants/elementTypes';
import styles from './styles';

export default class AddElementModal extends Component {
  static propTypes = {
    onPressElementType: PropTypes.func.isRequired,
    onPressOutsideModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
  }

  renderElementType(elementType) {
    const { onPressElementType } = this.props;

    return (
      <TouchableOpacity key={elementType.name} onPress={() => onPressElementType(elementType)} style={styles.elementType}>
        <Text style={styles.elementTypeLabel}>
          {elementType.name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      onPressOutsideModal,
      visible,
    } = this.props;

    return (
      <Modal animated transparent visible={visible}>
        <TouchableOpacity onPress={() => onPressOutsideModal()} style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.headerSection}>
              <Text style={styles.headerLabel}>
                Add Element
              </Text>
            </View>
            <View style={styles.contentSection}>
              {elementTypes.map(elementType => this.renderElementType(elementType))}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}