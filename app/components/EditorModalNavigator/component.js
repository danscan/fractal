import React, { Component, Modal, PropTypes } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { routePropType } from '../../constants/propTypes';
import Navigator from '../Navigator';
import styles from './styles';

export default class EditorModalNavigator extends Component {
  static propTypes = {
    peekBehindEditorModal: PropTypes.bool.isRequired,
    popRoute: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    resetRouteStack: PropTypes.func.isRequired,
    routeStack: ImmutablePropTypes.listOf(routePropType).isRequired,
  }

  render() {
    const {
      peekBehindEditorModal,
      popRoute,
      pushRoute,
      resetRouteStack,
      routeStack,
    } = this.props;
    const routeStackIsEmpty = routeStack.count() < 1;
    const containerStyle = [
      styles.container,
      peekBehindEditorModal ? { opacity: 0 } : {},
    ];

    return (
      <Modal animated transparent visible={!routeStackIsEmpty}>
        <Navigator
          popRoute={() => popRoute()}
          pushRoute={(route) => pushRoute(route)}
          resetRouteStack={(routes) => resetRouteStack(routes)}
          routeStack={routeStack}
          sceneStyle={styles.scene}
          shouldUpdateWhenRouteStackIsReset={false}
          style={containerStyle}
        />
      </Modal>
    );
  }
}
