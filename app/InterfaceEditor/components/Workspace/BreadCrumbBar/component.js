import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { breadCrumbElementsMapPropType } from '../../../constants/propTypes';
import elementDisplayNameByElement from '../../../utils/elementDisplayNameByElement';
import styles from './styles';

export default class BreadCrumbBar extends Component {
  static propTypes = {
    onPressElement: PropTypes.func.isRequired,
    selectedElementBreadCrumbElements: breadCrumbElementsMapPropType.isRequired,
  };

  renderBreadCrumbElement(element, elementPath) {
    const { onPressElement } = this.props;
    const elementDisplayName = elementDisplayNameByElement(element);

    return (
      <TouchableOpacity key={elementPath.join()} onPress={() => onPressElement(elementPath)} style={styles.breadCrumbElement}>
        <Text style={styles.breadCrumbElementLabel}>
          {elementDisplayName}
        </Text>
        <View style={styles.breadCrumbElementPoint}/>
      </TouchableOpacity>
    );
  }

  render() {
    const { selectedElementBreadCrumbElements } = this.props;

    return (
      <View style={styles.container}>
        {selectedElementBreadCrumbElements.map((element, elementPath) => this.renderBreadCrumbElement(element, elementPath)).toArray()}
      </View>
    );
  }
}
