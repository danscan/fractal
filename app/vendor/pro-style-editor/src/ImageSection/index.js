import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  ColorField,
  Picker,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class ImageSection extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  renderResizeModeSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.resizeModeSection}>
        <Picker
          name="Resize Mode"
          items={[
            { label: 'Contain', value: 'contain' },
            { label: 'Cover', value: 'cover' },
            { label: 'Stretch', value: 'stretch' },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('resizeMode', newValue))}
          selectedValue={value.get('resizeMode', 'contain')}
        />
      </View>
    );
  }

  renderTintColorSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.tintColorSection}>
        <ColorField
          name="Tint Color"
          onChangeValue={(newValue) => onChangeValue(value.set('tintColor', newValue))}
          value={(value.get('tintColor'))}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderResizeModeSection()}
        {this.renderTintColorSection()}
      </View>
    );
  }
}
