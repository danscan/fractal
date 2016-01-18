import React, { Component, PropTypes, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import NavigationBar from './NavigationBar';
import styles from './styles';

export default class EditorInspector extends Component {
  static propTypes = {
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
    return (
      <View style={styles.scene}/>
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
