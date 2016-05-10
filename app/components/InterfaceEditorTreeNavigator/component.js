import React, { AlertIOS, Component, Image, PropTypes, ScrollView, TouchableOpacity, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { List } from 'immutable';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import { allElementTypes } from '../../constants/elementTypes';
import elementDisplayNameByElement from '../../utils/elementDisplayNameByElement';
import elementChildrenByElement from '../../utils/elementChildrenByElement';
import InterfaceEditorTreeNavigatorElement from '../InterfaceEditorTreeNavigatorElement';
import styles from './styles';

// (Button image assets)
import deleteButtonImage from '../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../assets/img/duplicateButton.png';
import moveButtonImage from '../../assets/img/moveButton.png';

export default class InterfaceEditorTreeNavigator extends Component {
  static propTypes = {
    collapsedElementPaths: ImmutablePropTypes.setOf(elementPathPropType),
    onPressChangeElementDisplayName: PropTypes.func.isRequired,
    onPressDeleteElement: PropTypes.func.isRequired,
    onPressDuplicateElement: PropTypes.func.isRequired,
    onPressElement: PropTypes.func.isRequired,
    // onPressHide: PropTypes.func.isRequired,
    onPressMoveElement: PropTypes.func.isRequired,
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
    console.log('movingElementFromPath:', movingElementFromPath);

    // If user is currently moving an element, commit the move when
    // another element is pressed; otherwise default to normal onPressElement.
    if (currentlyMovingElement) {
      return this.commitMovingElement(elementPath);
    }

    return onPressElement(elementPath);
  }

  getElementTypeImageSource(element) {
    const elementType = allElementTypes.find(elementTypeDefinition => {
      return element.get('type') === elementTypeDefinition.get('component');
    });

    if (typeof element === 'string' || !elementType || !elementType.get) {
      return null;
    }

    // If element is root, use root element type image
    return elementType.get('imageSource');
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
    console.log('commit moving element!');
    const {
      onPressElement,
      onPressMoveElement,
    } = this.props;
    const { movingElementFromPath: elementPath } = this.state;

    // Select desired parent element, and then move element to it if possible
    onPressElement(desiredParentElementPath);
    onPressMoveElement(elementPath, desiredParentElementPath);

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
    } = this.props;

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
    if (typeof element === 'string') {
      return null;
    }

    const elementChildren = elementChildrenByElement(element);
    const elementKey = elementPath.join(',');
    const elementDisplayName = elementDisplayNameByElement(element);
    const elementTypeImageSource = this.getElementTypeImageSource(element);
    // Only the child elements of the root should be expanded initially.
    const isInitiallyCollapsed = elementPath.size > 0;

    return (
      <InterfaceEditorTreeNavigatorElement
        key={elementKey}
        elementPath={elementPath}
        isInitiallyCollapsed={isInitiallyCollapsed}
        imageSource={elementTypeImageSource}
        onPress={() => this.onPressElement(elementPath)}
        title={elementDisplayName}
      >
        {(
          elementChildren
          ? elementChildren.map((childElement, childIndex) => this.renderElement(childElement, elementPath.push(childIndex)))
          : null
        )}
      </InterfaceEditorTreeNavigatorElement>
    );
  }

  renderSelectedElementActionsSection() {
    const {
      onPressDeleteElement,
      onPressDuplicateElement,
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
        <TouchableOpacity onPress={() => onPressDuplicateElement(selectedElementPath)} style={styles.selectedElementActionButton}>
          <Image source={duplicateButtonImage} style={styles.duplicateButtonImage}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.toggleMovingElement(selectedElementPath)} style={moveButtonStyle}>
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
