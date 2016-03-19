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
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.container}>
        <ColorField
          name="Background Color"
          onChangeValue={(newValue) => onChangeValue(value.set('backgroundColor', newValue))}
          value={value.get('backgroundColor')}
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
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('backfaceVisibility', newValue))}
          selectedValue={value.get('backfaceVisibility', 'hidden')}
        />

        <NumberIncrementField
          name="Opacity"
          unit="%"
          onChangeValue={(newValue) => onChangeValue(value.set('opacity', newValue / 100))}
          value={(value.get('opacity', 1) * 100)}
        />
      </View>
    );
  }
}
