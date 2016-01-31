import { createElement, Component } from 'react-native';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import { List } from 'immutable';
import styles from './styles';

export default class Element extends Component {
  static propTypes = {
    element: elementPropType.isRequired,
    callOutPath: elementPathPropType,
  }

  getCallOutStyleForElementPath(elementPath) {
    const { callOutPath } = this.props;

    if (callOutPath && !callOutPath.isEmpty() && callOutPath.equals(elementPath)) {
      return styles.callOutWrapper;
    }

    return {};
  }

  createElement(element, elementPath = new List()) {
    if (typeof element === 'string') {
      return element;
    }

    const elementType = element.get('type');
    const propsWithoutChildren = element.get('props').delete('children').toJS();
    const children = element.getIn(['props', 'children']);
    const elementKeyProp = elementPath;
    const elementCallOutStyle = this.getCallOutStyleForElementPath(elementPath);
    const elementProps = {
      ...propsWithoutChildren,
      key: elementKeyProp,
      style: [
        propsWithoutChildren.style,
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
