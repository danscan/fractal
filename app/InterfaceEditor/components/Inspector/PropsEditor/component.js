import React, { Component, Image, PropTypes, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { elementPropType, elementPathPropType } from '../../../constants/propTypes';
import deletePropButtonImage from '../../../assets/img/deletePropButton.png';
import styles from './styles';

export default class PropsEditor extends Component {
  static propTypes = {
    applyElementProp: PropTypes.func.isRequired,
    selectedElement: elementPropType.isRequired,
    selectedElementPath: elementPathPropType.isRequired,
  };

  renderPropsSection() {
    const { selectedElement } = this.props;
    const selectedElementProps = selectedElement.get('props');

    return (
      <View style={styles.propsSection}>
        {selectedElementProps.map((propValue, propName) => this.renderProp(propValue, propName)).toArray()}
      </View>
    );
  }

  renderProp(propValue, propName) {
    const propValueString = typeof propValue === 'object'
                          ? JSON.stringify(propValue, null, 2)
                          : String(propValue);

    return (
      <View key={propName} style={styles.propEditor}>
        <View style={styles.propNameSection}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            placeholder="Prop name"
            placeholderTextColor="#ccc"
            value={propName}
            style={styles.propNameInput}
          />
          <TouchableOpacity style={styles.deletePropButton}>
            <Image source={deletePropButtonImage} style={styles.deletePropButtonImage}/>
          </TouchableOpacity>
        </View>
        <View style={styles.propTypeSection}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            placeholder="Prop type"
            placeholderTextColor="#ccc"
            style={styles.propTypeInput}
          />
        </View>
        <View style={styles.propValueSection}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            multiline
            placeholder="Prop value"
            placeholderTextColor="#ccc"
            value={propValueString}
            style={styles.propValueInput}
          />
        </View>
      </View>
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
