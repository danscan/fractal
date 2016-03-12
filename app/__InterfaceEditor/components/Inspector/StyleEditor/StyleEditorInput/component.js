import React, { Component, PropTypes, ScrollView } from 'react-native';
import { elementPathPropType } from '../../../../constants/propTypes';
import Section from './Section';
import PositionAndContentSection from './PositionAndContentSection';
import AppearanceSection from './AppearanceSection';
import styles from './styles';

export default class StyleEditorInput extends Component {
  static propTypes = {
    elementPath: elementPathPropType.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    propName: PropTypes.string.isRequired,
    propType: PropTypes.func.isRequired,
    propValue: PropTypes.object,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <PositionAndContentSection {...this.props}/>
        <AppearanceSection {...this.props}/>
        <Section title="Border"/>
        <Section title="Shadow"/>
        <Section title="Transforms"/>
        <Section title="Image"/>
        <Section title="Text"/>
      </ScrollView>
    );
  }
}
