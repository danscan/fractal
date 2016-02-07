import React, { Component, PropTypes, TextInput, View } from 'react-native';
import { elementPathPropType } from '../../../../constants/propTypes';
import { List } from 'immutable';
import styles from './styles';

export default class TextEditorInput extends Component {
  static propTypes = {
    elementPath: elementPathPropType.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    propName: PropTypes.string.isRequired,
    propValue: PropTypes.any,
  };

  render() {
    const {
      onChangeValue,
      propValue,
    } = this.props;
    const propValueString = propValue.join('\n');

    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="dark"
          multiline
          onChangeText={(text) => onChangeValue(new List([text]))}
          placeholder="Prop value"
          placeholderTextColor="#ccc"
          value={propValueString}
          style={styles.textInput}
        />
      </View>
    );
  }
}
