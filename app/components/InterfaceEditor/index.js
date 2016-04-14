import React, { Component, StatusBar, View } from 'react-native';
import InterfaceEditorToolbar from '../InterfaceEditorToolbar';
import InterfaceEditorWorkspace from '../InterfaceEditorWorkspace';
import InterfaceEditorStyleEditor from '../InterfaceEditorStyleEditor';
import InterfaceEditorTreeNavigator from '../InterfaceEditorTreeNavigator';
import WindowLayer from '../WindowLayer';
import styles from './styles';

export default class InterfaceEditor extends Component {
  render() {
    return (
      <WindowLayer
        windows={[
          {
            contents: <InterfaceEditorTreeNavigator/>,
            key: 'treeNavigator',
            visible: true,
          },
          {
            contents: <InterfaceEditorStyleEditor/>,
            key: 'styleEditor',
            visible: true,
          },
        ]}
      >
        <StatusBar hidden/>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <InterfaceEditorToolbar/>
            <InterfaceEditorWorkspace/>
          </View>
        </View>
      </WindowLayer>
    );
  }
}
