import React, { Component, Modal, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { routePropType } from '../../constants/propTypes';
import CloseEditorModalButton from './CloseEditorModalButton';
import Navigator from '../Navigator';
import styles from './styles';

export default class EditorModalNavigator extends Component {
  static propTypes = {
    popRoute: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    resetRouteStack: PropTypes.func.isRequired,
    routeStack: ImmutablePropTypes.listOf(routePropType).isRequired,
  }

  render() {
    const {
      popRoute,
      pushRoute,
      resetRouteStack,
      routeStack,
    } = this.props;
    const routeStackIsEmpty = routeStack.count() < 1;

    return (
      <Modal animated transparent visible={!routeStackIsEmpty}>
        <View style={styles.container}>
          <Navigator
            popRoute={() => popRoute()}
            pushRoute={(route) => pushRoute(route)}
            resetRouteStack={(routes) => resetRouteStack(routes)}
            rightButton={<CloseEditorModalButton/>}
            routeStack={routeStack}
            sceneStyle={styles.scene}
            shouldUpdateWhenRouteStackIsReset={false}
          />
        </View>
      </Modal>
    );
  }
}
