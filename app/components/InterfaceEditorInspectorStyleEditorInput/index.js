import React, { Component, ScrollView } from 'react-native';
import CheckButtonsGroup from '../../vendor/pro-inputs/components/CheckButtonsGroup';
import ColorField from '../../vendor/pro-inputs/components/ColorField';
import NumberIncrementField from '../../vendor/pro-inputs/components/NumberIncrementField';
import RadioButtonsGroup from '../../vendor/pro-inputs/components/RadioButtonsGroup';
import BoxMarginSides, { TOP, RIGHT } from '../../vendor/pro-inputs/components/BoxMarginSides';
import BoxPaddingSides, { BOTTOM, LEFT } from '../../vendor/pro-inputs/components/BoxPaddingSides';
import BoxBorderCorners, { TOP_RIGHT, TOP_LEFT } from '../../vendor/pro-inputs/components/BoxBorderCorners';
import BoxBorderSides, { ALL_SIDES } from '../../vendor/pro-inputs/components/BoxBorderSides';
import Picker from '../../vendor/pro-inputs/components/Picker';
import styles from './styles';

export default class InterfaceEditorInspectorStyleEditor extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <CheckButtonsGroup
          name="Position"
          items={[
            { text: 'Relative', value: 'relative' },
            { text: 'Absolute', value: 'absolute' },
          ]}
          selectedValues={['relative', 'absolute']}
        />

        <NumberIncrementField name="Number of Jawns" value={1} unit="jawn"/>

        <RadioButtonsGroup
          name="Position"
          items={[
            { text: 'Relative', value: 'relative' },
            { text: 'Absolute', value: 'absolute' },
          ]}
          selectedValue="relative"
        />

        <Picker
          name="Size Classes"
          items={[
            { label: 'All', value: 'all' },
            { label: 'Phone', value: 'phone' },
            { label: 'Tablet', value: 'tablet' },
            { label: 'TV', value: 'tv' },
            { label: 'Watch', value: 'watch' },
          ]}
        />

        <BoxMarginSides selectedSides={[TOP, RIGHT]}/>
        <BoxPaddingSides selectedSides={[BOTTOM, LEFT]}/>

        <ColorField name="Color" value="#94c600"/>

        <BoxBorderCorners selectedCorners={[TOP_RIGHT, TOP_LEFT]}/>
        <BoxBorderSides selectedSides={ALL_SIDES}/>
      </ScrollView>
    );
  }
}
