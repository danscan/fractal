import React, { Component, Modal, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import elementTypes from '../../../constants/elementTypes';
import styles from './styles';

export default class AddElementModal extends Component {
  static propTypes = {
    onPressElementType: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
  }

  render() {
    const {
      onPressElementType,
      visible,
    } = this.props;

    return (
      <Modal animated transparent visible={visible}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <View style={styles.headerSection}>
              <Text style={styles.headerLabel}>
                Add Element
              </Text>
            </View>
            <View style={styles.contentSection}>
              {elementTypes.map(elementType => (
                <TouchableOpacity onPress={() => onPressElementType(elementType)}>
                  <Text>{elementType.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}
