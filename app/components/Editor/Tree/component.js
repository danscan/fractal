import React, { Component, Modal, PropTypes, Text, View } from 'react-native';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    showingTree: PropTypes.bool.isRequired,
  }

  render() {
    const { showingTree } = this.props;

    return (
      <Modal animated transparent visible={showingTree}>
        <View style={styles.container}>
          <Text style={{ color: '#666', fontFamily: 'Avenir', fontSize: 20 }}>
            Tree
          </Text>
        </View>
      </Modal>
    );
  }
}
