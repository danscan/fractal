import React, { Component, StatusBar, View } from 'react-native';
import { Map } from 'immutable';
import InterfaceEditorToolbar from '../InterfaceEditorToolbar';
import InterfaceEditorWorkspace from '../InterfaceEditorWorkspace';
import InterfaceEditorPropsEditor from '../InterfaceEditorPropsEditor';
import InterfaceEditorStyleSheetEditor from '../InterfaceEditorStyleSheetEditor';
import InterfaceEditorTreeNavigator from '../InterfaceEditorTreeNavigator';
import WindowLayer from '../WindowLayer';
import styles from './styles';

export default class InterfaceEditor extends Component {
  render() {
    return (
      <WindowLayer
        windows={[
          {
            contents: <InterfaceEditorPropsEditor/>,
            initialPosition: new Map({
              x: 20,
              y: 100,

              width: 300,
              height: 290,
            }),
            key: 'propsEditor',
            visible: true,
          },
          {
            contents: <InterfaceEditorTreeNavigator/>,
            key: 'treeNavigator',
            initialPosition: new Map({
              x: 20,
              y: 410,

              width: 300,
              height: 320,
            }),
            visible: true,
          },
          {
            contents: <InterfaceEditorStyleSheetEditor/>,
            key: 'styleSheetEditor',
            initialPosition: new Map({
              x: 690,
              y: 100,

              width: 300,
              height: 600,
            }),
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
