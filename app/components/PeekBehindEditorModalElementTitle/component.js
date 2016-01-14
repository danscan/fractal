import React, { Component, PropTypes } from 'react-native';
import { elementPropType, elementPathPropType } from '../../constants/propTypes';
import PeekBehindEditorModalTitle from '../PeekBehindEditorModalTitle';

export default class PeekBehindEditorModalElementTitle extends Component {
  static propTypes = {
    element: PropTypes.oneOfType([
      elementPropType,
      PropTypes.string,
    ]).isRequired,
    elementPath: elementPathPropType.isRequired,
  }

  render() {
    const {
      element,
    } = this.props;
    console.log('element:', element);

    const title = typeof element === 'string'
                ? element
                : element.displayName || element.type.displayName;

    return (
      <PeekBehindEditorModalTitle title={title}/>
    );
  }
}
