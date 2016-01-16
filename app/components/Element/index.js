import React, { View } from 'react-native';
import { createElement, Component } from 'react-native';
import { elementCursorPropType, elementPathPropType } from '../../constants/propTypes';
import { isEqual, last, omit } from 'underscore';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    callOutPath: elementPathPropType,
    elementPath: elementPathPropType.isRequired,
    rootCursor: elementCursorPropType.isRequired,
  }

  static defaultProps = {
    elementPath: [],
  }

  wrapElementWithCallOutIfAppropriate(element, elementPath) {
    const { callOutPath } = this.props;

    if (callOutPath && isEqual(callOutPath, elementPath)) {
      return (
        <View key="callOutWrapper" style={styles.callOutWrapper}>
          {element}
        </View>
      );
    }

    return element;
  }

  createElement(element, elementPath) {
    console.log('createElement... element:', element);
    console.log('createElement... elementPath:', elementPath);
    if (typeof element === 'string') {
      return element;
    }

    const { type: elementType, props = {} } = element || {};
    const { children = [] } = props;
    const elementKeyProp = last(elementPath);
    const elementProps = { ...omit(props, 'children'), key: elementKeyProp };
    const elementChildren = children.map((childElement, childKey) => {
      const childElementPath = [...elementPath, 'props', 'children', childKey];

      return this.createElement(childElement, childElementPath);
    });

    const _element = createElement(elementType, elementProps, elementChildren);
    return this.wrapElementWithCallOutIfAppropriate(_element, elementPath);
  }

  render() {
    const {
      elementPath,
      rootCursor,
    } = this.props;
    const element = rootCursor.get(elementPath);

    return this.createElement(element, elementPath);
  }
}
