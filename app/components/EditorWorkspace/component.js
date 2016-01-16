import React, { Component, Image, PropTypes, StatusBarIOS, TouchableOpacity, View } from 'react-native';
import endFullScreenPreviewButtonImage from '../../assets/img/closeButton.png';
import EditorToolbar from '../EditorToolbar';
import Root from '../Root';
import styles from './styles';

export default class EditorWorkspace extends Component {
  static propTypes = {
    beginFullScreenPreview: PropTypes.func.isRequired,
    endFullScreenPreview: PropTypes.func.isRequired,
    fullScreenPreview: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  renderFullScreenPreview() {
    // TODO: Animate style changes when fullScreenPreview prop changes...
    return (
      <View style={styles.container}>
        <Root/>
        {this.renderendFullScreenPreviewButton()}
      </View>
    );
  }

  renderendFullScreenPreviewButton() {
    const { endFullScreenPreview } = this.props;

    return (
      <TouchableOpacity onPress={() => endFullScreenPreview()} style={styles.endFullScreenPreviewButton}>
        <Image source={endFullScreenPreviewButtonImage} style={styles.endFullScreenPreviewButtonImage}/>
      </TouchableOpacity>
    );
  }

  renderPreviewSection() {
    return (
      <View style={styles.previewSection}>
        <View style={styles.rootWrapper}>
          <View style={styles.scaledRoot}>
            <Root/>
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
