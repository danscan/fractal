import { PropTypes } from 'react-native';
import Baobab from 'baobab';

export const treeCursorPropType = PropTypes.instanceOf(Baobab);

export const treePathPropType = PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
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
