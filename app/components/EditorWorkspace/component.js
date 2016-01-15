import React, { Component, Image, PropTypes, StatusBarIOS, TouchableOpacity, View } from 'react-native';
import endPreviewButtonImage from '../../assets/img/closeButton.png';
import EditorToolbar from '../EditorToolbar';
import Root from '../Root';
import styles from './styles';

export default class EditorWorkspace extends Component {
  static propTypes = {
    beginPreview: PropTypes.func.isRequired,
    endPreview: PropTypes.func.isRequired,
    preview: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    StatusBarIOS.setHidden(true);
  }

  renderPreview() {
    // TODO: Animate style changes when preview prop changes...
    return (
      <View style={styles.container}>
        <Root/>
        {this.renderEndPreviewButton()}
      </View>
    );
  }

  renderEndPreviewButton() {
    const { endPreview } = this.props;

    return (
      <TouchableOpacity onPress={() => endPreview()} style={styles.endPreviewButton}>
        <Image source={endPreviewButtonImage} style={styles.endPreviewButtonImage}/>
      </TouchableOpacity>
    );
  }

  render() {
    const {
      preview,
    } = this.props;

    if (preview) {
      return this.renderPreview();
    }

    return (
      <View style={styles.container}>
        <EditorToolbar/>
        <Root/>
      </View>
    );
  }
}
