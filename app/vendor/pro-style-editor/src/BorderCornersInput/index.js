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
      onChangeValue,
      value,
    } = this.props;
    const {
      propName,
      fieldName,
    } = _getBorderRadiusProp(borderCornersInputSelectedCorners);

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
            name={fieldName}
            placeholder="--"
            unit="px"
            onChangeValue={(newValue) => onChangeValue(value.set(propName, newValue))}
            value={(value.get(propName))}
          />
        </View>
      </View>
    );
  }
}

// (Private helpers)
function _getBorderRadiusProp(selectedCorners) {
  if (selectedCorners === boxCorners.ALL_CORNERS) {
    return {
      propName: 'borderRadius',
      fieldName: 'Radius',
    };
  }

  return {
    propName: `border${selectedCorners}Radius`,
    fieldName: `${selectedCorners} Radius`,
  };
}
