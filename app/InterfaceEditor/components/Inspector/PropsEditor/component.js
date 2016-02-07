import React, { Component, Text, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import Section from './Section';
import styles from './styles';

export default class PropsEditor extends Component {
  static propTypes = {
    selectedElement: elementPropType.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
  };

  renderPropsSection() {
    const { selectedElement } = this.props;
    const selectedElementProps = selectedElement.get('props');

    return (
      <View style={styles.propsSection}>
        {selectedElementProps.map((propValue, propName) => this.renderPropSection(propValue, propName)).toArray()}
      </View>
    );
  }

  renderPropSection(propValue, propName) {
    const {
      selectedElementPath,
    } = this.props;

    return (
      <Section
        key={propName}
        elementPath={selectedElementPath}
        propName={propName}
      />
    );
  }

  renderAddPropSection() {
    return (
      <View style={styles.addPropSection}>
        <TouchableOpacity style={styles.addPropButton}>
          <Text style={styles.addPropButtonLabel}>
            Add Prop
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderPropsSection()}
        {this.renderAddPropSection()}
      </View>
    );
  }
}
