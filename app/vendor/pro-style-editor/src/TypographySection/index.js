import React, { Component, PropTypes } from 'react';
import { Image, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  ColorField,
  NumberIncrementField,
  Picker,
  RadioButtonsGroup,
} from '../../../pro-inputs/src';
import styles from './styles';

export default class TypographySection extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  renderTypeAppearancePickersSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.typeAppearancePickersSection}>
        <Picker
          name="Font Family"
          items={[
            { label: 'Apple Color Emoji', value: 'AppleColorEmoji' },
            { label: 'Arial', value: 'Arial' },
            { label: 'Arial Rounded', value: 'ArialRoundedMTBold' },
            { label: 'Avenir', value: 'Avenir' },
            { label: 'Copperplate', value: 'Copperplate' },
            { label: 'Courier', value: 'Courier' },
            { label: 'Futura', value: 'Futura' },
            { label: 'Georgia', value: 'Georgia' },
            { label: 'Helvetica', value: 'Helvetica' },
            { label: 'Helvetica Neue', value: 'HelveticaNeue' },
            { label: 'Verdana', value: 'Verdana' },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('fontFamily', newValue))}
          selectedValue={value.get('fontFamily', 'Avenir')}
        />
        <Picker
          name="Font Weight"
          items={[
            { label: 'Normal', value: 'normal' },
            { label: 'Bold', value: 'bold' },
            { label: '100', value: '100' },
            { label: '200', value: '200' },
            { label: '300', value: '300' },
            { label: '400', value: '400' },
            { label: '500', value: '500' },
            { label: '600', value: '600' },
            { label: '700', value: '700' },
            { label: '800', value: '800' },
            { label: '900', value: '900' },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('fontWeight', newValue))}
          selectedValue={value.get('fontWeight', 'normal')}
        />
      </View>
    );
  }

  renderTypeAppearanceSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.typeAppearanceSection}>
        <RadioButtonsGroup
          name="Font Style"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioFontStyleNormal.png')}
                style={{
                  width: 18,
                  height: 12,
                }}
              />),
              value: 'normal',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioFontStyleItalic.png')}
                style={{
                  width: 19,
                  height: 12,
                }}
              />),
              value: 'italic',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('fontStyle', newValue))}
          selectedValue={value.get('fontStyle', 'normal')}
        />
        <ColorField
          name="Color"
          onChangeValue={(newValue) => onChangeValue(value.set('color', newValue))}
          value={(value.get('color', 'black'))}
        />
        <NumberIncrementField
          name="Font Size"
          onChangeValue={(newValue) => onChangeValue(value.set('fontSize', newValue))}
          value={(value.get('fontSize', 14))}
        />
      </View>
    );
  }

  renderTypeLayoutAndDecorationSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.typeLayoutAndDecorationSection}>
        <RadioButtonsGroup
          name="Text Align"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioTextAlignLeft.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
              />),
              value: 'left',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioTextAlignCenter.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
              />),
              value: 'center',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioTextAlignRight.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
              />),
              value: 'right',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioTextAlignJustify.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
              />),
              value: 'justify',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('textAlign', newValue))}
          selectedValue={value.get('textAlign', 'left')}
        />
        <RadioButtonsGroup
          name="Writing Direction"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioWritingDirectionLTR.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
              />),
              value: 'ltr',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioWritingDirectionRTL.png')}
                style={{
                  width: 16,
                  height: 16,
                }}
              />),
              value: 'rtl',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('writingDirection', newValue))}
          selectedValue={value.get('writingDirection', 'ltr')}
        />
        <RadioButtonsGroup
          name="Text Decoration Line"
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
                source={require('../../assets/img/radioTextDecorationUnderline.png')}
                style={{
                  width: 13,
                  height: 16,
                }}
              />),
              value: 'underline',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioTextDecorationLineThrough.png')}
                style={{
                  width: 12,
                  height: 16,
                }}
              />),
              value: 'line-through',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('textDecorationLine', newValue))}
          selectedValue={value.get('textDecorationLine')}
        />
        <RadioButtonsGroup
          name="Text Decoration Style"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioTextDecorationStyleSolid.png')}
                style={{
                  width: 16,
                  height: 2,
                }}
              />),
              value: 'solid',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioTextDecorationStyleDouble.png')}
                style={{
                  width: 16,
                  height: 3,
                }}
              />),
              value: 'double',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioTextDecorationStyleDashed.png')}
                style={{
                  width: 16,
                  height: 2,
                }}
              />),
              value: 'dashed',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioTextDecorationStyleDotted.png')}
                style={{
                  width: 16,
                  height: 2,
                }}
              />),
              value: 'dotted',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('textDecorationStyle', newValue))}
          selectedValue={value.get('textDecorationStyle', 'solid')}
        />
        <ColorField
          name="Text Decoration Color"
          placeholder="Auto"
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('textDecorationColor', newValue))}
          selectedValue={value.get('textDecorationColor')}
        />
      </View>
    );
  }

  renderSpacingSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.spacingSection}>
        <NumberIncrementField
          name="Line Height"
          placeholder="Auto"
          unit="px"
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('lineHeight', newValue))}
          selectedValue={value.get('lineHeight')}
        />
        <NumberIncrementField
          name="Letter Spacing"
          placeholder="Auto"
          unit="px"
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('letterSpacing', newValue))}
          selectedValue={value.get('letterSpacing')}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderTypeAppearancePickersSection()}
        {this.renderTypeAppearanceSection()}
        {this.renderTypeLayoutAndDecorationSection()}
        {this.renderSpacingSection()}
      </View>
    );
  }
}
