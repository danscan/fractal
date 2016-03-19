import React, { Component, PropTypes, View } from 'react-native';
import ImmutablePropTypes from 'react-immutable-proptypes';
import StyleEditorInput from '../../vendor/pro-style-editor/src';
import styles from './styles';

// (Prop type constants)

export default class InterfaceEditorInspectorStyleEditor extends Component {
  static propTypes = {
    onChangeValue: PropTypes.func.isRequired,
    propName: PropTypes.string.isRequired,
    propType: PropTypes.func,
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
