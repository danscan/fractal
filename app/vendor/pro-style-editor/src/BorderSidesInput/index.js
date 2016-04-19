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
    initialBorderSidesInputSelectedSides: BoxBorderSides.propTypes.selectedSides.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    initialBorderSidesInputSelectedSides: boxSides.ALL_SIDES,
    onChangeValue: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      borderSidesInputSelectedSides: props.initialBorderSidesInputSelectedSides,
    };
  }

  render() {
    const {
      onChangeValue,
      value,
    } = this.props;
    const { borderSidesInputSelectedSides } = this.state;
    const colorPropName = _getBorderPropName(borderSidesInputSelectedSides, 'Color');
    const stylePropName = _getBorderPropName(borderSidesInputSelectedSides, 'Style');
    const widthPropName = _getBorderPropName(borderSidesInputSelectedSides, 'Width');

    return (
      <View style={styles.container}>
        <View style={styles.controlColumn}>
          <BoxBorderSides
            onChangeSelectedSides={(newBorderSidesInputSelectedSides) => this.setState({
              borderSidesInputSelectedSides: newBorderSidesInputSelectedSides,
            })}
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
            onChangeValue={(newValue) => onChangeValue(value.set(stylePropName, newValue))}
            value={(value.get(stylePropName))}
          />
          <NumberIncrementField
            name="Width"
            placeholder="--"
            unit="px"
            onChangeValue={(newValue) => onChangeValue(value.set(widthPropName, newValue))}
            value={(value.get(widthPropName))}
          />
          <ColorField
            onChangeValue={(newValue) => onChangeValue(value.set(colorPropName, newValue))}
            value={(value.get(colorPropName))}
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
