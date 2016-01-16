import React, { Component, Image, PropTypes, StatusBarIOS, TouchableOpacity, View } from 'react-native';
import { elementCursorPropType } from '../../constants/propTypes';
import endFullScreenPreviewButtonImage from '../../assets/img/closeButton.png';
import EditorToolbar from '../EditorToolbar';
import Element from '../Element';
import styles from './styles';

export default class EditorWorkspace extends Component {
  static propTypes = {
    beginFullScreenPreview: PropTypes.func.isRequired,
    endFullScreenPreview: PropTypes.func.isRequired,
    fullScreenPreview: PropTypes.bool.isRequired,
    rootCursor: elementCursorPropType.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  renderFullScreenPreview() {
    const { rootCursor } = this.props;

    // TODO: Animate style changes when fullScreenPreview prop changes...
    return (
      <View style={styles.container}>
        <Element rootCursor={rootCursor}/>
        {this.renderFullScreenPreviewButton()}
      </View>
    );
  }

  renderFullScreenPreviewButton() {
    const { endFullScreenPreview } = this.props;

    return (
      <TouchableOpacity onPress={() => endFullScreenPreview()} style={styles.endFullScreenPreviewButton}>
        <Image source={endFullScreenPreviewButtonImage} style={styles.endFullScreenPreviewButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderPreviewSection() {
    const { rootCursor } = this.props;

    return (
      <View style={styles.previewSection}>
        <View style={styles.previewElementWrapper}>
          <View style={styles.previewScaledElement}>
            <Element rootCursor={rootCursor} callOutPath={['props', 'children', 0]}/>
          </View>
        </View>
      </View>
    );
  }

  render() {
    const {
      fullScreenPreview,
    } = this.props;

    if (fullScreenPreview) {
      return this.renderFullScreenPreview();
    }

    return (
      <View style={styles.container}>
        <EditorToolbar/>
        {this.renderPreviewSection()}
      </View>
    );
  }
}
