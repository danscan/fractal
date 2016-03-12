import React, { Component, View } from 'react-native';
import CheckButtonsGroup from '../../vendor/pro-inputs/components/CheckButtonsGroup';
import NumberIncrementField from '../../vendor/pro-inputs/components/NumberIncrementField';
import RadioButtonsGroup from '../../vendor/pro-inputs/components/RadioButtonsGroup';
import BoxMarginSides, { TOP, RIGHT } from '../../vendor/pro-inputs/components/BoxMarginSides';
import BoxPaddingSides, { BOTTOM, LEFT } from '../../vendor/pro-inputs/components/BoxPaddingSides';
import Picker from '../../vendor/pro-inputs/components/Picker';
import styles from './styles';

export default class InterfaceEditorInspectorStyleEditor extends Component {
  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}
