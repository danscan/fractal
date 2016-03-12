import React, { Component, Image, PropTypes, TouchableOpacity, View } from 'react-native';
import { Set } from 'immutable';
import boxBorderCornerAllImage from '../../assets/img/boxBorderCornerAll.png';
import boxBorderCornerTopRightImage from '../../assets/img/boxBorderCornerTopRight.png';
import styles from './styles';

// (Value constants)
export const TOP_RIGHT = 'TOP_RIGHT';
export const BOTTOM_RIGHT = 'BOTTOM_RIGHT';
export const BOTTOM_LEFT = 'BOTTOM_LEFT';
export const TOP_LEFT = 'TOP_LEFT';
export const ALL_CORNERS = [TOP_RIGHT, BOTTOM_RIGHT, BOTTOM_LEFT, TOP_LEFT];

// (Prop type constants)
const cornerPropType = PropTypes.oneOf(ALL_CORNERS);

export default class BoxBorderCorners extends Component {
  static propTypes = {
    onChangeSelectedCorners: PropTypes.func.isRequired,
    selectedCorners: PropTypes.arrayOf(cornerPropType).isRequired,
  };

  static defaultProps = {
    onChangeSelectedCorners: () => {},
    selectedCorners: [],
  };

  toggleSelectedCornersMember(corner) {
    const {
      onChangeSelectedCorners,
      selectedCorners,
    } = this.props;
    const selectedCornersSet = new Set(selectedCorners);
    let newSelectedCorners;

    if (selectedCornersSet.has(corner)) {
      newSelectedCorners = selectedCornersSet
        .delete(corner)
        .toArray();
    } else {
      newSelectedCorners = selectedCornersSet
        .add(corner)
        .toArray();
    }

    return onChangeSelectedCorners(newSelectedCorners);
  }

  renderButton({ corner, imageSource, imageStyle, style }) {
    const { selectedCorners } = this.props;
    const selectedCornersSet = new Set(selectedCorners);
    const isSelected = selectedCornersSet.has(corner);
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
    return (
      <View style={styles.container}>
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
