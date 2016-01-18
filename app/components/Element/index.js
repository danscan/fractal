import { createElement, Component } from 'react-native';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import { omit } from 'underscore';
import { List } from 'immutable';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    element: elementPropType.isRequired,
    callOutPath: elementPathPropType,
  }

  getCallOutStyleForElementPath(elementPath) {
    const { callOutPath } = this.props;

    if (callOutPath && callOutPath.equals(elementPath)) {
      return styles.callOutWrapper;
    }

    return {};
  }

  createElement(element, elementPath = new List()) {
    if (typeof element === 'string') {
      return element;
    }

    const { type: elementType, props = {} } = element || {};
    const { children = [] } = props;
    const elementKeyProp = elementPath;
    const elementCallOutStyle = this.getCallOutStyleForElementPath(elementPath);
    const elementProps = {
      ...omit(props, 'children'),
      key: elementKeyProp,
      style: [
        props.style,
        elementCallOutStyle,
      ],
    };
    const elementChildren = children.map((childElement, childKey) => {
      const childElementPath = elementPath.push(childKey);

      return this.createElement(childElement, childElementPath);
    });

    return createElement(elementType, elementProps, elementChildren);
  }

  render() {
    const { element } = this.props;

    return this.createElement(element);
  }
}
