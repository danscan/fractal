import React, { Component, View } from 'react-native';
import InterfaceEditorToolbar from '../InterfaceEditorToolbar';
import InterfaceEditorWorkspace from '../InterfaceEditorWorkspace';
// import InterfaceEditorInspector from '../InterfaceEditorInspector';
import styles from './styles';

export default class InterfaceEditor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <InterfaceEditorToolbar/>
          <InterfaceEditorWorkspace/>
        </View>
        <View style={styles.inspectorSection}>
          {/* <InterfaceEditorInspector/> */}
        </View>
      </View>
    );
  }
}
