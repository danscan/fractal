import React, { Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import styles from './styles';

export default class PropsEditor extends Component {
  static propTypes = {
    selectedElement: elementPropType.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
  }

  render() {
    return (
      <View style={styles.container}/>
    );
  }
}
