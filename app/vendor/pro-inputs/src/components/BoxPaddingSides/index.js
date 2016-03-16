import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
  ALL_SIDES,
  VERTICAL_SIDES,
  HORIZONTAL_SIDES,
} from '../../constants/boxSides';
import getSideSelectedState from '../../utils/getSideSelectedState';
import reduceBoxSelectedSides from '../../utils/reduceBoxSelectedSides';
import sideAboveImage from '../../../assets/img/sideAbove.png';
import sideAsideRightImage from '../../../assets/img/sideAsideRight.png';
import sideBelowImage from '../../../assets/img/sideBelow.png';
import sideAsideLeftImage from '../../../assets/img/sideAsideLeft.png';
import styles from './styles';

// (Prop type constants)
const selectedSidesPropType = PropTypes.oneOf([
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
  ALL_SIDES,
  VERTICAL_SIDES,
  HORIZONTAL_SIDES,
]);

export default class BoxPaddingSides extends Component {
  static propTypes = {
    onChangeSelectedSides: PropTypes.func.isRequired,
    selectedSides: selectedSidesPropType.isRequired,
    style: View.propTypes.style,
  };

  static defaultProps = {
    onChangeSelectedSides: () => {},
    selectedSides: [],
  };

  toggleSelectedSidesMember(pressedSide) {
    const {
      onChangeSelectedSides,
      selectedSides,
    } = this.props;
    const newSelectedSides = reduceBoxSelectedSides(selectedSides, pressedSide);

    return onChangeSelectedSides(newSelectedSides);
  }

  renderAllButton() {
    const { selectedSides } = this.props;
    const isSelected = getSideSelectedState(selectedSides, ALL_SIDES);
    const buttonStyle = [
      styles.allButton,
      (isSelected ? styles.allButtonSelected : {}),
    ];

    return (
      <TouchableOpacity
        onPress={() => this.toggleSelectedSidesMember(ALL_SIDES)}
        style={buttonStyle}
      >
        <Text style={styles.allButtonLabel}>
          Padding
        </Text>
      </TouchableOpacity>
    );
  }

  renderTopButton() {
    return this.renderSideButton({
      side: TOP,
      imageSource: sideBelowImage,
      imageStyle: styles.buttonVerticalImage,
      style: styles.buttonTop,
    });
  }

  renderRightButton() {
    return this.renderSideButton({
      side: RIGHT,
      imageSource: sideAsideLeftImage,
      imageStyle: styles.buttonHorizontalImage,
      style: styles.buttonRight,
    });
  }

  renderBottomButton() {
    return this.renderSideButton({
      side: BOTTOM,
      imageSource: sideAboveImage,
      imageStyle: styles.buttonVerticalImage,
      style: styles.buttonBottom,
    });
  }

  renderLeftButton() {
    return this.renderSideButton({
      side: LEFT,
      imageSource: sideAsideRightImage,
      imageStyle: styles.buttonHorizontalImage,
      style: styles.buttonLeft,
    });
  }

  renderSideButton({ side, imageSource, imageStyle, style }) {
    const { selectedSides } = this.props;
    const isSelected = getSideSelectedState(selectedSides, side);
    const buttonStyle = [
      styles.button,
      style,
      (isSelected ? styles.buttonSelected : {}),
    ];

    return (
      <TouchableOpacity
        onPress={() => this.toggleSelectedSidesMember(side)}
        style={buttonStyle}
      >
        <Image source={imageSource} style={[styles.buttonImage, imageStyle]}/>
      </TouchableOpacity>
    );
  }

  render() {
    const { style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={styles.row}>
          {this.renderTopButton()}
        </View>
        <View style={styles.row}>
          {this.renderLeftButton()}
          {this.renderAllButton()}
          {this.renderRightButton()}
        </View>
        <View style={styles.row}>
          {this.renderBottomButton()}
        </View>
      </View>
    );
  }
}
