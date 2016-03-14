import React, { AlertIOS, Component, Image, PropTypes, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import { allElementTypes } from '../../constants/elementTypes';
import elementDisplayNameByElement from '../../utils/elementDisplayNameByElement';
import { List } from 'immutable';
import styles from './styles';

// (Button image assets)
import rootElementTypeImage from '../../assets/img/elementTypes/root.png';
import deleteButtonImage from '../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../assets/img/duplicateButton.png';
import editButtonImage from '../../assets/img/editButton.png';
import moveButtonImage from '../../assets/img/moveButton.png';

export default class InterfaceEditorInspectorTreeNavigator extends Component {
  static propTypes = {
    onPressChangeElementDisplayName: PropTypes.func.isRequired,
    onPressDeleteElement: PropTypes.func.isRequired,
    onPressDuplicateElement: PropTypes.func.isRequired,
    onPressElement: PropTypes.func.isRequired,
    // onPressHide: PropTypes.func.isRequired,
    onPressMoveElement: PropTypes.func.isRequired,
    selectedComponentKey: PropTypes.string.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
    root: elementPropType.isRequired,
  };

  constructor(...args) {
    super(...args);

    this.state = {
      movingElementFromPath: null,
    };
  }

  onPressElement(elementPath) {
    const { onPressElement } = this.props;
    const { movingElementFromPath } = this.state;
    const currentlyMovingElement = !!movingElementFromPath;

    // If user is currently moving an element, commit the move when
    // another element is pressed; otherwise default to normal onPressElement.
    if (currentlyMovingElement) {
      return this.commitMovingElement(elementPath);
    }

    return onPressElement(elementPath);
  }

  getElementTypeImageSource(element, elementPath) {
    const elementType = allElementTypes.find(elementTypeDefinition => {
      return element.get('type') === elementTypeDefinition.get('component');
    });

    if (typeof element === 'string' || !elementType || !elementType.get) {
      return null;
    }

    // If element is root, use root element type image
    return elementPath.isEmpty()
      ? rootElementTypeImage
      : elementType.get('imageSource');
  }

  toggleMovingElement(elementPath) {
    const { movingElementFromPath } = this.state;

    if (!!movingElementFromPath) {
      return this.cancelMovingElement();
    }

    this.setState({
      movingElementFromPath: elementPath,
    });
  }

  commitMovingElement(desiredParentElementPath) {
    const {
      onPressElement,
      onPressMoveElement,
      selectedComponentKey,
    } = this.props;
    const { movingElementFromPath: elementPath } = this.state;

    // Select desired parent element, and then move element to it if possible
    onPressElement(desiredParentElementPath);
    onPressMoveElement(selectedComponentKey, elementPath, desiredParentElementPath);

    // Finish moving element
    this.cancelMovingElement();
  }

  cancelMovingElement() {
    this.setState({
      movingElementFromPath: null,
    });
  }

  promptForElementDisplayName(elementPath) {
    const {
      onPressChangeElementDisplayName,
      selectedComponentKey,
    } = this.props;

    return AlertIOS.prompt(
      `Enter new display name.`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Set Display Name', onPress: (newDisplayName) => onPressChangeElementDisplayName(selectedComponentKey, elementPath, newDisplayName) },
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
    const { selectedElementPath } = this.props;
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
    const elementTypeImageSource = this.getElementTypeImageSource(element, elementPath);

    return (
      <View key={elementKey} style={styles.element}>
        <View style={elementHandleSectionStyle}>
          {/* <TouchableOpacity style={styles.elementToggleExpansionArrow}/> */}
          <TouchableOpacity onPress={() => this.onPressElement(elementPath)} style={styles.elementHandle}>
            <Image style={styles.elementTypeImage} source={elementTypeImageSource}/>
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
      selectedComponentKey,
      selectedElementPath,
    } = this.props;
    const { movingElementFromPath } = this.state;
    const currentlyMovingElement = !!movingElementFromPath;
    const moveButtonStyle = [
      styles.selectedElementActionButton,
      (currentlyMovingElement ? styles.selectedSelectedElementActionButton : {}),
    ];

    return (
      <View style={styles.selectedElementActionsSection}>
        <TouchableOpacity onPress={() => onPressDuplicateElement(selectedComponentKey, selectedElementPath)} style={styles.selectedElementActionButton}>
          <Image source={duplicateButtonImage} style={styles.duplicateButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.toggleMovingElement(selectedElementPath)} style={moveButtonStyle}>
          <Image source={moveButtonImage} style={styles.moveButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onPressDeleteElement(selectedComponentKey, selectedElementPath)} style={styles.selectedElementActionButton}>
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
