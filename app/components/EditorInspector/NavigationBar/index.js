import React, { Component, PropTypes, Image, Text, TouchableOpacity, View } from 'react-native';
import backButtonChevronImage from '../../../assets/img/backChevron.png';
import styles from './styles';

export default class NavigationBar extends Component {
  static propTypes = {
    backButtonTitle: PropTypes.string.isRequired,
    onPressBack: PropTypes.func,
    onPressHide: PropTypes.func,
    onPressMore: PropTypes.func,
    title: PropTypes.string.isRequired,
  }

  static defaultProps = {
    backButtonTitle: 'Back',
  }

  renderLeftButtons() {
    return (
      <View style={styles.leftButtons}>
        {this.renderBackButton()}
      </View>
    );
  }

  renderBackButton() {
    const {
      backButtonTitle,
      onPressBack,
    } = this.props;

    if (!onPressBack) {
      return null;
    }

    return (
      <TouchableOpacity onPress={onPressBack} style={[styles.button, styles.backButton]}>
        <Image source={backButtonChevronImage} style={styles.backButtonChevronImage}/>
        <Text style={styles.backButtonTitleLabel}>
          {backButtonTitle}
        </Text>
      </TouchableOpacity>
    );
  }

  renderTitle() {
    const { title } = this.props;

    return (
      <View style={styles.title}>
        <Text style={styles.titleLabel}>
          {title}
        </Text>
      </View>
    );
  }

  renderRightButtons() {
    return (
      <View style={styles.rightButtons}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLeftButtons()}
        {this.renderTitle()}
        {this.renderRightButtons()}
      </View>
    );
  }
}
