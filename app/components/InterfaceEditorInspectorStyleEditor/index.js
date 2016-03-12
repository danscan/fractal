import React, { Component, View } from 'react-native';
import InterfaceEditorInspectorStyleEditorInput from '../InterfaceEditorInspectorStyleEditorInput';
import styles from './styles';

export default class InterfaceEditorInspectorStyleEditor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InterfaceEditorInspectorStyleEditorInput/>
      </View>
    );
  }
}
