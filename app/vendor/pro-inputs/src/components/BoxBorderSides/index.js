import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
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
import boxBorderSideAllImage from '../../../assets/img/boxBorderSideAll.png';
import boxBorderSideTopImage from '../../../assets/img/boxBorderSideTop.png';
import styles from './styles';

// (Prop type constants)
const selectedSidesPropType = PropTypes.oneOf([
  TOP,
  RIGHT,
  BOTTOM,
  LEFT,
  ALL_SIDES,
]);

export default class BoxBorderSides extends Component {
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
    const { onChangeSelectedSides } = this.props;

    return onChangeSelectedSides(pressedSide);
  }

  renderButton({ side, imageSource, imageStyle, style }) {
    const { selectedSides } = this.props;
    const isSelected = getSideSelectedState(selectedSides, side);
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
