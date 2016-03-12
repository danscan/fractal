import React, { Component, PropTypes, View } from 'react-native';
import { elementPathPropType } from '../../../constants/propTypes';
import TextEditorInput from './TextEditorInput';
import styles from './styles';

export default class TextEditor extends Component {
  static propTypes = {
    propName: PropTypes.string.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
  };

  static defaultProps = {
    propName: 'children',
  };

  render() {
    const {
      propName,
      selectedElementPath,
    } = this.props;

    return (
      <View style={styles.container}>
        <TextEditorInput propName={propName} elementPath={selectedElementPath}/>
      </View>
    );
  }
}
