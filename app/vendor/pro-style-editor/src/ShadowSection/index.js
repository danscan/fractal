import React, { Component, Image, PropTypes, View } from 'react-native';
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

  renderColorInputSection() {
    return (
      <View style={styles.colorInputSection}>
        <ColorField
          name="Color"
          value="#808080"
        />
      </View>
    );
  }

  renderNumericalInputsSection() {
    return (
      <View style={styles.numericalInputsSection}>
        <View style={styles.numericalInputsSectionRow}>
          <NumberIncrementField
            name="Radius"
            placeholder="--"
            unit="px"
            value={undefined}
          />
          <NumberIncrementField
            name="Opacity"
            placeholder="--"
            unit="%"
            value={undefined}
          />
        </View>
        <View style={styles.numericalInputsSectionRow}>
          <NumberIncrementField
            name="Height Offset"
            placeholder="--"
            unit="px"
            value={undefined}
          />
          <NumberIncrementField
            name="Width Offset"
            placeholder="--"
            unit="px"
            value={undefined}
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
