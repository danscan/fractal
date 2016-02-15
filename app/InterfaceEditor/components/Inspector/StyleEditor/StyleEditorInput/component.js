import React, { Component, Image, PropTypes, ScrollView, View } from 'react-native';
import { elementPathPropType } from '../../../../constants/propTypes';
import IncrementField from './IncrementField';
import RadioButtonsGroup from './RadioButtonsGroup';
import MarginPaddingInput from './MarginPaddingInput';
import Section from './Section';
import styles from './styles';

// (Radio button images)
import radioArrowDownImage from './assets/img/radioArrowDown.png';
import radioArrowRightImage from './assets/img/radioArrowRight.png';
import radioAlignCenterImage from './assets/img/radioAlignCenter.png';
import radioAlignStretchImage from './assets/img/radioAlignStretch.png';
import radioAlignTopImage from './assets/img/radioAlignTop.png';
import radioAlignRightImage from './assets/img/radioAlignRight.png';
import radioAlignBottomImage from './assets/img/radioAlignBottom.png';
import radioAlignLeftImage from './assets/img/radioAlignLeft.png';
import radioJustifySpaceBetweenImage from './assets/img/radioJustifySpaceBetween.png';
import radioJustifySpaceAroundImage from './assets/img/radioJustifySpaceAround.png';
import radioCrossImage from './assets/img/radioCross.png';
import radioShowImage from './assets/img/radioShow.png';
import radioFillBucketImage from './assets/img/radioFillBucket.png';

export default class StyleEditorInput extends Component {
  static propTypes = {
    elementPath: elementPathPropType.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    propName: PropTypes.string.isRequired,
    propType: PropTypes.func.isRequired,
    propValue: PropTypes.object,
  };

