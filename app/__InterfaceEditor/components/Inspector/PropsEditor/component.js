import React, { AlertIOS, Component, PropTypes, Text, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import Section from './Section';
import styles from './styles';

export default class PropsEditor extends Component {
  static propTypes = {
    onPressCreateProp: PropTypes.func.isRequired,
    selectedElement: elementPropType.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
  };

  promptToCreateProp() {
    const {
      onPressCreateProp,
      selectedElementPath,
    } = this.props;

    return AlertIOS.prompt(
      'Enter new prop name',
      'Enter the name of the prop you want to add.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Create Prop', onPress: (propName) => onPressCreateProp(selectedElementPath, propName) },
      ],
    );
  }

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
        <TouchableOpacity onPress={() => this.promptToCreateProp()} style={styles.addPropButton}>
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
