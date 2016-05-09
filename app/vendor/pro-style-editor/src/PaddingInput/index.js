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
    initialPaddingInputSelectedSides: BoxPaddingSides.propTypes.selectedSides,
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    initialPaddingInputSelectedSides: boxSides.ALL_SIDES,
    onChangeValue: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      paddingInputSelectedSides: props.initialPaddingInputSelectedSides,
    };
  }

  render() {
    const {
      onChangeValue,
      value,
    } = this.props;
    const { paddingInputSelectedSides } = this.state;
    const {
      propName,
      fieldName,
    } = _getPaddingProp(paddingInputSelectedSides);

    return (
      <View style={styles.container}>
        <BoxPaddingSides
          selectedSides={paddingInputSelectedSides}
          onChangeSelectedSides={(newPaddingInputSelectedSides) => this.setState({
            paddingInputSelectedSides: newPaddingInputSelectedSides,
          })}
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
