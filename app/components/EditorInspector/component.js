import React, { Component, PropTypes, ScrollView, View } from 'react-native';
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
      onPressBack,
      selectedElementTitle,
    } = this.props;

    return (
      <NavigationBar
        onPressBack={onPressBack}
        title={selectedElementTitle}
      />
    );
  }

  renderScene() {
    const { currentRoute } = this.props;

    return (
      <ScrollView style={styles.scene}>
        {currentRoute.renderScene()}
      </ScrollView>
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
