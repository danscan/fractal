import { PropTypes } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';

export const treePathPropType = ImmutablePropTypes.listOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
);

export const elementPathPropType = ImmutablePropTypes.listOf(
  PropTypes.number,
);

export const elementPropType = PropTypes.shape({
  displayName: PropTypes.string,
  type: PropTypes.func.isRequired,
  props: PropTypes.object,
});

export const routePropType = PropTypes.shape({
  getTitle: PropTypes.func, // (navigator, index, routeStack) => ?string
  renderTitle: PropTypes.func, // (navigator, index, routeStack) => ?Component
  renderLeftButton: PropTypes.func, // (navigator, index, routeStack) => ?Component
  renderRightButton: PropTypes.func, // (navigator, index, routeStack) => ?Component
  getBackButtonTitle: PropTypes.func, // (navigator, index, routeStack) => ?string
  renderBackButton: PropTypes.func, // (navigator, index, routeStack) => ?Component
  getSceneClass: PropTypes.func, // (navigator, index, routeStack) => typeof Component
  configureScene: PropTypes.func, // (navigator, index, routeStack) => one of Navigator.SceneConfigs
  renderScene: PropTypes.func, // (navigator, index, routeStack) => typeof Component
});
