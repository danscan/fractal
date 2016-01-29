import React, { Component, PropTypes, StatusBarIOS, View } from 'react-native';
import AddElementModal from './AddElementModal';
import Toolbar from '../Toolbar';
import Workspace from '../Workspace';
import Inspector from '../Inspector';
import styles from './styles';

export default class Editor extends Component {
  static propTypes = {
    showAddElementModal: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  render() {
    const { showAddElementModal } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.mainSection}>
          <Toolbar/>
          <Workspace/>
        </View>
        <View style={styles.inspectorSection}>
          <Inspector/>
        </View>
        <AddElementModal visible={showAddElementModal}/>
      </View>
    );
  }
}
