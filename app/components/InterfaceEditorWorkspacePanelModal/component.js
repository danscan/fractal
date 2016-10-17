import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import styles from './styles';

export default class InterfaceEditorWorkspacePanelModal extends Component {
  static propTypes = {
    content: PropTypes.element,
    style: View.propTypes.style,
  };

  render() {
    const {
      content,
      style,
    } = this.props;

    // Don't render if there's no content...
    if (!content) {
      return null;
    }

    return (
      <View style={[styles.container, style]}>
        {content}
      </View>
    );
  }
}
