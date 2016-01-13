import React, { Component, PropTypes, ScrollView, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { reduce } from 'underscore';
import styles from './styles';

export default class AddElementChild extends Component {
  static propTypes = {
    parentElementPath: PropTypes.arrayOf(PropTypes.number).isRequired,
    addElementChild: PropTypes.func.isRequired,
  }

  constructor(...args) {
    super(...args);

    this.state = {
      inputValue: '',
    };
  }

  renderInputSection() {
    return (
      <View style={styles.inputSection}>
        <TextInput
          autoCorrect={false}
          autoFocus
          keyboardAppearance="dark"
          onChangeText={(text) => this.setState({ inputValue: text })}
          placeholder="Enter component type name..."
          style={styles.input}
        />
      </View>
    );
  }

  renderAutoCompleteSection() {
    const results = reduce(React, (aggregateResults, propValue, propName) => {
      const lowerCaseInputValue = this.state.inputValue.toLowerCase();
      const lowerCasePropName = propName.toLowerCase();
      const propNameHasInputValue = lowerCasePropName.indexOf(lowerCaseInputValue) >= 0;

      return propNameHasInputValue
        ? [...aggregateResults, propName]
        : aggregateResults;
    }, []);

    return (
      <View style={styles.autoCompleteSection}>
        <ScrollView style={styles.autoCompleteList}>
          {results.map(resultPropName => this.renderAutoCompleteResult(resultPropName))}
        </ScrollView>
      </View>
    );
  }

  renderAutoCompleteResult(componentTypeName) {
    const {
      addElementChild,
    } = this.props;
    const childElement = React[componentTypeName];

    return (
      <TouchableOpacity
        key={componentTypeName}
        onPress={() => addElementChild(childElement)}
        style={styles.autoCompleteResult}
      >
        <Text style={styles.autoCompleteResultLabel}>
          {componentTypeName}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderInputSection()}
        {this.renderAutoCompleteSection()}
      </View>
    );
  }
}
