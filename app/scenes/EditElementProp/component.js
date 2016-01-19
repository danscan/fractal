import React, { Component, PropTypes, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { treePathPropType } from '../../constants/propTypes';
import styles from './styles';

export default class EditElementProp extends Component {
  static propTypes = {
    onPressApply: PropTypes.func.isRequired,
    onPressDelete: PropTypes.func.isRequired,
    elementPath: treePathPropType.isRequired,
    propName: PropTypes.string,
    propValue: PropTypes.any,
  }

  constructor(...args) {
    const [props] = args;

    super(...args);

    this.state = {
      nameInputValue: props.propName || '',
      valueInputValue: props.propValue || '',
    };
  }

  applyElementProp() {
    const {
      onPressApply,
      elementPath,
    } = this.props;
    const {
      nameInputValue: propName,
      valueInputValue,
    } = this.state;
    let propValue;

    try {
      propValue = JSON.parse(valueInputValue);
    } catch (error) {
      console.error('Invalid json!');
    }

    return onPressApply(elementPath, propName, propValue);
  }

  renderNameInputSection() {
    const { nameInputValue } = this.state;

    return (
      <View style={styles.nameInputSection}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          keyboardAppearance="dark"
          onChangeText={(text) => this.setState({ nameInputValue: text })}
          placeholder="Enter prop name..."
          value={nameInputValue}
          style={styles.nameInput}
        />
      </View>
    );
  }

  renderValueInputSection() {
    const { valueInputValue } = this.state;
    const valueInputValueString = JSON.stringify(valueInputValue);

    return (
      <View style={styles.valueInputSection}>
        <TextInput
          autoCorrect={false}
          keyboardAppearance="dark"
          multiline
          onChangeText={(text) => this.setState({ valueInputValue: text })}
          placeholder="Enter prop value"
          value={valueInputValueString}
          style={styles.nameInput}
        />
      </View>
    );
  }

  renderApplyButtonSection() {
    return (
      <View style={styles.applyButtonSection}>
        <TouchableOpacity onPress={() => this.applyElementProp()} style={styles.applyButton}>
          <Text style={styles.applyButtonLabel}>
            Apply Prop
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNameInputSection()}
        {this.renderValueInputSection()}
        {this.renderApplyButtonSection()}
      </View>
    );
  }
}
