import React, { Component, Modal, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import elementTypes from '../../../constants/elementTypes';
import styles from './styles';

export default class AddElementModal extends Component {
  static propTypes = {
    onPressElementType: PropTypes.func.isRequired,
    onPressOutsideModal: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
  };

  renderHeaderSection() {
    return (
      <View style={styles.headerSection}>
        <Text style={styles.headerLabel}>
          Add Element
        </Text>
      </View>
    );
  }

  renderContentSection() {
    return (
      <View style={styles.contentSection}>
        {elementTypes.map(elementType => this.renderElementType(elementType))}
      </View>
    );
  }

  renderElementType(elementType) {
    const { onPressElementType } = this.props;
    const elementTypeName = elementType.get('name');

    return (
      <TouchableOpacity key={elementTypeName} onPress={() => onPressElementType(elementType)} style={styles.elementType}>
        <Text style={styles.elementTypeLabel}>
          {elementTypeName}
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
            {this.renderHeaderSection()}
            {this.renderContentSection()}
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}
