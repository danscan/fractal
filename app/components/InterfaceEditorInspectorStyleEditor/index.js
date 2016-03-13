import React, { Component, ScrollView, View } from 'react-native';
import { Picker } from 'pro-inputs';
import InterfaceEditorInspectorStyleEditorInput from '../InterfaceEditorInspectorStyleEditorInput';
import styles from './styles';

export default class InterfaceEditorInspectorStyleEditor extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContextPickers}>
          <Picker
            name="Prop"
            items={[
              { label: 'style', value: 'style' },
              { label: 'contentContainerStyle', value: 'contentContainerStyle' },
            ]}
            selectedValue="style"
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
            selectedValue="all"
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.inputScrollViewContentContainer}
          style={styles.inputScrollView}
        >
          <InterfaceEditorInspectorStyleEditorInput/>
        </ScrollView>
      </View>
    );
  }
}
