import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default class Toolbar extends Component {
  static propTypes = {
    hideTree: PropTypes.func.isRequired,
    showTree: PropTypes.func.isRequired,
    showingTree: PropTypes.bool.isRequired,
  }

  renderShowTreeButton() {
    const { showTree } = this.props;

    return this.renderButton('Show Tree', () => showTree());
  }

  renderHideTreeButton() {
    const { hideTree } = this.props;

    return this.renderButton('Hide Tree', () => hideTree());
  }

  renderButton(text, onPress) {
    return (
      <TouchableOpacity onPress={() => onPress()} style={styles.button}>
        <Text style={styles.buttonLabel}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { showingTree } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          {showingTree ? this.renderHideTreeButton() : this.renderShowTreeButton()}
        </View>
      </View>
    );
  }
}
