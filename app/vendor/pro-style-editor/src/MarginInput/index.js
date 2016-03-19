import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  BoxMarginSides,
  NumberIncrementField,
  boxSides,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class MarginInput extends Component {
  static propTypes = {
    marginInputSelectedSides: BoxMarginSides.propTypes.selectedSides,
    onChangeMarginInputSelectedSides: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    const {
      onChangeMarginInputSelectedSides,
      onChangeValue,
      marginInputSelectedSides,
      value,
    } = this.props;
    const {
      propName,
      fieldName,
    } = _getMarginProp(marginInputSelectedSides);

    return (
      <View style={styles.container}>
        <BoxMarginSides
          selectedSides={marginInputSelectedSides}
          onChangeSelectedSides={onChangeMarginInputSelectedSides}
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
function _getMarginProp(selectedSides) {
  if (selectedSides === boxSides.ALL_SIDES) {
    return {
      propName: 'margin',
      fieldName: 'Margin',
    };
  }

  return {
    propName: `margin${selectedSides}`,
    fieldName: `Margin ${selectedSides}`,
  };
}
