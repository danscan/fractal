import React, { Component, PropTypes, View } from 'react-native';
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
    return (
      <View style={styles.resizeModeSection}>
        <Picker
          name="Resize Mode"
          items={[
            { label: 'Contain', value: 'contain' },
            { label: 'Cover', value: 'cover' },
            { label: 'Stretch', value: 'stretch' },
          ]}
          selectedValue="contain"
        />
      </View>
    );
  }

  renderTintColorSection() {
    return (
      <View style={styles.tintColorSection}>
        <ColorField
          name="Tint Color"
          value={undefined}
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
