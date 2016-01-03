import React, { Component, PropTypes, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { propTypes as formPropTypes } from 'redux-form/native';
import styles from './styles';

export default class ComponentConfigForm extends Component {
  static propTypes = {
    fields: PropTypes.any,
    ...formPropTypes,
  }

  renderFormSection() {
    const {
      fields: { props },
    } = this.props;

    if (!props.length) {
      return this.renderNoPropsSection();
    }

    return (
      <View style={styles.formSection}>
        {props.map((prop, index) => this.renderSelectedPropSection(prop, index))}
      </View>
    );
  }

  renderNoPropsSection() {
    return (
      <View style={styles.noPropsSection}>
        <Text style={styles.noPropsLabel}>
          No Props
        </Text>
      </View>
    );
  }

  renderPropSection(prop, propIndex) {
    return (
      <View key={propIndex} style={styles.propSection}>
        <View style={styles.propName}>
          <Text style={styles.propNameLabel}>
            {prop.name.value}
          </Text>
        </View>
        <View style={styles.propType}>
          <Text style={styles.propTypeLabel}>
            {prop.type.value}
          </Text>
        </View>
      </View>
    );
  }

  renderSelectedPropSection(prop, propIndex) {
    return (
      <View key={propIndex} style={styles.selectedPropSection}>
        {this.renderPropSection(prop, propIndex)}
        <View style={styles.editPropSection}>
          <View style={styles.inputLabelsSection}>
            <Text style={styles.inputLabel}>
              Name
            </Text>
            <Text style={styles.inputLabel}>
              Type
            </Text>
            <Text style={styles.inputLabel}>
              Component
            </Text>
            <Text style={styles.inputLabel}>
              Input
            </Text>
          </View>
          <View style={styles.inputsSection}>
            <TextInput {...prop.name} style={styles.input}/>
            <TextInput {...prop.type} style={styles.input}/>
            <TextInput {...prop.component} style={styles.input}/>
            <TextInput {...prop.input} style={styles.input}/>
          </View>
        </View>
      </View>
    );
  }

  renderAddPropButtonSection() {
    const {
      fields: { props },
    } = this.props;

    return (
      <View style={styles.addPropSection}>
        <TouchableOpacity
          onPress={() => props.addField()}
          style={styles.addPropButton}
        >
          <Text style={styles.addPropButtonLabel}>
            Add Prop
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.renderFormSection()}
        {this.renderAddPropButtonSection()}
      </ScrollView>
    );
  }
}
