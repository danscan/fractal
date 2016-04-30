import React, { Component, PropTypes, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import InterfaceEditorStyleEditorInput from '../InterfaceEditorStyleEditorInput';
import styles from './styles';

// (Button image assets)
import deleteButtonImage from '../../assets/img/deleteButton.png';
import duplicateButtonImage from '../../assets/img/duplicateButton.png';

export default class InterfaceEditorStyleSheetEditor extends Component {
  static propTypes = {
    onPressDeleteStyle: PropTypes.func.isRequired,
    onPressDuplicateStyle: PropTypes.func.isRequired,
    selectedStyleName: PropTypes.string.isRequired,
    setSelectedStyleName: PropTypes.func.isRequired,
  };

  renderStyleEditorInputScrollView() {
    return (
      <ScrollView
        contentContainerStyle={styles.inputScrollViewContentContainer}
        style={styles.inputScrollView}
      >
        <InterfaceEditorStyleEditorInput/>
      </ScrollView>
    );
  }

  renderSelectedStyleOptions() {
    const {
      onPressDeleteStyle,
      onPressDuplicateStyle,
      selectedStyleName,
      setSelectedStyleName,
    } = this.props;

    // If no style name is selected, don't render any options UI for it
    if (!selectedStyleName) {
      return null;
    }

    return (
      <View style={styles.selectedStyleNameOptions}>
        <View style={styles.selectedStyleNameOptionsRow}>
          <TouchableOpacity
            onPress={() => console.log('Change selected style name:')}
            style={styles.selectedStyleNameOptionsColumn}
          >
            <Text style={styles.selectedStyleNameOptionLabel}>
              Selected Style Name
            </Text>
            <Text style={styles.selectedStyleNameOptionValueLabel}>
              {selectedStyleName}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectedStyleNameActionsSection}>
          <TouchableOpacity onPress={() => onPressDuplicateStyle(selectedStyleName)} style={styles.selectedStyleNameActionButton}>
            <Image source={duplicateButtonImage} style={styles.selectedStyleNameActionButtonImage}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onPressDeleteStyle(selectedStyleName)} style={styles.selectedStyleNameActionButton}>
            <Image source={deleteButtonImage} style={styles.selectedStyleNameActionButtonImage}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderStyleEditorInputScrollView()}
        {this.renderSelectedStyleOptions()}
      </View>
    );
  }
}
