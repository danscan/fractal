import React, { Component, PropTypes, ScrollView, View } from 'react-native';
import { Picker } from 'pro-inputs';
import InterfaceEditorInspectorStyleEditorInput from '../InterfaceEditorInspectorStyleEditorInput';
import styles from './styles';

export default class InterfaceEditorInspectorStyleEditor extends Component {
  static propTypes = {
    selectedProp: PropTypes.string.isRequired,
    setSelectedProp: PropTypes.func.isRequired,
  };

  render() {
    const {
      selectedProp,
      setSelectedProp,
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputContext}>
          <Picker
            name="Prop"
            items={[
              { label: 'style', value: 'style' },
              { label: 'contentContainerStyle', value: 'contentContainerStyle' },
            ]}
            onChangeSelectedValue={setSelectedProp}
            selectedValue={selectedProp}
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
