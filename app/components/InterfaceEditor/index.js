import React, { Component, View } from 'react-native';
import InterfaceEditorToolbar from '../InterfaceEditorToolbar';
import InterfaceEditorWorkspace from '../InterfaceEditorWorkspace';
import InterfaceEditorInspector from '../InterfaceEditorInspector';
import WindowLayer from '../WindowLayer';
import styles from './styles';

export default class InterfaceEditor extends Component {
  render() {
    return (
      <WindowLayer
        windows={[
          {
            contents: <View style={{ backgroundColor: '#deedee', flex: 1 }}/>,
            key: 'test',
            visible: true,
          },
        ]}
      >
        <View style={styles.container}>
            <View style={styles.mainSection}>
              <InterfaceEditorToolbar/>
              <InterfaceEditorWorkspace/>
            </View>
            <View style={styles.inspectorSection}>
              <InterfaceEditorInspector/>
            </View>
        </View>
      </WindowLayer>
    );
  }
}
