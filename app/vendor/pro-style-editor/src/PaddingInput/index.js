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
    onChangePaddingInputSelectedSides: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    paddingInputSelectedSides: BoxPaddingSides.propTypes.selectedSides,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    const {
      onChangePaddingInputSelectedSides,
      paddingInputSelectedSides,
    } = this.props;

    return (
      <View style={styles.container}>
        <BoxPaddingSides
          selectedSides={paddingInputSelectedSides}
          onChangeSelectedSides={onChangePaddingInputSelectedSides}
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
