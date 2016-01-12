import React, { createElement, Component, Navigator, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { routePropType } from '../../constants/propTypes';
import styles from './styles';

// (Value Constants)
const PUSH_ROUTE = 'PUSH_ROUTE';
const POP_ROUTE = 'POP_ROUTE';
const RESET_ROUTE_STACK = 'RESET_ROUTE_STACK';

export default class _Navigator extends Component {
  static propTypes = {
    // configureScene: PropTypes.func,
    navigationBarStyle: View.propTypes.style,
    popRoute: PropTypes.func.isRequired,
    pushRoute: PropTypes.func.isRequired,
    resetRouteStack: PropTypes.func.isRequired,
    rightButton: PropTypes.element,
    routeStack: ImmutablePropTypes.listOf(routePropType).isRequired,
    sceneStyle: View.propTypes.style,
    shouldUpdateWhenRouteStackIsReset: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    configureScene: () => Navigator.SceneConfigs.FloatFromRight,
    routeStack: [],
    resetRoutes: () => {},
    shouldUpdateWhenRouteStackIsReset: true,
  }

  constructor(props) {
    super(props);

    this._navigator = null;
    this.state = {
      currentRouteStack: props.routeStack,
    };
  }

  componentWillReceiveProps(nextProps) {
    const nextRouteStack = nextProps.routeStack;
    const currentRouteStack = this.state.currentRouteStack;
    const routeStackOperation = this.diffRouteStacks(nextRouteStack, currentRouteStack);

    if (routeStackOperation) {
      this.setState({ currentRouteStack: nextRouteStack });

      if (PUSH_ROUTE === routeStackOperation) {
        const currentRoute = nextRouteStack.last();

        this._navigator.push(currentRoute);
      }

      if (POP_ROUTE === routeStackOperation) {
        this._navigator.pop();
      }

      if (RESET_ROUTE_STACK === routeStackOperation) {
        this._navigator.immediatelyResetRouteStack(nextRouteStack);
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    const { shouldUpdateWhenRouteStackIsReset } = nextProps;
    const nextRouteStack = nextProps.routeStack;
    const { currentRouteStack } = this.state;
    const nextRouteStackIsReset = nextRouteStack.count() < 1 && currentRouteStack.count() > 0;

    if (nextRouteStackIsReset) {
      return shouldUpdateWhenRouteStackIsReset;
    }

    return true;
  }

  getNavigationBarTitle(route, _, index) {
    const { routeStack } = this.props;
    const {
      getTitle,
      renderTitle,
    } = routeStack.last();

    if (getTitle) {
      return (
        <View style={styles.navigationBarTitle}>
          <Text style={styles.navigationBarTitleLabel}>
            {getTitle(this, index, routeStack)}
          </Text>
        </View>
      );
    }

    return !!renderTitle
      ? renderTitle(this, index, routeStack)
      : null;
  }

  getNavigationBarLeftButton(route, _, index) {
    const {
      popRoute,
      routeStack,
    } = this.props;
    const {
      getBackButtonTitle,
      renderBackButton,
      renderLeftButton,
    } = routeStack.last();
    const canRenderBackButton = index > 0;

    if (canRenderBackButton) {
      return (
        <TouchableOpacity
          onPress={() => popRoute()}
          style={[styles.navigationBarButton, styles.navigationBarBackButton]}
        >
          <Text style={styles.navigationBarBackButtonLabel}>
            {getBackButtonTitle ? getBackButtonTitle(this, index, routeStack) : 'Back'}
          </Text>
        </TouchableOpacity>
      );
    } else if (canRenderBackButton && renderBackButton) {
      return renderBackButton(this, index, routeStack);
    }

    return !!renderLeftButton
      ? renderLeftButton(this, index, routeStack)
      : null;
  }

  getNavigationBarRightButton(route, _, index) {
    const {
      rightButton,
      routeStack,
    } = this.props;
    const { renderRightButton } = routeStack.last();

    return !!renderRightButton
      ? renderRightButton(this, index, routeStack)
      : rightButton;
  }

  getNavigationBar() {
    const {
      navigationBarStyle,
    } = this.props;

    return (
      <Navigator.NavigationBar
        routeMapper={{
          Title: (...args) => this.getNavigationBarTitle(...args),
          LeftButton: (...args) => this.getNavigationBarLeftButton(...args),
          RightButton: (...args) => this.getNavigationBarRightButton(...args),
        }}
        style={[styles.navigationBar, navigationBarStyle]}
      />
    );
  }

  pushRoute(route) {
    return this.props.pushRoute(route);
  }

  popRoute() {
    return this.props.popRoute();
  }

  resetRouteStack(routes) {
    return this.props.resetRouteStack(routes);
  }

  /**
   * diffRouteStacks
   * Takes new and current route stacks, and returns
   * the observed change operation.
   *
   * @returns enum(PUSH_ROUTE, POP_ROUTE, RESET_ROUTE_STACK)?
   */
  diffRouteStacks(nextRouteStack, currentRouteStack) {
    const pushedRoutes = nextRouteStack.toSet().subtract(currentRouteStack);
    const poppedRoutes = currentRouteStack.toSet().subtract(nextRouteStack);

    const resettingRouteStack = currentRouteStack.count() < 1 || pushedRoutes.count() > 1 || poppedRoutes.count() > 1;
    const pushingRoute = !resettingRouteStack && pushedRoutes.count() > 0;
    const poppingRoute = !resettingRouteStack && !pushingRoute && poppedRoutes.count() > 0;

    if (pushingRoute) {
      return PUSH_ROUTE;
    }

    if (poppingRoute) {
      return POP_ROUTE;
    }

    if (resettingRouteStack) {
      return RESET_ROUTE_STACK;
    }

    return null;
  }

  /**
   * handleRouteFocus
   * Takes newly-focused route, and looks it up in routeStack.
   * Handles popping route from routeStack state if it was popped
   * from navgator via gesture (or direct navigator.pop call)
   */
  handleRouteFocus(route) {
    const {
      popRoute,
    } = this.props;

    const routeStack = this.state.currentRouteStack;
    const routeStackIsEmpty = routeStack.count() === 0;
    const routeStackLastIndex = !routeStackIsEmpty
                              ? routeStack.count() - 1
                              : 0;
    const routeStackFocusRouteIndex = routeStack.indexOf(route);
    const routeStackFocusRouteExistsInRouteStack = routeStackFocusRouteIndex >= 0;
    const poppedRoute = !routeStackIsEmpty
                      && routeStackFocusRouteExistsInRouteStack
                      && routeStackFocusRouteIndex < routeStackLastIndex;

    if (poppedRoute) {
      return popRoute();
    }
  }

  // configureScene(route, _, index) {
  //   const {
  //     configureScene,
  //     routeStack,
  //   } = this.props;
  //
  //   return configureScene(this, index, routeStack);
  // }

  renderScene(route, _, index) {
    const { routeStack } = this.props;
    const sceneClass = route.getSceneClass
                      ? route.getSceneClass(this, index, routeStack)
                      : null;

    if (sceneClass) {
      return createElement(sceneClass, { navigator: this });
    }

    return route.renderScene
      ? route.renderScene(this, index, routeStack)
      : null;
  }

  render() {
    const {
      sceneStyle,
    } = this.props;

    return (
      <Navigator
        ref={(navigator) => this._navigator = navigator}
        initialRouteStack={this.state.currentRouteStack.toArray()}
        navigationBar={this.getNavigationBar()}
        // configureScene={(...args) => this.configureScene(...args)}
        renderScene={(...args) => this.renderScene(...args)}
        onDidFocus={(route) => this.handleRouteFocus(route)}
        sceneStyle={[styles.scene, sceneStyle]}
        style={styles.container}
      />
    );
  }
}
