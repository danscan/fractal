import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import beginFullScreenPreviewButtonImage from '../../../assets/img/beginFullScreenPreviewButton.png';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    onPressBeginFullScreenPreview: PropTypes.func.isRequired,
  }

  renderBeginFullScreenPreviewButton() {
    const { onPressBeginFullScreenPreview } = this.props;

    return (
      <TouchableOpacity onPress={onPressBeginFullScreenPreview} style={styles.button}>
        <Image source={beginFullScreenPreviewButtonImage} style={styles.buttonImage}/>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBeginFullScreenPreviewButton()}
      </View>
    );
  }
}
