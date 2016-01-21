import React, { Component, PropTypes, Text, TouchableOpacity, TextInput, View } from 'react-native';
import { treePathPropType } from '../../constants/propTypes';
import PropValueInput from './PropValueInput';
import styles from './styles';

export default class EditElementProp extends Component {
  static propTypes = {
    onPressApply: PropTypes.func.isRequired,
    onPressDelete: PropTypes.func,
    elementPath: treePathPropType.isRequired,
    propName: PropTypes.string,
    propType: PropTypes.func,
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
    const { propType } = this.props;
    const { valueInputValue } = this.state;

    return (
      <View style={styles.valueInputSection}>
        <PropValueInput
          onChangePropValue={(propValue) => this.setState({ valueInputValue: propValue })}
          propType={propType}
          propValue={valueInputValue}
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
