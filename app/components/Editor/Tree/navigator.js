import React, { Component, Modal, PropTypes } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Router from './router';
import styles from './styles';

export default class TreeNavigator extends Component {
  static propTypes = {
    showingTree: PropTypes.bool.isRequired,
    tree: PropTypes.any.isRequired,
  }

  render() {
    const {
      showingTree,
      tree,
    } = this.props;

    return (
      <Modal animated transparent visible={showingTree}>
        <ExNavigator
          initialRoute={Router.getElementRoute(tree)}
          style={styles.container}
          sceneStyle={{ paddingTop: 64 }}
        />
      </Modal>
    );
  }
}
