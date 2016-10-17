import React, { Component, PropTypes } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import {
  TOP_RIGHT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  TOP_LEFT,
  ALL_CORNERS,
} from '../../constants/boxCorners';
import boxBorderCornerAllImage from '../../../assets/img/boxBorderCornerAll.png';
import boxBorderCornerTopRightImage from '../../../assets/img/boxBorderCornerTopRight.png';
import styles from './styles';

// (Prop type constants)
const selectedCornersPropType = PropTypes.oneOf([
  TOP_RIGHT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  TOP_LEFT,
  ALL_CORNERS,
]);

export default class BoxBorderCorners extends Component {
  static propTypes = {
    onChangeSelectedCorners: PropTypes.func.isRequired,
    selectedCorners: selectedCornersPropType.isRequired,
    style: View.propTypes.style,
  };

  static defaultProps = {
    onChangeSelectedCorners: () => {},
    selectedCorners: ALL_CORNERS,
  };

  toggleSelectedCornersMember(corner) {
    const {
      onChangeSelectedCorners,
    } = this.props;
    let newSelectedCorners;

    // If corner is all corners, toggle all corners;
    // If corner is individual corner, toggle it;
    if (corner === ALL_CORNERS) {
      newSelectedCorners = ALL_CORNERS;
    } else {
      newSelectedCorners = corner;
    }

    return onChangeSelectedCorners(newSelectedCorners);
  }

  renderButton({ corner, imageSource, imageStyle, style }) {
    const { selectedCorners } = this.props;
    const isSelected = selectedCorners === corner || selectedCorners === ALL_CORNERS;
    const buttonStyle = [
      styles.button,
      (isSelected ? styles.buttonSelected : {}),
    ];

    return (
      <TouchableOpacity
        onPress={() => this.toggleSelectedCornersMember(corner)}
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
          {this.renderButton({
            corner: TOP_LEFT,
            imageSource: boxBorderCornerTopRightImage,
            imageStyle: { transform: [{ rotate: '-90deg' }] },
            style: styles.buttonTopLeft,
          })}
          <View style={styles.emptyColumn}/>
          {this.renderButton({
            corner: TOP_RIGHT,
            imageSource: boxBorderCornerTopRightImage,
            imageStyle: {},
            style: styles.buttonTopRight,
          })}
        </View>
        <View style={styles.row}>
          <View style={styles.emptyMiddleRowColumn}/>
          {this.renderButton({
            corner: ALL_CORNERS,
            imageSource: boxBorderCornerAllImage,
            imageStyle: {},
            style: styles.buttonAll,
          })}
          <View style={styles.emptyMiddleRowColumn}/>
        </View>
        <View style={styles.row}>
          {this.renderButton({
            corner: BOTTOM_LEFT,
            imageSource: boxBorderCornerTopRightImage,
            imageStyle: { transform: [{ rotate: '180deg' }] },
            style: styles.buttonBottomLeft,
          })}
          <View style={styles.emptyColumn}/>
          {this.renderButton({
            corner: BOTTOM_RIGHT,
            imageSource: boxBorderCornerTopRightImage,
            imageStyle: { transform: [{ rotate: '90deg' }] },
            style: styles.buttonBottomRight,
          })}
        </View>
      </View>
    );
  }
}
