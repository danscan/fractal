import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { elementPropType } from '../../constants/propTypes';
import { allElementTypes } from '../../constants/elementTypes';
import elementDisplayNameByElement from '../../utils/elementDisplayNameByElement';
import rootElementTypeImage from '../../assets/img/elementTypes/root.png';
import styles from './styles';

export default class InterfaceEditorWorkspaceBreadcrumbBar extends Component {
  static propTypes = {
    onPressElement: PropTypes.func.isRequired,
    selectedElementBreadCrumbElements: ImmutablePropTypes.mapOf(elementPropType).isRequired,
  };

  renderBreadCrumbElement(element, elementPath) {
    const { onPressElement } = this.props;
    const elementDisplayName = elementDisplayNameByElement(element);
    const elementType = allElementTypes.find(elementTypeDefinition => {
      return element.get('type') === elementTypeDefinition.get('component');
    });
    // If element is root, use root element type image
    const elementTypeImageSource = elementPath.isEmpty()
      ? rootElementTypeImage
      : elementType.get('imageSource');

    return (
      <TouchableOpacity
        key={elementPath.join()}
        onPress={() => onPressElement(elementPath)}
        style={styles.breadCrumbElement}
      >
        <Image
          source={elementTypeImageSource}
          style={styles.breadCrumbElementImage}
        />
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
