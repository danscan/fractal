import React, { Component, Image, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { Set } from 'immutable';
import sideAboveImage from '../../assets/img/sideAbove.png';
import sideAsideRightImage from '../../assets/img/sideAsideRight.png';
import sideBelowImage from '../../assets/img/sideBelow.png';
import sideAsideLeftImage from '../../assets/img/sideAsideLeft.png';
import styles from './styles';

// (Value constants)
export const TOP = 'TOP';
export const RIGHT = 'RIGHT';
export const BOTTOM = 'BOTTOM';
export const LEFT = 'LEFT';
export const ALL_SIDES = [TOP, LEFT, BOTTOM, RIGHT];

// (Prop type constants)
const sidePropType = PropTypes.oneOf(ALL_SIDES);

export default class BoxPaddingSides extends Component {
  static propTypes = {
    onChangeSelectedSides: PropTypes.func.isRequired,
    selectedSides: PropTypes.arrayOf(sidePropType).isRequired,
  };

  static defaultProps = {
    onChangeSelectedSides: () => {},
    selectedSides: [],
  };

  toggleSelectedSidesMember(side) {
    const {
      onChangeSelectedSides,
      selectedSides,
    } = this.props;
    const selectedSidesSet = new Set(selectedSides);
    let newSelectedSides;

    if (selectedSidesSet.has(side)) {
      newSelectedSides = selectedSidesSet
        .delete(side)
        .toArray();
    } else {
      newSelectedSides = selectedSidesSet
        .add(side)
        .toArray();
    }

    return onChangeSelectedSides(newSelectedSides);
  }

  renderAllButton() {
    const { selectedSides } = this.props;
    const selectedSidesSet = new Set(selectedSides);
    const isSelected = selectedSidesSet.has(ALL_SIDES);
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
    const selectedSidesSet = new Set(selectedSides);
    const isSelected = selectedSidesSet.has(side);
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
    return (
      <View style={styles.container}>
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
