import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import BorderSidesInput from '../BorderSidesInput';
import BorderCornersInput from '../BorderCornersInput';
import styles from './styles';

export default class BorderSection extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  renderBorderSidesSection() {
    return (
      <View style={styles.borderSidesSection}>
        <BorderSidesInput {...this.props}/>
      </View>
    );
  }

  renderBorderCornersSection() {
    return (
      <View style={styles.borderCornersSection}>
        <BorderCornersInput {...this.props}/>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderBorderSidesSection()}
        {this.renderBorderCornersSection()}
      </View>
    );
  }
}
