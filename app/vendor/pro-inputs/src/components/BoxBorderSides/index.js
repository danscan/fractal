import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import { Set } from 'immutable';
import {
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
  ALL_SIDES,
} from '../../constants/boxSides';
import reduceSelectedSides from '../../utils/reduceSelectedSides';
import boxBorderSideAllImage from '../../../assets/img/boxBorderSideAll.png';
import boxBorderSideTopImage from '../../../assets/img/boxBorderSideTop.png';
import styles from './styles';

// (Prop type constants)
const sidePropType = PropTypes.oneOf(ALL_SIDES);

export default class BoxBorderSides extends Component {
  static propTypes = {
    onChangeSelectedSides: PropTypes.func.isRequired,
    selectedSides: PropTypes.arrayOf(sidePropType).isRequired,
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
    const newSelectedSides = reduceSelectedSides(selectedSides, pressedSide);

    return onChangeSelectedSides(newSelectedSides);
  }

  renderButton({ side, imageSource, imageStyle, style }) {
    const { selectedSides } = this.props;
    const selectedSidesSet = new Set(selectedSides);
    const isSelected = selectedSidesSet.has(side);
    const buttonStyle = [
      styles.button,
      (isSelected ? styles.buttonSelected : {}),
    ];

    return (
      <TouchableOpacity
        onPress={() => this.toggleSelectedSidesMember(side)}
        style={[buttonStyle, style]}
      >
        <Image
          source={imageSource}
          style={[styles.buttonImage, imageStyle]}
        />
      </TouchableOpacity>
    );
  }

  render() {
    const { style } = this.props;

    return (
      <View style={[styles.container, style]}>
        <View style={styles.row}>
          <View style={styles.emptyColumn}/>
          {this.renderButton({
            side: TOP,
            imageSource: boxBorderSideTopImage,
            imageStyle: {},
            style: styles.buttonTop,
          })}
          <View style={styles.emptyColumn}/>
        </View>
        <View style={styles.row}>
          {this.renderButton({
            side: LEFT,
            imageSource: boxBorderSideTopImage,
            imageStyle: { transform: [{ rotate: '270deg' }] },
            style: styles.buttonLeft,
          })}
          {this.renderButton({
            side: ALL_SIDES,
            imageSource: boxBorderSideAllImage,
            imageStyle: {},
            style: styles.buttonAll,
          })}
          {this.renderButton({
            side: RIGHT,
            imageSource: boxBorderSideTopImage,
            imageStyle: { transform: [{ rotate: '90deg' }] },
            style: styles.buttonRight,
          })}
        </View>
        <View style={styles.row}>
          <View style={styles.emptyColumn}/>
          {this.renderButton({
            side: BOTTOM,
            imageSource: boxBorderSideTopImage,
            imageStyle: { transform: [{ rotate: '180deg' }] },
            style: styles.buttonBottom,
          })}
          <View style={styles.emptyColumn}/>
        </View>
      </View>
    );
  }
}
