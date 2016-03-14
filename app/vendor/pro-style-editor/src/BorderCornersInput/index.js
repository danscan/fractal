import React, { Component, Image, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  BoxBorderCorners,
  NumberIncrementField,
  boxCorners,
} from 'pro-inputs';
import styles from './styles';

export default class BorderCornersInput extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.controlColumn}>
          <BoxBorderCorners
            selectedCorners={[boxCorners.TOP_RIGHT, boxCorners.BOTTOM_RIGHT]}
          />
        </View>
        <View style={styles.inputsColumn}>
          <NumberIncrementField
            name="Radius"
            placeholder="--"
            unit="px"
            value={undefined}
          />
        </View>
      </View>
    );
  }
}
