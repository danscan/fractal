import React, { Component, PropTypes, Text } from 'react-native';
import { elementPropType, treePathPropType } from '../../constants/propTypes';
import styles from './styles';

export default class ElementNavigationBarTitle extends Component {
  static propTypes = {
    element: PropTypes.oneOfType([
      elementPropType,
      PropTypes.string,
    ]).isRequired,
    elementPath: treePathPropType.isRequired,
  }

  render() {
    const {
      element,
    } = this.props;

    const title = typeof element === 'string'
                ? element
                : element.displayName || element.type.displayName;

    return (
      <Text style={styles.container}>
        {title}
      </Text>
    );
  }
}
