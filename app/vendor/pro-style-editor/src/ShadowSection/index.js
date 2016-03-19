import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  ColorField,
  NumberIncrementField,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class ShadowSection extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  onChangeShadowOffsetDimensionValue(dimension, newValue) {
    const {
      onChangeValue,
      value,
    } = this.props;
    const shadowOffsetValue = value.get('shadowOffset', {});
    const newShadowOffsetValue = { ...shadowOffsetValue, [dimension]: newValue };

    return onChangeValue(value.set('shadowOffset', newShadowOffsetValue));
  }

  getShadowOffsetDimensionValue(dimension) {
    const { value } = this.props;
    const shadowOffsetValue = value.get('shadowOffset', {});

    return shadowOffsetValue[dimension];
  }

  renderColorInputSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.colorInputSection}>
        <ColorField
          name="Shadow Color"
          onChangeValue={(newValue) => onChangeValue(value.set('shadowColor', newValue))}
          value={value.get('shadowColor')}
        />
      </View>
    );
  }

  renderNumericalInputsSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.numericalInputsSection}>
        <View style={styles.numericalInputsSectionRow}>
          <NumberIncrementField
            name="Radius"
            placeholder="--"
            unit="px"
            onChangeValue={(newValue) => onChangeValue(value.set('shadowRadius', newValue))}
            value={value.get('shadowRadius')}
          />
          <NumberIncrementField
            name="Opacity"
            placeholder="--"
            unit="%"
            onChangeValue={(newValue) => onChangeValue(value.set('shadowOpacity', newValue))}
            value={value.get('shadowOpacity')}
          />
        </View>
        <View style={styles.numericalInputsSectionRow}>
          <NumberIncrementField
            name="Height Offset"
            placeholder="--"
            unit="px"
            onChangeValue={(newValue) => this.onChangeShadowOffsetDimensionValue('height', newValue)}
            value={this.getShadowOffsetDimensionValue('height')}
          />
          <NumberIncrementField
            name="Width Offset"
            placeholder="--"
            unit="px"
            onChangeValue={(newValue) => this.onChangeShadowOffsetDimensionValue('width', newValue)}
            value={this.getShadowOffsetDimensionValue('width')}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderColorInputSection()}
        {this.renderNumericalInputsSection()}
      </View>
    );
  }
}