  renderPositionAndContentSection() {
    const {
      onChangeValue,
      propValue,
    } = this.props;

    return (
      <Section title="Position & Content">
        <View style={styles.wrapRow}>
          <IncrementField
            name="Flex Grow"
            onChangeValue={(newValue) => onChangeValue(propValue.set('flex', newValue))}
            placeholder="--"
            value={propValue.get('flex')}
          />
          <RadioButtonsGroup
            name="Flex Direction"
            onChangeValue={(newValue) => onChangeValue(propValue.set('flexDirection', newValue))}
            options={[
              { image: <Image source={radioArrowDownImage} style={{ width: 15, height: 16 }}/>, propValue: 'column' },
              { image: <Image source={radioArrowRightImage} style={{ width: 15, height: 14 }}/>, propValue: 'row' },
            ]}
            value={propValue.get('flexDirection', 'column')}
          />
          <RadioButtonsGroup
            name="Flex Wrap"
            onChangeValue={(newValue) => onChangeValue(propValue.set('flexWrap', newValue))}
            options={[
              { text: 'On', propValue: 'wrap' },
              { text: 'Off', propValue: 'nowrap' },
            ]}
            value={propValue.get('flexWrap', 'nowrap')}
          />
        </View>
        <View style={styles.wrapRow}>
          <RadioButtonsGroup
            name="Align Items"
            onChangeValue={(newValue) => onChangeValue(propValue.set('alignItems', newValue))}
            options={[
              { image: <Image source={radioAlignLeftImage} style={{ width: 13, height: 13 }}/>, propValue: 'flex-start' },
              { image: <Image source={radioAlignStretchImage} style={{ width: 13, height: 13 }}/>, propValue: 'stretch' },
              { image: <Image source={radioAlignCenterImage} style={{ width: 13, height: 13 }}/>, propValue: 'center' },
              { image: <Image source={radioAlignRightImage} style={{ width: 13, height: 13 }}/>, propValue: 'flex-end' },
            ]}
            value={propValue.get('alignItems', 'stretch')}
          />
          <RadioButtonsGroup
            name="Justify Content"
            onChangeValue={(newValue) => onChangeValue(propValue.set('justifyContent', newValue))}
            options={[
              { image: <Image source={radioAlignTopImage} style={{ width: 13, height: 13 }}/>, propValue: 'flex-start' },
              { image: <Image source={radioAlignCenterImage} style={{ width: 13, height: 13, transform: [{ rotate: '90deg' }] }}/>, propValue: 'center' },
              { image: <Image source={radioAlignBottomImage} style={{ width: 13, height: 13 }}/>, propValue: 'flex-end' },
              { image: <Image source={radioJustifySpaceBetweenImage} style={{ width: 13, height: 13 }}/>, propValue: 'space-between' },
              { image: <Image source={radioJustifySpaceAroundImage} style={{ width: 13, height: 13 }}/>, propValue: 'space-around' },
            ]}
            value={propValue.get('justifyContent', 'flex-start')}
          />
          <RadioButtonsGroup
            name="Align Self"
            onChangeValue={(newValue) => onChangeValue(propValue.set('alignSelf', newValue))}
            options={[
              { text: 'Auto', propValue: 'auto' },
              { image: <Image source={radioAlignLeftImage} style={{ width: 13, height: 13 }}/>, propValue: 'flex-start' },
              { image: <Image source={radioAlignStretchImage} style={{ width: 13, height: 13 }}/>, propValue: 'stretch' },
              { image: <Image source={radioAlignCenterImage} style={{ width: 13, height: 13 }}/>, propValue: 'center' },
              { image: <Image source={radioAlignRightImage} style={{ width: 13, height: 13 }}/>, propValue: 'flex-end' },
            ]}
            value={propValue.get('alignSelf', 'auto')}
          />
        </View>
        <View style={styles.wrapRow}>
          <RadioButtonsGroup
            name="Overflow"
            onChangeValue={(newValue) => onChangeValue(propValue.set('overflow', newValue))}
            options={[
              { image: <Image source={radioShowImage} style={{ width: 17, height: 9 }}/>, propValue: 'visible' },
              { image: <Image source={radioCrossImage} style={{ width: 12, height: 12 }}/>, propValue: 'hidden' },
            ]}
            value={propValue.get('overflow', 'visible')}
          />
        </View>
        <MarginPaddingInput
          onChangeValue={(newValue) => onChangeValue(newValue)}
          value={propValue}
        />
        <View style={styles.wrapRow}>
          <IncrementField
            name="Width"
            onChangeValue={(newValue) => onChangeValue(propValue.set('width', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('width')}
          />
          <IncrementField
            name="Min Width"
            onChangeValue={(newValue) => onChangeValue(propValue.set('minWidth', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('minWidth')}
          />
          <IncrementField
            name="Max Width"
            onChangeValue={(newValue) => onChangeValue(propValue.set('maxWidth', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('maxWidth')}
          />
          <IncrementField
            name="Height"
            onChangeValue={(newValue) => onChangeValue(propValue.set('height', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('height')}
          />
          <IncrementField
            name="Min Height"
            onChangeValue={(newValue) => onChangeValue(propValue.set('minHeight', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('minHeight')}
          />
          <IncrementField
            name="Max Height"
            onChangeValue={(newValue) => onChangeValue(propValue.set('maxHeight', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('maxHeight')}
          />
          <RadioButtonsGroup
            name="Position"
            onChangeValue={(newValue) => onChangeValue(propValue.set('position', newValue))}
            options={[
              { text: 'Relative', propValue: 'relative' },
              { text: 'absolute', propValue: 'absolute' },
            ]}
            value={propValue.get('position', 'relative')}
          />
          <IncrementField
            name="Top"
            onChangeValue={(newValue) => onChangeValue(propValue.set('top', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('top')}
          />
          <IncrementField
            name="Right"
            onChangeValue={(newValue) => onChangeValue(propValue.set('right', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('right')}
          />
          <IncrementField
            name="Bottom"
            onChangeValue={(newValue) => onChangeValue(propValue.set('bottom', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('bottom')}
          />
          <IncrementField
            name="Left"
            onChangeValue={(newValue) => onChangeValue(propValue.set('left', newValue))}
            placeholder="--"
            unit="px"
            value={propValue.get('left')}
          />
        </View>
      </Section>
    );
  }

  render() {
    const {
      onChangeValue,
      propValue,
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        {this.renderPositionAndContentSection()}
        <Section title="Appearance">
          <View style={styles.wrapRow}>
            <RadioButtonsGroup
              name="Background Color"
              onChangeValue={(newValue) => onChangeValue(propValue.set('backgroundColor', newValue))}
              options={[
                { text: 'None', propValue: null },
                { text: 'White', propValue: 'white' },
                { text: 'Red', propValue: 'red' },
                { text: 'Black', propValue: 'black' },
              ]}
              value={propValue.get('backgroundColor') || null}
            />
            <RadioButtonsGroup
              name="Backface Visibility"
              onChangeValue={(newValue) => onChangeValue(propValue.set('backfaceVisibility', newValue))}
              options={[
                { image: <Image source={radioShowImage} style={{ width: 17, height: 9 }}/>, propValue: 'visible' },
                { image: <Image source={radioCrossImage} style={{ width: 12, height: 12 }}/>, propValue: 'hidden' },
              ]}
              value={propValue.get('backfaceVisibility', 'visible')}
            />
            <IncrementField
              name="Opacity"
              onChangeValue={(newValue) => onChangeValue(propValue.set('opacity', newValue))}
              placeholder="--"
              unit="%"
              value={propValue.get('opacity') || 100}
            />
          </View>
        </Section>
        <Section title="Border"/>
        <Section title="Shadow"/>
        <Section title="Transforms"/>
        <Section title="Image"/>
        <Section title="Text"/>
      </ScrollView>
    );
  }
}
