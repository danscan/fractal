import React, { Component, Image, PropTypes, ScrollView } from 'react-native';
import { elementPathPropType } from '../../../../constants/propTypes';
import IncrementField from './IncrementField';
import RadioButtonsGroup from './RadioButtonsGroup';
import Section from './Section';
import styles from './styles';

// (Radio button images)
import radioArrowDownImage from './assets/img/radioArrowDown.png';
import radioArrowRightImage from './assets/img/radioArrowRight.png';

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
          value={propValue.get('flexDirection') || 'row'}
        />
        <RadioButtonsGroup
          name="Flex Wrap"
          onChangeValue={(newValue) => onChangeValue(propValue.set('flexWrap', newValue))}
          options={[
            { text: 'On', propValue: 'wrap' },
            { text: 'Off', propValue: 'nowrap' },
          ]}
          value={propValue.get('flexWrap') || 'nowrap'}
        />
        <RadioButtonsGroup
          name="Align Items"
          onChangeValue={(newValue) => onChangeValue(propValue.set('alignItems', newValue))}
          options={[
            { text: 'Flex Start', propValue: 'flex-start' },
            { text: 'Stretch', propValue: 'stretch' },
            { text: 'Center', propValue: 'center' },
            { text: 'Flex End', propValue: 'flex-end' },
          ]}
          value={propValue.get('alignItems') || 'stretch'}
        />
        <RadioButtonsGroup
          name="Justify Content"
          onChangeValue={(newValue) => onChangeValue(propValue.set('justifyContent', newValue))}
          options={[
            { text: 'Flex Start', propValue: 'flex-start' },
            { text: 'Center', propValue: 'center' },
            { text: 'Flex End', propValue: 'flex-end' },
            { text: 'Space Between', propValue: 'space-between' },
            { text: 'Space Around', propValue: 'space-around' },
          ]}
          value={propValue.get('justifyContent') || 'flex-start'}
        />
        <RadioButtonsGroup
          name="Align Self"
          onChangeValue={(newValue) => onChangeValue(propValue.set('alignSelf', newValue))}
          options={[
            { text: 'Auto', propValue: 'auto' },
            { text: 'Flex Start', propValue: 'flex-start' },
            { text: 'Stretch', propValue: 'stretch' },
            { text: 'Center', propValue: 'center' },
            { text: 'Flex End', propValue: 'flex-end' },
          ]}
          value={propValue.get('alignSelf') || 'auto'}
        />
        <RadioButtonsGroup
          name="Overflow"
          onChangeValue={(newValue) => onChangeValue(propValue.set('overflow', newValue))}
          options={[
            { text: 'Visible', propValue: 'visible' },
            { text: 'Hidden', propValue: 'hidden' },
          ]}
          value={propValue.get('overflow') || 'visible'}
        />
        <IncrementField
          name="Margin"
          onChangeValue={(newValue) => onChangeValue(propValue.set('margin', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('margin')}
        />
        <IncrementField
          name="Margin Top"
          onChangeValue={(newValue) => onChangeValue(propValue.set('marginTop', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('marginTop')}
        />
        <IncrementField
          name="Margin Right"
          onChangeValue={(newValue) => onChangeValue(propValue.set('marginRight', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('marginRight')}
        />
        <IncrementField
          name="Margin Bottom"
          onChangeValue={(newValue) => onChangeValue(propValue.set('marginBottom', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('marginBottom')}
        />
        <IncrementField
          name="Margin Left"
          onChangeValue={(newValue) => onChangeValue(propValue.set('marginLeft', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('marginLeft')}
        />
        <IncrementField
          name="Padding"
          onChangeValue={(newValue) => onChangeValue(propValue.set('padding', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('padding')}
        />
        <IncrementField
          name="Padding Top"
          onChangeValue={(newValue) => onChangeValue(propValue.set('paddingTop', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('paddingTop')}
        />
        <IncrementField
          name="Padding Right"
          onChangeValue={(newValue) => onChangeValue(propValue.set('paddingRight', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('paddingRight')}
        />
        <IncrementField
          name="Padding Bottom"
          onChangeValue={(newValue) => onChangeValue(propValue.set('paddingBottom', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('paddingBottom')}
        />
        <IncrementField
          name="Padding Left"
          onChangeValue={(newValue) => onChangeValue(propValue.set('paddingLeft', newValue))}
          placeholder="--"
          unit="px"
          value={propValue.get('paddingLeft')}
        />
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
          value={propValue.get('position') || 'relative'}
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
              { text: 'Visible', propValue: 'visible' },
              { text: 'Hidden', propValue: 'hidden' },
            ]}
            value={propValue.get('backfaceVisibility') || 'visible'}
          />
          <IncrementField
            name="Opacity"
            onChangeValue={(newValue) => onChangeValue(propValue.set('opacity', newValue))}
            placeholder="--"
            unit="%"
            value={propValue.get('opacity') || 100}
          />
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
