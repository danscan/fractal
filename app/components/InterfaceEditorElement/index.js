import React, { createElement, Component, Text } from 'react-native';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import { List } from 'immutable';
import styles from './styles';

export default class InterfaceEditorElement extends Component {
  static propTypes = {
    element: elementPropType.isRequired,
    callOutPath: elementPathPropType,
  };

  getCallOutChild(elementPath, elementType) {
    const { callOutPath } = this.props;
    // Ensure that callOut element type can be a child of its parent...
    // (Text cannot have View as a child, so View cannot be the element type
    // of the callOut child.)
    const ElementType = elementType === Text
                      ? Text
                      : elementType;

    if (callOutPath && !callOutPath.isEmpty() && callOutPath.equals(elementPath)) {
      return <ElementType key="callOut" style={styles.callOut}/>;
    }

    return null;
  }

  createElement(element, elementPath = new List()) {
    if (typeof element === 'string') {
      return element;
    }

    const elementType = element.get('type');
    const propsWithoutChildren = element.get('props').delete('children').toJS();
    const children = element.getIn(['props', 'children']);
    const elementKeyProp = elementPath;
    const elementProps = {
      ...propsWithoutChildren,
      key: elementKeyProp,
      style: propsWithoutChildren.style,
    };
    const elementChildren = children.map((childElement, childKey) => {
      const childElementPath = elementPath.push(childKey);

      return this.createElement(childElement, childElementPath);
    }).push(this.getCallOutChild(elementPath, elementType));

    return createElement(elementType, elementProps, elementChildren);
  }

  render() {
    const { element } = this.props;

    return this.createElement(element);
  }
}
