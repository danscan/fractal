import React, { Component, Modal, PropTypes } from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';
import Router from './router';
import NavigationBar from './NavigationBar';
import styles from './styles';

export default class TreeNavigator extends Component {
  static propTypes = {
    showingTree: PropTypes.bool.isRequired,
    peekBehindTree: PropTypes.bool.isRequired,
    tree: PropTypes.any.isRequired,
  }

  renderNavigationBar() {
    return (
      <NavigationBar/>
    );
  }

  render() {
    const {
      showingTree,
      peekBehindTree,
      tree,
    } = this.props;
    const containerStyle = [
      styles.container,
      peekBehindTree ? { opacity: 0 } : {},
    ];

    return (
      <Modal animated transparent visible={showingTree}>
        <ExNavigator
          initialRoute={Router.getElementRoute(tree)}
          renderNavigationBar={() => this.renderNavigationBar()}
          sceneStyle={styles.scene}
          style={containerStyle}
        />
      </Modal>
    );
  }
}
