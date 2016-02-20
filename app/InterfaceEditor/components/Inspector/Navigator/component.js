import React, { AlertIOS, Component, Image, PropTypes, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import elementDisplayNameByElement from '../../../utils/elementDisplayNameByElement';
import { List } from 'immutable';
import styles from './styles';

// (Button image assets)
import deleteButtonImage from '../../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../../assets/img/duplicateButton.png';
import editButtonImage from '../../../assets/img/editButton.png';
import moveButtonImage from '../../../assets/img/moveButton.png';

export default class Navigator extends Component {
  static propTypes = {
    onPressChangeElementDisplayName: PropTypes.func.isRequired,
    onPressDeleteElement: PropTypes.func.isRequired,
    onPressDuplicateElement: PropTypes.func.isRequired,
    onPressElement: PropTypes.func.isRequired,
    // onPressHide: PropTypes.func.isRequired,
    onPressMoveElement: PropTypes.func.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    root: elementPropType.isRequired,
  };

  promptForElementDisplayName(elementPath) {
    const { onPressChangeElementDisplayName } = this.props;

    return AlertIOS.prompt(
      `Enter new display name.`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Set Display Name', onPress: (newDisplayName) => onPressChangeElementDisplayName(elementPath, newDisplayName) },
      ],
    );
  }

  renderElementsSection() {
    const { root: element } = this.props;

    return (
      <ScrollView style={styles.elementsSection}>
        {this.renderElement(element, new List([]))}
      </ScrollView>
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
    const elementIsSelectedElement = selectedElementPath.equals(elementPath);
    const elementHandleSectionStyle = [
      styles.elementHandleSection,
      elementIsRoot ? styles.rootElementHandleSection : {},
      elementIsSelectedElement ? styles.selectedElementHandleSection : {},
      { paddingLeft: 20 * elementPath.count() },
    ];

    return (
      <View key={elementKey} style={styles.element}>
        <View style={elementHandleSectionStyle}>
          {/* <TouchableOpacity style={styles.elementToggleExpansionArrow}/> */}
          <TouchableOpacity onPress={() => onPressElement(elementPath)} style={styles.elementHandle}>
            <Text style={styles.elementNameLabel}>
              {elementDisplayName}
            </Text>
          </TouchableOpacity>
          {this.renderChangeElementDisplayNameButton(elementPath)}
        </View>
        <View style={styles.elementChildrenSection}>
          {elementChildren.map((childElement, childIndex) => this.renderElement(childElement, elementPath.push(childIndex)))}
        </View>
      </View>
    );
  }

  renderChangeElementDisplayNameButton(elementPath) {
    const { selectedElementPath } = this.props;
    const elementIsSelectedElement = selectedElementPath.equals(elementPath);

    // Don't render change element display name button for elements that aren't selected
    if (!elementIsSelectedElement) {
      return null;
    }

    return (
      <TouchableOpacity onPress={() => this.promptForElementDisplayName(elementPath)} style={styles.changeElementDisplayNameButton}>
        <Image source={editButtonImage} style={styles.changeElementDisplayNameButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderSelectedElementActionsSection() {
    const {
      onPressDeleteElement,
      onPressDuplicateElement,
      onPressMoveElement,
      selectedElementPath,
    } = this.props;

    return (
      <View style={styles.selectedElementActionsSection}>
        <TouchableOpacity onPress={() => onPressDuplicateElement(selectedElementPath)} style={styles.selectedElementActionButton}>
          <Image source={duplicateButtonImage} style={styles.duplicateButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressMoveElement(selectedElementPath)} style={styles.selectedElementActionButton}>
          <Image source={moveButtonImage} style={styles.moveButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDeleteElement(selectedElementPath)} style={styles.selectedElementActionButton}>
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
