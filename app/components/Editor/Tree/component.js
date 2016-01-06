import React, { Component, PropTypes, Text, View } from 'react-native';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    showingTree: PropTypes.bool.isRequired,
  }

  render() {
    const { showingTree } = this.props;
    const containerStyle = showingTree
                          ? styles.container
                          : [styles.container, { opacity: 0 }];

    return (
      <View pointerEvents="none" style={styles.wrapper}>
        <View pointerEvents="none" style={styles.maximum}/>
        <View style={containerStyle}>
          <Text style={{ color: '#666', fontFamily: 'Avenir', fontSize: 20 }}>
            Tree
          </Text>
        </View>
      </View>
    );
  }
}
