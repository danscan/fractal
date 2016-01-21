import React, { Component, PropTypes, View } from 'react-native';
import { elementPropType, elementPathPropType, routePropType } from '../../constants/propTypes';
import NavigationBar from './NavigationBar';
import styles from './styles';

export default class EditorInspector extends Component {
  static propTypes = {
    currentRoute: routePropType.isRequired,
    previousRoute: routePropType,
    onPressBack: PropTypes.func,
    selectedElement: elementPropType.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    selectedElementTitle: PropTypes.string.isRequired,
  }

  renderNavigationBar() {
    const {
      previousRoute,
      onPressBack,
      selectedElementTitle,
    } = this.props;

    return (
      <NavigationBar
        onPressBack={previousRoute ? onPressBack : null}
        title={selectedElementTitle}
      />
    );
  }

  renderScene() {
    const { currentRoute } = this.props;

    return (
      <View style={styles.scene}>
        {currentRoute.renderScene()}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNavigationBar()}
        {this.renderScene()}
      </View>
    );
  }
}
