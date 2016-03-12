import React, { Component, Image, PropTypes, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default class ColorField extends Component {
  static propTypes = {
    name: PropTypes.string,
    onChangeValue: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  static defaultProps = {
    onChangeValue: () => {},
  };

  renderName() {
    const { name } = this.props;

    if (!name) {
      return null;
    }

    return (
      <View style={styles.nameSection}>
        <Text style={styles.nameLabel}>
          {name}
        </Text>
      </View>
    );
  }

  renderColorChip() {
    const { value } = this.props;

    return (
      <View
        style={[
          styles.colorChip,
          { backgroundColor: value },
        ]}
      />
    );
  }

  renderValueInput() {
    const {
      onChangeValue,
      value,
    } = this.props;
    const stringValue = typeof value !== 'undefined'
                      ? String(value)
                      : null;

    return (
      <TextInput
        autoCorrect={false}
        autoCapitalize="none"
        keyboardAppearance="dark"
        onChangeText={(valueText) => onChangeValue(valueText)}
        placeholder="none"
        placeholderTextColor="hsla(0,0%,100%,0.3)"
        value={stringValue}
        style={styles.valueInput}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderName()}
        <View style={styles.fieldSection}>
          {this.renderColorChip()}
          {this.renderValueInput()}
        </View>
      </View>
    );
  }
}
