import React, { Component, PropTypes, ScrollView, View } from 'react-native';
// import beginFullScreenPreviewButtonImage from '../../assets/img/beginFullScreenPreviewButton.png';
// import redoButtonImage from '../../assets/img/redoButton.png';
// import undoButtonImage from '../../assets/img/undoButton.png';
import IncrementField from './IncrementField';
import RadioButtonsGroup from './RadioButtonsGroup';
import Section from './Section';
import styles from './styles';

export default class StyleEditor extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    propType: PropTypes.func.isRequired,
    value: PropTypes.object,
  }

  render() {
    const { value } = this.props;

    return (
      <ScrollView style={styles.container}>
        <Section title="Position & Content">
          <IncrementField
            name="Flex Grow"
            onChangeValue={(newValue) => onChangeValue({ ...value, flex: newValue })}
            placeholder="--"
            unit="px"
            value={value.flex}
          />
          <RadioButtonsGroup
            name="Flex Direction"
            onChangeValue={(newValue) => onChangeValue({ ...value, flexDirection: newValue })}
            options={[
              { text: 'Row', value: 'row' },
              { text: 'Column', value: 'column' },
            ]}
            value={value.flexDirection || 'row'}
          />
          <RadioButtonsGroup
            name="Flex Wrap"
            onChangeValue={(newValue) => onChangeValue({ ...value, flexWrap: newValue })}
            options={[
              { text: 'On', value: 'wrap' },
              { text: 'Off', value: 'nowrap' },
            ]}
            value={value.flexWrap || 'nowrap'}
          />
          <RadioButtonsGroup
            name="Align Items"
            onChangeValue={(newValue) => onChangeValue({ ...value, alignItems: newValue })}
            options={[
              { text: 'Flex Start', value: 'flex-start' },
              { text: 'Stretch', value: 'stretch' },
              { text: 'Center', value: 'center' },
              { text: 'Flex End', value: 'flex-end' },
            ]}
            value={value.alignItems || 'stretch'}
          />
          <RadioButtonsGroup
            name="Justify Content"
            onChangeValue={(newValue) => onChangeValue({ ...value, justifyContent: newValue })}
            options={[
              { text: 'Flex Start', value: 'flex-start' },
              { text: 'Center', value: 'center' },
              { text: 'Flex End', value: 'flex-end' },
              { text: 'Space Between', value: 'space-between' },
              { text: 'Space Around', value: 'space-around' },
            ]}
            value={value.justifyContent || 'flex-start'}
          />
          <RadioButtonsGroup
            name="Align Self"
            onChangeValue={(newValue) => onChangeValue({ ...value, alignSelf: newValue })}
            options={[
              { text: 'Auto', value: 'auto' },
              { text: 'Flex Start', value: 'flex-start' },
              { text: 'Stretch', value: 'stretch' },
              { text: 'Center', value: 'center' },
              { text: 'Flex End', value: 'flex-end' },
            ]}
            value={value.alignSelf || 'auto'}
          />
          <RadioButtonsGroup
            name="Overflow"
            onChangeValue={(newValue) => onChangeValue({ ...value, overflow: newValue })}
            options={[
              { text: 'Visible', value: 'visible' },
              { text: 'Hidden', value: 'hidden' },
            ]}
            value={value.overflow || 'visible'}
          />
          <IncrementField
            name="Margin"
            onChangeValue={(newValue) => onChangeValue({ ...value, margin: newValue })}
            placeholder="--"
            unit="px"
            value={value.margin}
          />
          <IncrementField
            name="Margin Top"
            onChangeValue={(newValue) => onChangeValue({ ...value, marginTop: newValue })}
            placeholder="--"
            unit="px"
            value={value.marginTop}
          />
          <IncrementField
            name="Margin Right"
            onChangeValue={(newValue) => onChangeValue({ ...value, marginRight: newValue })}
            placeholder="--"
            unit="px"
            value={value.marginRight}
          />
          <IncrementField
            name="Margin Bottom"
            onChangeValue={(newValue) => onChangeValue({ ...value, marginBottom: newValue })}
            placeholder="--"
            unit="px"
            value={value.marginBottom}
          />
          <IncrementField
            name="Margin Left"
            onChangeValue={(newValue) => onChangeValue({ ...value, marginLeft: newValue })}
            placeholder="--"
            unit="px"
            value={value.marginLeft}
          />
          <IncrementField
            name="Padding"
            onChangeValue={(newValue) => onChangeValue({ ...value, padding: newValue })}
            placeholder="--"
            unit="px"
            value={value.padding}
          />
          <IncrementField
            name="Padding Top"
            onChangeValue={(newValue) => onChangeValue({ ...value, paddingTop: newValue })}
            placeholder="--"
            unit="px"
            value={value.paddingTop}
          />
          <IncrementField
            name="Padding Right"
            onChangeValue={(newValue) => onChangeValue({ ...value, paddingRight: newValue })}
            placeholder="--"
            unit="px"
            value={value.paddingRight}
          />
          <IncrementField
            name="Padding Bottom"
            onChangeValue={(newValue) => onChangeValue({ ...value, paddingBottom: newValue })}
            placeholder="--"
            unit="px"
            value={value.paddingBottom}
          />
          <IncrementField
            name="Padding Left"
            onChangeValue={(newValue) => onChangeValue({ ...value, paddingLeft: newValue })}
            placeholder="--"
            unit="px"
            value={value.paddingLeft}
          />
          <IncrementField
            name="Width"
            onChangeValue={(newValue) => onChangeValue({ ...value, width: newValue })}
            placeholder="--"
            unit="px"
            value={value.width}
          />
          <IncrementField
            name="Min Width"
            onChangeValue={(newValue) => onChangeValue({ ...value, minWidth: newValue })}
            placeholder="--"
            unit="px"
            value={value.minWidth}
          />
          <IncrementField
            name="Max Width"
            onChangeValue={(newValue) => onChangeValue({ ...value, maxWidth: newValue })}
            placeholder="--"
            unit="px"
            value={value.maxWidth}
          />
          <IncrementField
            name="Height"
            onChangeValue={(newValue) => onChangeValue({ ...value, height: newValue })}
            placeholder="--"
            unit="px"
            value={value.height}
          />
          <IncrementField
            name="Min Height"
            onChangeValue={(newValue) => onChangeValue({ ...value, minHeight: newValue })}
            placeholder="--"
            unit="px"
            value={value.minHeight}
          />
          <IncrementField
            name="Max Height"
            onChangeValue={(newValue) => onChangeValue({ ...value, maxHeight: newValue })}
            placeholder="--"
            unit="px"
            value={value.maxHeight}
          />
          <RadioButtonsGroup
            name="Position"
            onChangeValue={(newValue) => onChangeValue({ ...value, position: newValue })}
            options={[
              { text: 'Relative', value: 'relative' },
              { text: 'absolute', value: 'absolute' },
            ]}
            value={value.position || 'relative'}
          />
          <IncrementField
            name="Top"
            onChangeValue={(newValue) => onChangeValue({ ...value, top: newValue })}
            placeholder="--"
            unit="px"
            value={value.top}
          />
          <IncrementField
            name="Right"
            onChangeValue={(newValue) => onChangeValue({ ...value, right: newValue })}
            placeholder="--"
            unit="px"
            value={value.right}
          />
          <IncrementField
            name="Bottom"
            onChangeValue={(newValue) => onChangeValue({ ...value, bottom: newValue })}
            placeholder="--"
            unit="px"
            value={value.bottom}
          />
          <IncrementField
            name="Left"
            onChangeValue={(newValue) => onChangeValue({ ...value, left: newValue })}
            placeholder="--"
            unit="px"
            value={value.left}
          />
        </Section>
        <Section title="Appearance">
          <RadioButtonsGroup
            name="Background Color"
            onChangeValue={(newValue) => onChangeValue({ ...value, backgroundColor: newValue })}
            options={[
              { text: 'None', value: null },
              { text: 'White', value: 'white' },
              { text: 'Red', value: 'red' },
              { text: 'Black', value: 'black' },
            ]}
            value={value.backgroundColor || null}
          />
          <RadioButtonsGroup
            name="Backface Visibility"
            onChangeValue={(newValue) => onChangeValue({ ...value, backfaceVisibility: newValue })}
            options={[
              { text: 'Visible', value: 'visible' },
              { text: 'Hidden', value: 'hidden' },
            ]}
            value={value.backfaceVisibility || 'visible'}
          />
          <IncrementField
            name="Opacity"
            onChangeValue={(newValue) => onChangeValue({ ...value, opacity: newValue })}
            placeholder="--"
            unit="%"
            value={value.opacity || 100}
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
