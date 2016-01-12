import { PropTypes } from 'react-native';

export const elementPropType = PropTypes.shape({
  displayName: PropTypes.string,
  type: PropTypes.func.isRequired,
  props: PropTypes.object,
});

export const elementIndexPropType = PropTypes.arrayOf(
  PropTypes.number,
);

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
