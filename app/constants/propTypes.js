import { PropTypes } from 'react-native';

export const elementPropType = PropTypes.shape({
  displayName: PropTypes.string,
  type: PropTypes.func.isRequired,
  props: PropTypes.object,
});

export const navigatorRoutePropType = PropTypes.shape({
  getTitle: PropTypes.func, // (navigator, index, navigationState) => ?string
  renderTitle: PropTypes.func, // (navigator, index, navigationState) => ?Component
  renderLeftButton: PropTypes.func, // (navigator, index, navigationState) => ?Component
  renderRightButton: PropTypes.func, // (navigator, index, navigationState) => ?Component
  getBackButtonTitle: PropTypes.func, // (navigator, index, navigationState) => ?string
  renderBackButton: PropTypes.func, // (navigator, index, navigationState) => ?Component
  getSceneClass: PropTypes.func, // (navigator, index, navigationState) => typeof Component
  configureScene: PropTypes.func, // (navigator, index, navigationState) => one of Navigator.SceneConfigs
  renderScene: PropTypes.func, // (navigator, index, navigationState) => typeof Component
});
