import React, { Component, PropTypes, ScrollView, View } from 'react-native';
import { Picker } from '../../vendor/pro-inputs/src';
import InterfaceEditorStyleEditorInput from '../InterfaceEditorStyleEditorInput';
import styles from './styles';

export default class InterfaceEditorStyleEditor extends Component {
  static propTypes = {
    propTypes: PropTypes.object,
    selectedProp: PropTypes.string.isRequired,
    setSelectedProp: PropTypes.func.isRequired,
  };

  render() {
    const {
      propTypes,
      selectedProp,
      setSelectedProp,
    } = this.props;
    const propPickerItems = _getPropPickerItems(propTypes);

    return (
      <View style={styles.container}>
        <View style={styles.inputContext}>
          <Picker
            name="Prop"
            items={propPickerItems}
            onChangeSelectedValue={setSelectedProp}
            selectedValue={selectedProp}
          />
        </View>
        <ScrollView
          contentContainerStyle={styles.inputScrollViewContentContainer}
          style={styles.inputScrollView}
        >
          <InterfaceEditorStyleEditorInput/>
        </ScrollView>
      </View>
    );
  }
}

// (Private helpers)
function _getPropPickerItems(propTypes = {}) {
  const propNames = Object.keys(propTypes);

  return propNames.map(propName => ({
    label: propName,
    value: propName,
  }));
}
