import React, { Component, StatusBarIOS, View } from 'react-native';
import Toolbar from '../Toolbar';
import Workspace from '../Workspace';
import Inspector from '../Inspector';
import styles from './styles';

export default class Editor extends Component {
  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <Toolbar/>
          <Workspace/>
        </View>
        <View style={styles.inspectorSection}>
          <Inspector/>
        </View>
      </View>
    );
  }
}
