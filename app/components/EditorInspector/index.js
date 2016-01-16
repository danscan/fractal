import React, { Component, View } from 'react-native';
import styles from './styles';

export default class EditorInspector extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.navigationBar}/>
        <View style={styles.scene}/>
      </View>
    );
  }
}
