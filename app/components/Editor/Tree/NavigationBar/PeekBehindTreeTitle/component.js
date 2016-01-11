import React, { Component, Image, PropTypes, Text, TouchableOpacity } from 'react-native';
import peekButtonImage from '../../../../../assets/img/peekButton.png';
import styles from './styles';

export default class PeekBehindTreeTitle extends Component {
  static propTypes = {
    onPressIn: PropTypes.func.isRequired,
    onPressOut: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  render() {
    const {
      onPressIn,
      onPressOut,
      title,
    } = this.props;

    return (
      <TouchableOpacity
        onPressIn={() => onPressIn()}
        onPressOut={() => onPressOut()}
        pressRetentionOffset={{
          top: 10,
          right: 20,
          bottom: 10,
          left: 20,
        }}
        style={styles.container}
      >
        <Image source={peekButtonImage} style={styles.peekButtonImage}/>
        <Text style={styles.titleLabel}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  }
}
