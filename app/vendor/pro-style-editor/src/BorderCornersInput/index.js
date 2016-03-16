import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  BoxBorderCorners,
  NumberIncrementField,
  boxCorners,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class BorderCornersInput extends Component {
  static propTypes = {
    borderCornersInputSelectedCorners: BoxBorderCorners.propTypes.selectedSides,
    onChangeBorderCornersInputSelectedCorners: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    const {
      borderCornersInputSelectedCorners,
      onChangeBorderCornersInputSelectedCorners,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.controlColumn}>
          <BoxBorderCorners
            onChangeSelectedCorners={onChangeBorderCornersInputSelectedCorners}
            selectedCorners={borderCornersInputSelectedCorners}
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
