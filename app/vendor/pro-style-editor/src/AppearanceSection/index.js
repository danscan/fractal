import React, { Component, Image, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  ColorField,
  NumberIncrementField,
  RadioButtonsGroup,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class AppearanceSection extends Component {
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
        <ColorField
          name="Background Color"
          value="#96c400"
        />

        <RadioButtonsGroup
          name="Backface Visibility"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioShow.png')}
                style={{
                  width: 17,
                  height: 9,
                }}
              />),
              value: 'visible',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioCross.png')}
                style={{
                  width: 12,
                  height: 12,
                }}
              />),
              value: 'hidden',
            },
          ]}
          selectedValue="visible"
        />

        <NumberIncrementField
          name="Opacity"
          unit="%"
          value={100}
        />
      </View>
    );
  }
}
