import React, { Component, Image, PropTypes, Switch, Text, TextInput, View } from 'react-native';
import { contains } from 'underscore';
import StyleEditor from '../../../components/StyleEditor';
import styles from './styles';

// (Prop type categories)
const boolPropTypes = [PropTypes.bool, PropTypes.bool.isRequired];
const numberPropTypes = [PropTypes.number, PropTypes.number.isRequired];
const imageSourcePropTypes = [Image.propTypes.source, Image.propTypes.source.isRequired];
const objectPropTypes = [PropTypes.object, PropTypes.object.isRequired];
const stringPropTypes = [PropTypes.string, PropTypes.string.isRequired];
const imageStylePropTypes = [Image.propTypes.style, Image.propTypes.style.isRequired];
const textStylePropTypes = [Text.propTypes.style, Text.propTypes.style.isRequired];
const viewStylePropTypes = [View.propTypes.style, View.propTypes.style.isRequired];
const stylePropTypes = [...imageStylePropTypes, ...textStylePropTypes, ...viewStylePropTypes];

export default class PropValueInput extends Component {
  static propTypes = {
    onChangePropValue: PropTypes.func.isRequired,
    propType: PropTypes.func,
    propValue: PropTypes.any,
  }

  render() {
    const {
      onChangePropValue,
      propType,
      propValue,
    } = this.props;

    if (contains(boolPropTypes, propType)) {
      return (
        <View style={styles.container}>
          <Switch
            onChangeValue={onChangePropValue}
            value={propValue}
          />
        </View>
      );
    }

    if (contains(imageSourcePropTypes, propType)) {
      console.log('image source');
    }

    if (contains(numberPropTypes, propType)) {
      return (
        <View style={styles.container}>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardAppearance="dark"
            keyboardType="numeric"
            onChangeText={(text) => onChangePropValue(Number(text))}
            placeholder="Enter prop value"
            value={propValue}
            style={styles.input}
          />
        </View>
      );
    }

    if (contains(objectPropTypes, propType)) {
      console.log('object');
    }

    if (contains(stringPropTypes, propType)) {
      console.log('string');
    }

    if (contains(stylePropTypes, propType)) {
      console.log('style');
      return <StyleEditor onChangeValue={(value) => onChangePropValue(value)} propType={propType} value={propValue}/>;
    }
    return <StyleEditor onChangeValue={(value) => onChangePropValue(value)} propType={propType} value={propValue}/>;

    const propValueString = JSON.stringify(propValue);
    return (
      <View style={styles.container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardAppearance="dark"
          multiline
          onChangeText={onChangePropValue}
          placeholder="Enter prop value"
          value={propValueString}
          style={styles.input}
        />
      </View>
    );
  }
}
