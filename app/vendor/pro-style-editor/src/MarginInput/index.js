import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  BoxMarginSides,
  NumberIncrementField,
  boxSides,
} from 'pro-inputs';
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
      marginInputSelectedSides,
    } = this.props;

    return (
      <View style={styles.container}>
        <BoxMarginSides
          selectedSides={marginInputSelectedSides}
          onChangeSelectedSides={onChangeMarginInputSelectedSides}
        />
        <NumberIncrementField
          name="Margin Vertical"
          unit="px"
          value={0}
        />
      </View>
    );
  }
}
