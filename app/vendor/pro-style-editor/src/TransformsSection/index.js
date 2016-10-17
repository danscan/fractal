import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import styles from './styles';

export default class TransformsSection extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    return (
      <View style={styles.continer}/>
    );
  }
}
