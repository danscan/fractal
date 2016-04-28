import React, { createElement, Component, Text, TextInput } from 'react-native';
import { List } from 'immutable';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import elementChildrenByElement from '../../utils/elementChildrenByElement';
import elementPropValueByElementAndPropName from '../../utils/elementPropValueByElementAndPropName';
import styles from './styles';

export default class InterfaceEditorElement extends Component {
  static propTypes = {
    element: elementPropType.isRequired,
    selectedElementPath: elementPathPropType,
  };

  getSelectedElementChild(elementPath, ElementType) {
    const { selectedElementPath } = this.props;

    // If selectedElement type cannot have children, bail...
    if (ElementType === Text || ElementType === TextInput) {
      return null;
    }

    if (selectedElementPath && !selectedElementPath.isEmpty() && selectedElementPath.equals(elementPath)) {
      return <ElementType key="selectedElement" style={styles.selectedElement}/>;
    }

    return null;
  }

  createElement(element, elementPath = new List()) {
    // const { selectedElementPath } = this.props;

    if (typeof element === 'string') {
      return element;
    }

    console.log('element:', element);
    const elementType = element.get('type');
    const propsWithoutChildren = element.get('props').delete('children');
    const children = elementChildrenByElement(element);
    console.log('children:', children);
    const elementKeyPropValue = elementPath;
    const elementProps = propsWithoutChildren
    .map((prop, propName) => elementPropValueByElementAndPropName(element, propName))
    .set('key', elementKeyPropValue)
    .toJS();
    const elementChildren = (children
      ? children.map((childElement, childKey) => {
        const childElementPath = elementPath.push(childKey);

        return this.createElement(childElement, childElementPath);
      }).push(this.getSelectedElementChild(elementPath, elementType))
      : null
    );

    // // If selected element is text, allow user to edit it
    // if (elementPath.equals(selectedElementPath) && elementType === Text) {
    //   return createElement(TextInput, { ...elementProps, multiline: true }, elementChildren);
    // }

    return createElement(elementType, elementProps, elementChildren);
  }

  render() {
    const { element } = this.props;

    return this.createElement(element);
  }
}
