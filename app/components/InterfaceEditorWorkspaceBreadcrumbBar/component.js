import React, { Component, PropTypes } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { elementPropType } from '../../constants/propTypes';
import { allElementTypes } from '../../constants/elementTypes';
import elementDisplayNameByElement from '../../utils/elementDisplayNameByElement';
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
    const elementTypeImageSource = elementType.get('imageSource');

    return (
      <TouchableOpacity
        key={elementPath.join()}
        onPress={() => onPressElement(elementPath)}
        style={styles.breadcrumbElement}
      >
        <Image
          source={elementTypeImageSource}
          style={styles.breadcrumbElementImage}
        />
        <Text style={styles.breadcrumbElementLabel}>
          {elementDisplayName}
        </Text>
        <View style={styles.breadcrumbElementPoint}/>
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
