import React, { Component, PropTypes } from 'react';
import { Image, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  NumberIncrementField,
  RadioButtonsGroup,
} from '../../../pro-inputs/src';
import MarginInput from '../MarginInput';
import PaddingInput from '../PaddingInput';
import styles from './styles';

export default class PositionAndContentSection extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map.isRequired,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  renderContentPositioningSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.contentPositioningSection}>
        <NumberIncrementField
          name="Flex Grow"
          onChangeValue={(newValue) => onChangeValue(value.set('flex', newValue || undefined))}
          value={value.get('flex')}
        />
        <RadioButtonsGroup
          name="Flex Direction"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioArrowDown.png')}
                style={{
                  width: 15,
                  height: 16,
                }}
              />),
              value: 'column',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioArrowRight.png')}
                style={{
                  width: 15,
                  height: 14,
                }}
              />),
              value: 'row',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('flexDirection', newValue))}
          selectedValue={value.get('flexDirection', 'column')}
        />
        <RadioButtonsGroup
          name="Flex Wrap"
          items={[
            {
              text: 'On',
              value: 'wrap',
            },
            {
              text: 'Off',
              value: 'nowrap',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('flexWrap', newValue))}
          selectedValue={value.get('flexWrap', 'nowrap')}
        />
        <RadioButtonsGroup
          name="Align Items"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioAlignLeft.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '0deg' }],
                }}
              />),
              value: 'flex-start',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignStretch.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '0deg' }],
                }}
              />),
              value: 'stretch',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignCenter.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '0deg' }],
                }}
              />),
              value: 'center',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignRight.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '0deg' }],
                }}
              />),
              value: 'flex-end',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('alignItems', newValue))}
          selectedValue={value.get('alignItems', 'stretch')}
        />
        <RadioButtonsGroup
          name="Justify Content"
          items={[
            {
              image: (<Image
                source={require('../../assets/img/radioAlignLeft.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '90deg' }],
                }}
              />),
              value: 'flex-start',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignCenter.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '90deg' }],
                }}
              />),
              value: 'center',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignRight.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '90deg' }],
                }}
              />),
              value: 'flex-end',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioJustifySpaceBetween.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '0deg' }],
                }}
              />),
              value: 'space-between',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioJustifySpaceAround.png')}
                style={{
                  width: 13,
                  height: 13,
                  transform: [{ rotate: '0deg' }],
                }}
              />),
              value: 'space-around',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('justifyContent', newValue))}
          selectedValue={value.get('justifyContent', 'flex-start')}
        />
        <RadioButtonsGroup
          name="Align Self"
          items={[
            {
              text: 'Auto',
              value: 'auto',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignLeft.png')}
                style={{
                  width: 13,
                  height: 13,
                }}
              />),
              value: 'flex-start',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignStretch.png')}
                style={{
                  width: 13,
                  height: 13,
                }}
              />),
              value: 'stretch',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignCenter.png')}
                style={{
                  width: 13,
                  height: 13,
                }}
              />),
              value: 'center',
            },
            {
              image: (<Image
                source={require('../../assets/img/radioAlignRight.png')}
                style={{
                  width: 13,
                  height: 13,
                }}
              />),
              value: 'flex-end',
            },
          ]}
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('alignSelf', newValue))}
          selectedValue={value.get('alignSelf', 'auto')}
        />
        <RadioButtonsGroup
          name="Overflow"
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
          onChangeSelectedValue={(newValue) => onChangeValue(value.set('overflow', newValue))}
          selectedValue={value.get('overflow', 'visible')}
        />
      </View>
    );
  }

  renderMarginAndPaddingSection() {
    return (
      <View style={styles.marginAndPaddingSection}>
        <MarginInput {...this.props}/>
        <PaddingInput {...this.props}/>
      </View>
    );
  }

  renderBoxSizeSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.boxSizeSection}>
        <View style={styles.boxSizeSectionColumn}>
          <NumberIncrementField
            name="Width"
            placeholder="--"
            onChangeValue={(newValue) => onChangeValue(value.set('width', newValue))}
            value={value.get('width')}
            unit="px"
          />
          <NumberIncrementField
            name="Min Width"
            placeholder="--"
            onChangeValue={(newValue) => onChangeValue(value.set('minWidth', newValue))}
            value={value.get('minWidth')}
            unit="px"
          />
          <NumberIncrementField
            name="Max Width"
            placeholder="--"
            onChangeValue={(newValue) => onChangeValue(value.set('maxWidth', newValue))}
            value={value.get('maxWidth')}
            unit="px"
          />
        </View>
        <View style={styles.boxSizeSectionColumn}>
          <NumberIncrementField
            name="Height"
            placeholder="--"
            onChangeValue={(newValue) => onChangeValue(value.set('height', newValue))}
            value={value.get('height')}
            unit="px"
          />
          <NumberIncrementField
            name="Min Height"
            placeholder="--"
            onChangeValue={(newValue) => onChangeValue(value.set('minHeight', newValue))}
            value={value.get('minHeight')}
            unit="px"
          />
          <NumberIncrementField
            name="Max Height"
            placeholder="--"
            onChangeValue={(newValue) => onChangeValue(value.set('maxHeight', newValue))}
            value={value.get('maxHeight')}
            unit="px"
          />
        </View>
      </View>
    );
  }

  renderBoxPositionSection() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <View style={styles.boxPositionSection}>
        <View style={styles.boxPositionSectionColumn}>
          <RadioButtonsGroup
            name="Position"
            items={[
              { text: 'Relative', value: 'relative' },
              { text: 'Absolute', value: 'absolute' },
            ]}
            onChangeSelectedValue={(newValue) => onChangeValue(value.set('position', newValue))}
            selectedValue={value.get('position', 'relative')}
          />
        </View>
        <View style={styles.boxPositionSectionColumn}>
          <NumberIncrementField
            name="Top"
            placeholder="Auto"
            unit="px"
            onChangeValue={(newValue) => onChangeValue(value.set('top', newValue))}
            value={value.get('top')}
          />
          <NumberIncrementField
            name="Right"
            placeholder="Auto"
            unit="px"
            onChangeValue={(newValue) => onChangeValue(value.set('right', newValue))}
            value={value.get('right')}
          />
          <NumberIncrementField
            name="Bottom"
            placeholder="Auto"
            unit="px"
            onChangeValue={(newValue) => onChangeValue(value.set('bottom', newValue))}
            value={value.get('bottom')}
          />
          <NumberIncrementField
            name="Left"
            placeholder="Auto"
            unit="px"
            onChangeValue={(newValue) => onChangeValue(value.set('left', newValue))}
            value={value.get('left')}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.continer}>
        {this.renderContentPositioningSection()}
        {this.renderMarginAndPaddingSection()}
        {this.renderBoxSizeSection()}
        {this.renderBoxPositionSection()}
      </View>
    );
  }
}
