import React, { Component, Image, PropTypes, TouchableOpacity } from 'react-native';
import closeButtonImage from '../../../../../assets/img/closeButton.png';
import styles from './styles';

export default class CloseTreeButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const {
      onPress,
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress()} style={styles.container}>
        <Image source={closeButtonImage} style={styles.closeButtonImage}/>
      </TouchableOpacity>
    );
  }
}
