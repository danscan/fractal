import React, { Component, Image, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  ColorField,
  BoxBorderSides,
  RadioButtonsGroup,
  NumberIncrementField,
  boxSides,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class BorderSidesInput extends Component {
  static propTypes = {
    borderSidesInputSelectedSides: BoxBorderSides.propTypes.selectedSides,
    onChangeBorderSidesInputSelectedSides: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  render() {
    const {
      borderSidesInputSelectedSides,
      onChangeBorderSidesInputSelectedSides,
    } = this.props;
    const colorPropName = _getBorderPropName(borderSidesInputSelectedSides, 'Color');
    const stylePropName = _getBorderPropName(borderSidesInputSelectedSides, 'Style');
    const widthPropName = _getBorderPropName(borderSidesInputSelectedSides, 'Width');
    console.log('colorPropName:', colorPropName);
    console.log('stylePropName:', stylePropName);
    console.log('widthPropName:', widthPropName);

    return (
      <View style={styles.container}>
        <View style={styles.controlColumn}>
          <BoxBorderSides
            onChangeSelectedSides={onChangeBorderSidesInputSelectedSides}
            selectedSides={borderSidesInputSelectedSides}
          />
        </View>
        <View style={styles.inputsColumn}>
          <RadioButtonsGroup
            name="Border Style"
            items={[
              {
                image: (<Image
                  source={require('../../assets/img/radioCross.png')}
                  style={{
                    width: 12,
                    height: 12,
                  }}
                />),
                value: undefined,
              },
              {
                image: (<Image
                  source={require('../../assets/img/radioBorderStyleSolid.png')}
                  style={{
                    width: 16,
                    height: 2,
                  }}
                />),
                value: 'solid',
              },
              {
                image: (<Image
                  source={require('../../assets/img/radioBorderStyleDashed.png')}
                  style={{
                    width: 16,
                    height: 2,
                  }}
                />),
                value: 'dashed',
              },
              {
                image: (<Image
                  source={require('../../assets/img/radioBorderStyleDotted.png')}
                  style={{
                    width: 16,
                    height: 2,
                  }}
                />),
                value: 'dotted',
              },
            ]}
            selectedValue={undefined}
          />
          <NumberIncrementField
            name="Width"
            placeholder="--"
            unit="px"
            value={undefined}
          />
          <ColorField
            value={undefined}
          />
        </View>
      </View>
    );
  }
}

// (Private helpers)
function _getBorderPropName(selectedSides, basePropName) {
  if (selectedSides === boxSides.ALL_SIDES) {
    return `border${basePropName}`;
  }

  return `border${selectedSides}${basePropName}`;
}
