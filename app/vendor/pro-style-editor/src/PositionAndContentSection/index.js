import React, { Component, Image, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  NumberIncrementField,
  RadioButtonsGroup,
} from 'pro-inputs';
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
    return (
      <View style={styles.contentPositioningSection}>
        <NumberIncrementField
          name="Flex Grow"
          value={1}
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
          selectedValue="column"
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
          selectedValue="nowrap"
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
          selectedValue="stretch"
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
          selectedValue="flex-start"
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
          selectedValue="auto"
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
          selectedValue="visible"
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
    return (
      <View style={styles.boxSizeSection}>
        <View style={styles.boxSizeSectionColumn}>
          <NumberIncrementField
            name="Width"
            placeholder="--"
            value={100}
            unit="px"
          />
          <NumberIncrementField
            name="Min Width"
            placeholder="--"
            value={undefined}
            unit="px"
          />
          <NumberIncrementField
            name="Max Width"
            placeholder="--"
            value={undefined}
            unit="px"
          />
        </View>
        <View style={styles.boxSizeSectionColumn}>
          <NumberIncrementField
            name="Height"
            placeholder="--"
            value={100}
            unit="px"
          />
          <NumberIncrementField
            name="Min Height"
            placeholder="--"
            value={undefined}
            unit="px"
          />
          <NumberIncrementField
            name="Max Height"
            placeholder="--"
            value={undefined}
            unit="px"
          />
        </View>
      </View>
    );
  }

  renderBoxPositionSection() {
    return (
      <View style={styles.boxPositionSection}>
        <View style={styles.boxPositionSectionColumn}>
          <RadioButtonsGroup
            name="Position"
            items={[
              { text: 'Relative', value: 'relative' },
              { text: 'Absolute', value: 'absolute' },
            ]}
            selectedValue="relative"
          />
        </View>
        <View style={styles.boxPositionSectionColumn}>
          <NumberIncrementField
            name="Top"
            placeholder="Auto"
            value={undefined}
          />
          <NumberIncrementField
            name="Right"
            placeholder="Auto"
            value={undefined}
          />
          <NumberIncrementField
            name="Bottom"
            placeholder="Auto"
            value={undefined}
          />
          <NumberIncrementField
            name="Left"
            placeholder="Auto"
            value={undefined}
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
