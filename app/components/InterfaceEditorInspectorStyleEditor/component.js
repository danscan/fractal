import React, { Component, PropTypes, ScrollView, View } from 'react-native';
import { Picker } from 'pro-inputs';
import InterfaceEditorInspectorStyleEditorInput from '../InterfaceEditorInspectorStyleEditorInput';
import styles from './styles';

export default class InterfaceEditorInspectorStyleEditor extends Component {
  static propTypes = {
    selectedProp: PropTypes.string.isRequired,
    selectedSizeClasses: PropTypes.string.isRequired,
    setSelectedProp: PropTypes.func.isRequired,
    setSelectedSizeClasses: PropTypes.func.isRequired,
  };

  render() {
    const {
      selectedProp,
      selectedSizeClasses,
      setSelectedProp,
      setSelectedSizeClasses,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputContextPickers}>
          <Picker
            name="Prop"
            items={[
              { label: 'style', value: 'style' },
              { label: 'contentContainerStyle', value: 'contentContainerStyle' },
            ]}
            onChangeSelectedValue={setSelectedProp}
            selectedValue={selectedProp}
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
            onChangeSelectedValue={setSelectedSizeClasses}
            selectedValue={selectedSizeClasses}
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
