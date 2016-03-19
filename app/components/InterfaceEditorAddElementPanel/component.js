import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { elementTypeGroupsListPropType } from '../../constants/propTypes';
import CollapsibleListSection from '../../components/CollapsibleListSection';
import styles from './styles';

export default class InterfaceEditorAddElementPanel extends Component {
  static propTypes = {
    onPressElementType: PropTypes.func.isRequired,
    elementTypeGroups: elementTypeGroupsListPropType,
    style: View.propTypes.style,
  };

  renderHeaderSection() {
    return (
      <View style={styles.headerSection}>
        <Text style={styles.headerLabel}>
          Add Element
        </Text>
      </View>
    );
  }

  renderContentSection() {
    const { elementTypeGroups } = this.props;

    return (
      <View style={styles.contentSection}>
        {elementTypeGroups.map(elementTypeGroup => this.renderElementTypeGroup(elementTypeGroup))}
      </View>
    );
  }

  renderElementTypeGroup(elementTypeGroup) {
    const elementTypeGroupName = elementTypeGroup.get('name');
    const elementTypeGroupElementTypes = elementTypeGroup.get('elementTypes');

    return (
      <CollapsibleListSection
        key={elementTypeGroupName}
        title={elementTypeGroupName}
      >
        {elementTypeGroupElementTypes.map(elementType => this.renderElementTypeButton(elementType))}
      </CollapsibleListSection>
    );
  }

  renderElementTypeButton(elementType) {
    const { onPressElementType } = this.props;
    const elementTypeName = elementType.get('name');

    return (
      <TouchableOpacity
        key={elementTypeName}
        onPress={() => onPressElementType(elementType)}
        style={styles.elementTypeButton}
      >
        <Image
          source={elementType.get('imageSource')}
          style={styles.elementTypeButtonImage}
        />
        <Text style={styles.elementTypeButtonLabel}>
          {elementTypeName}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      style,
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        {this.renderHeaderSection()}
        {this.renderContentSection()}
      </View>
    );
  }
}
