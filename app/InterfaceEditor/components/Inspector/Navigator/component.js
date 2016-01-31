import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import hideButtonImage from '../../../assets/img/hideButton.png';
import deleteButtonImage from '../../../assets/img/deleteButton.png';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import elementDisplayNameByElement from '../../../utils/elementDisplayNameByElement';
import { List } from 'immutable';
import styles from './styles';

export default class Navigator extends Component {
  static propTypes = {
    onPressDelete: PropTypes.func.isRequired,
    onPressHide: PropTypes.func.isRequired,
    onPressElement: PropTypes.func.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    root: elementPropType.isRequired,
  }

  renderElementsSection() {
    const { root: element } = this.props;

    return (
      <View style={styles.elementsSection}>
        {this.renderElement(element, new List([]))}
      </View>
    );
  }

  renderElement(element, elementPath) {
    const {
      onPressElement,
      selectedElementPath,
    } = this.props;
    if (typeof element === 'string') {
      return null;
    }

    const elementProps = element.get('props');
    const elementChildren = elementProps.get('children');
    const elementKey = elementPath.join(',');
    const elementDisplayName = elementDisplayNameByElement(element);
    const elementIsRoot = elementPath.isEmpty();
    const elementHandleSectionStyle = [
      styles.elementHandleSection,
      elementIsRoot ? styles.rootElementHandleSection : {},
      selectedElementPath.equals(elementPath) ? styles.selectedElementHandleSection : {},
      { paddingLeft: 20 * elementPath.count() },
    ];

    return (
      <View key={elementKey} style={styles.element}>
        <View style={elementHandleSectionStyle}>
          <TouchableOpacity style={styles.elementToggleExpansionArrow}/>
          <TouchableOpacity onPress={() => onPressElement(elementPath)} style={styles.elementHandle}>
            <Text style={styles.elementNameLabel}>
              {elementDisplayName}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.elementChildrenSection}>
          {elementChildren.map((childElement, childIndex) => this.renderElement(childElement, elementPath.push(childIndex)))}
        </View>
      </View>
    );
  }

  renderSelectedElementActionsSection() {
    const {
      onPressDelete,
      onPressHide,
      selectedElementPath,
    } = this.props;

    return (
      <View style={styles.selectedElementActionsSection}>
        <TouchableOpacity onPress={() => onPressHide(selectedElementPath)} style={styles.selectedElementActionButton}>
          <Image source={hideButtonImage} style={styles.hideButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDelete(selectedElementPath)} style={styles.selectedElementActionButton}>
          <Image source={deleteButtonImage} style={styles.deleteButtonImage}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderElementsSection()}
        {this.renderSelectedElementActionsSection()}
      </View>
    );
  }
}
