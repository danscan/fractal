import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import StyleEditorInput from '../../vendor/pro-style-editor/src';
import styles from './styles';

// (Prop type constants)

export default class InterfaceEditorStyleEditor extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    value: ImmutablePropTypes.map,
  };

  render() {
    return (
      <View style={styles.container}>
        <StyleEditorInput {...this.props}/>
      </View>
    );
  }
}
