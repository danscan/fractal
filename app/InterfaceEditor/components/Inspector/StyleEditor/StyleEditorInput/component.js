import React, { Component, PropTypes, ScrollView } from 'react-native';
import { elementPathPropType } from '../../../../constants/propTypes';
import IncrementField from './IncrementField';
import RadioButtonsGroup from './RadioButtonsGroup';
import Section from './Section';
import styles from './styles';

export default class StyleEditorInput extends Component {
  static propTypes = {
    elementPath: elementPathPropType.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    propName: PropTypes.string.isRequired,
    propType: PropTypes.func.isRequired,
    value: PropTypes.object,
  };

  render() {
    const {
      onChangeValue,
      value,
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Section title="Position & Content">
          <IncrementField
            name="Flex Grow"
            onChangeValue={(newValue) => onChangeValue(value.set('flex', newValue))}
            placeholder="--"
            value={value.get('flex')}
          />
          <RadioButtonsGroup
            name="Flex Direction"
            onChangeValue={(newValue) => onChangeValue(value.set('flexDirection', newValue))}
            options={[
              { text: 'Row', value: 'row' },
              { text: 'Column', value: 'column' },
            ]}
            value={value.get('flexDirection') || 'row'}
          />
          <RadioButtonsGroup
            name="Flex Wrap"
            onChangeValue={(newValue) => onChangeValue(value.set('flexWrap', newValue))}
            options={[
              { text: 'On', value: 'wrap' },
              { text: 'Off', value: 'nowrap' },
            ]}
            value={value.get('flexWrap') || 'nowrap'}
          />
          <RadioButtonsGroup
            name="Align Items"
            onChangeValue={(newValue) => onChangeValue(value.set('alignItems', newValue))}
            options={[
              { text: 'Flex Start', value: 'flex-start' },
              { text: 'Stretch', value: 'stretch' },
              { text: 'Center', value: 'center' },
              { text: 'Flex End', value: 'flex-end' },
            ]}
            value={value.get('alignItems') || 'stretch'}
          />
          <RadioButtonsGroup
            name="Justify Content"
            onChangeValue={(newValue) => onChangeValue(value.set('justifyContent', newValue))}
            options={[
              { text: 'Flex Start', value: 'flex-start' },
              { text: 'Center', value: 'center' },
              { text: 'Flex End', value: 'flex-end' },
              { text: 'Space Between', value: 'space-between' },
              { text: 'Space Around', value: 'space-around' },
            ]}
            value={value.get('justifyContent') || 'flex-start'}
          />
          <RadioButtonsGroup
            name="Align Self"
            onChangeValue={(newValue) => onChangeValue(value.set('alignSelf', newValue))}
            options={[
              { text: 'Auto', value: 'auto' },
              { text: 'Flex Start', value: 'flex-start' },
              { text: 'Stretch', value: 'stretch' },
              { text: 'Center', value: 'center' },
              { text: 'Flex End', value: 'flex-end' },
            ]}
            value={value.get('alignSelf') || 'auto'}
          />
          <RadioButtonsGroup
            name="Overflow"
            onChangeValue={(newValue) => onChangeValue(value.set('overflow', newValue))}
            options={[
              { text: 'Visible', value: 'visible' },
              { text: 'Hidden', value: 'hidden' },
            ]}
            value={value.get('overflow') || 'visible'}
          />
          <IncrementField
            name="Margin"
            onChangeValue={(newValue) => onChangeValue(value.set('margin', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('margin')}
          />
          <IncrementField
            name="Margin Top"
            onChangeValue={(newValue) => onChangeValue(value.set('marginTop', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('marginTop')}
          />
          <IncrementField
            name="Margin Right"
            onChangeValue={(newValue) => onChangeValue(value.set('marginRight', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('marginRight')}
          />
          <IncrementField
            name="Margin Bottom"
            onChangeValue={(newValue) => onChangeValue(value.set('marginBottom', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('marginBottom')}
          />
          <IncrementField
            name="Margin Left"
            onChangeValue={(newValue) => onChangeValue(value.set('marginLeft', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('marginLeft')}
          />
          <IncrementField
            name="Padding"
            onChangeValue={(newValue) => onChangeValue(value.set('padding', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('padding')}
          />
          <IncrementField
            name="Padding Top"
            onChangeValue={(newValue) => onChangeValue(value.set('paddingTop', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('paddingTop')}
          />
          <IncrementField
            name="Padding Right"
            onChangeValue={(newValue) => onChangeValue(value.set('paddingRight', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('paddingRight')}
          />
          <IncrementField
            name="Padding Bottom"
            onChangeValue={(newValue) => onChangeValue(value.set('paddingBottom', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('paddingBottom')}
          />
          <IncrementField
            name="Padding Left"
            onChangeValue={(newValue) => onChangeValue(value.set('paddingLeft', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('paddingLeft')}
          />
          <IncrementField
            name="Width"
            onChangeValue={(newValue) => onChangeValue(value.set('width', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('width')}
          />
          <IncrementField
            name="Min Width"
            onChangeValue={(newValue) => onChangeValue(value.set('minWidth', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('minWidth')}
          />
          <IncrementField
            name="Max Width"
            onChangeValue={(newValue) => onChangeValue(value.set('maxWidth', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('maxWidth')}
          />
          <IncrementField
            name="Height"
            onChangeValue={(newValue) => onChangeValue(value.set('height', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('height')}
          />
          <IncrementField
            name="Min Height"
            onChangeValue={(newValue) => onChangeValue(value.set('minHeight', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('minHeight')}
          />
          <IncrementField
            name="Max Height"
            onChangeValue={(newValue) => onChangeValue(value.set('maxHeight', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('maxHeight')}
          />
          <RadioButtonsGroup
            name="Position"
            onChangeValue={(newValue) => onChangeValue(value.set('position', newValue))}
            options={[
              { text: 'Relative', value: 'relative' },
              { text: 'absolute', value: 'absolute' },
            ]}
            value={value.get('position') || 'relative'}
          />
          <IncrementField
            name="Top"
            onChangeValue={(newValue) => onChangeValue(value.set('top', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('top')}
          />
          <IncrementField
            name="Right"
            onChangeValue={(newValue) => onChangeValue(value.set('right', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('right')}
          />
          <IncrementField
            name="Bottom"
            onChangeValue={(newValue) => onChangeValue(value.set('bottom', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('bottom')}
          />
          <IncrementField
            name="Left"
            onChangeValue={(newValue) => onChangeValue(value.set('left', newValue))}
            placeholder="--"
            unit="px"
            value={value.get('left')}
          />
        </Section>
        <Section title="Appearance">
          <RadioButtonsGroup
            name="Background Color"
            onChangeValue={(newValue) => onChangeValue(value.set('backgroundColor', newValue))}
            options={[
              { text: 'None', value: null },
              { text: 'White', value: 'white' },
              { text: 'Red', value: 'red' },
              { text: 'Black', value: 'black' },
            ]}
            value={value.get('backgroundColor') || null}
          />
          <RadioButtonsGroup
            name="Backface Visibility"
            onChangeValue={(newValue) => onChangeValue(value.set('backfaceVisibility', newValue))}
            options={[
              { text: 'Visible', value: 'visible' },
              { text: 'Hidden', value: 'hidden' },
            ]}
            value={value.get('backfaceVisibility') || 'visible'}
          />
          <IncrementField
            name="Opacity"
            onChangeValue={(newValue) => onChangeValue(value.set('opacity', newValue))}
            placeholder="--"
            unit="%"
            value={value.get('opacity') || 100}
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
