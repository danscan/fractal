import React, { Component, Image, PropTypes, Text, TouchableOpacity } from 'react-native';
import peekButtonImage from '../../../../assets/img/peekButton.png';
import styles from './styles';

export default class PeekTitle extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const {
      onPress,
      title,
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress()} style={styles.container}>
        <Image source={peekButtonImage} style={styles.peekButtonImage}/>
        <Text style={styles.titleLabel}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
