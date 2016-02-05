import React, { Component, PickerIOS, PropTypes, View } from 'react-native';
import { elementPathPropType } from '../../../constants/propTypes';
import StyleEditorInput from './StyleEditorInput';
import styles from './styles';

export default class StyleEditor extends Component {
  static propTypes = {
    propName: PropTypes.string.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
  };

  static defaultProps = {
    propName: 'style',
  };

  render() {
    const {
      propName,
      selectedElementPath,
    } = this.props;

    return (
      <View style={styles.container}>
        <StyleEditorInput propName={propName} elementPath={selectedElementPath}/>
      </View>
    );
  }
}
