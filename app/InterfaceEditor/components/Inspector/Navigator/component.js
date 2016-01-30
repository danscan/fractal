import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import hideButtonImage from '../../../assets/img/hideButton.png';
import deleteButtonImage from '../../../assets/img/deleteButton.png';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import elementDisplayNameByElement from '../../../utils/elementDisplayNameByElement';
import { List } from 'immutable';
import { map } from 'underscore';
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
    const elementProps = element.props || {};
    const elementChildren = elementProps.children;
    const elementKey = elementPath.join(',');
    const elementDisplayName = elementDisplayNameByElement(element);
    const elementIsRoot = elementPath.isEmpty();
    const elementStyle = [
      styles.element,
      elementIsRoot ? styles.rootElement : {},
      selectedElementPath.equals(elementPath) ? styles.selectedElement : {},
    ];

    return (
      <TouchableOpacity
        key={elementKey}
        onPress={() => onPressElement(elementPath)}
        style={elementStyle}
      >
        <Text style={styles.elementNameLabel}>
          {elementDisplayName}
        </Text>
        {map(elementChildren, (childElement, childIndex) => this.renderElement(childElement, elementPath.push(childIndex)))}
      </TouchableOpacity>
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
