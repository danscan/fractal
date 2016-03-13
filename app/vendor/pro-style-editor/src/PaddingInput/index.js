import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  BoxPaddingSides,
  NumberIncrementField,
  boxSides,
} from 'pro-inputs';
import styles from './styles';

export default class PaddingInput extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    return (
      <View style={styles.container}>
        <BoxPaddingSides
          selectedSides={boxSides.ALL_SIDES}
        />
        <NumberIncrementField
          name="Padding Vertical"
          unit="px"
          value={0}
        />
      </View>
    );
  }
}
