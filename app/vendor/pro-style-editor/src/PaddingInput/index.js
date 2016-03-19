import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  BoxPaddingSides,
  NumberIncrementField,
  boxSides,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class PaddingInput extends Component {
  static propTypes = {
    onChangePaddingInputSelectedSides: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    paddingInputSelectedSides: BoxPaddingSides.propTypes.selectedSides,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    const {
      onChangePaddingInputSelectedSides,
      onChangeValue,
      paddingInputSelectedSides,
      value,
    } = this.props;
    const {
      propName,
      fieldName,
    } = _getPaddingProp(paddingInputSelectedSides);

    return (
      <View style={styles.container}>
        <BoxPaddingSides
          selectedSides={paddingInputSelectedSides}
          onChangeSelectedSides={onChangePaddingInputSelectedSides}
        />
        <NumberIncrementField
          name={fieldName}
          placeholder="--"
          unit="px"
          onChangeValue={(newValue) => onChangeValue(value.set(propName, newValue))}
          value={(value.get(propName))}
        />
      </View>
    );
  }
}

// (Private helpers)
function _getPaddingProp(selectedSides) {
  if (selectedSides === boxSides.ALL_SIDES) {
    return {
      propName: 'padding',
      fieldName: 'Padding',
    };
  }

  return {
    propName: `padding${selectedSides}`,
    fieldName: `Padding ${selectedSides}`,
  };
}
