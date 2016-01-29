import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import hideButtonImage from '../../../assets/img/hideButton.png';
import deleteButtonImage from '../../../assets/img/deleteButton.png';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import { List } from 'immutable';
import { map } from 'underscore';
import styles from './styles';

export default class Navigator extends Component {
  static propTypes = {
    onPressDelete: PropTypes.func.isRequired,
    onPressHide: PropTypes.func.isRequired,
    onSelectElement: PropTypes.func.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    root: elementPropType.isRequired,
  }

  renderElementsSection() {
    const {
      root: element,
      onSelectElement,
    } = this.props;
    const elementProps = element.props || {};
    const elementChildren = elementProps.children;

    if (element.type === Text) {
      return this.renderTextChildrenSection();
    }

    return (
      <View style={styles.elementsSection}>
        <View style={styles.childrenListSection}>
          {map(elementChildren, (childElement, childIndex) => (
            <TouchableOpacity key={childIndex} onPress={() => onSelectElement(new List([childIndex]))} style={styles.childButton}>
              <Text>{childIndex} {JSON.stringify(childElement)}</Text>
            </TouchableOpacity>
          ))}
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
