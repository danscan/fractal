import React, { Component, PropTypes, Text, View } from 'react-native';
import styles from './styles';

export default class Prop extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  }

  renderHandleSection() {
    const { name } = this.props;

    return (
      <View style={styles.handleSection}>
        <Text style={styles.nameLabel}>
          {name}
        </Text>
      </View>
    );
  }

  renderValueSection() {
    const { value } = this.props;
    let stringValue;

    if (value) {
      switch (typeof value) {
        case 'number':
        case 'string':
        case 'boolean':
          stringValue = value;
          break;
        case 'object':
        default:
          stringValue = JSON.stringify(value);
      }
    } else {
      stringValue = value === null
                  ? 'null'
                  : 'undefined';
    }

    return (
      <View style={styles.valueSection}>
        <Text style={styles.valueLabel}>
          {stringValue}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderHandleSection()}
        {this.renderValueSection()}
      </View>
    );
  }
}
