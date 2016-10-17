import React, {
  Component,
  PropTypes
} from 'react';
import {
  Switch,
  TextInput,
} from 'react-native';
import {
  BOOLEAN,
  NUMBER,
  STRING,
  STYLES_LIST,
} from '../../constants/propValueInputTypes';
import propValueByProp from '../../utils/propValueByProp';
import propValueInputTypeByProp from '../../utils/propValueInputTypeByProp';
import { NumberIncrementField } from '../../vendor/pro-inputs/src';
import CollapsibleListSection from '../CollapsibleListSection';
import styles from './styles';

export default class InterfaceEditorPropsEditorProp extends Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    prop: PropTypes.any,
    propName: PropTypes.string.isRequired,
  };

  renderPropValueInput() {
    const { prop } = this.props;
    const propValueInputType = propValueInputTypeByProp(prop);

    if (propValueInputType === BOOLEAN) {
      return this.renderBooleanPropValueInput();
    }

    if (propValueInputType === NUMBER) {
      return this.renderNumberPropValueInput();
    }

    if (propValueInputType === STRING) {
      return this.renderStringPropValueInput();
    }

    if (propValueInputType === STYLES_LIST) {
      return this.renderStylesListPropValueInput();
    }

    return this.renderLiteralPropValueInput();
  }

  renderBooleanPropValueInput() {
    const {
      onChangeValue,
      prop,
    } = this.props;
    const propValue = propValueByProp(prop);

    return (
      <Switch
        onValueChange={onChangeValue}
        value={propValue}
      />
    );
  }

  renderNumberPropValueInput() {
    const {
      onChangeValue,
      prop,
    } = this.props;
    const propValue = propValueByProp(prop);

    return (
      <NumberIncrementField
        onChangeValue={onChangeValue}
        value={propValue}
      />
    );
  }

  renderStringPropValueInput() {
    const {
      onChangeValue,
      prop,
    } = this.props;
    const propValue = propValueByProp(prop);

    return (
      <TextInput
        multiline
        onChangeText={onChangeValue}
        value={propValue}
        style={styles.stringPropValueTextInput}
      />
    );
  }

  renderStylesListPropValueInput() {
    return this.renderLiteralPropValueInput();
  }

  renderLiteralPropValueInput() {
    const {
      onChangeValue,
      prop,
    } = this.props;
    const propValue = propValueByProp(prop);
    const stringPropValue = !!propValue && typeof propValue.toString === 'function'
      ? propValue.toString()
      : String(propValue);

    return (
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        multiline
        onChangeText={(textValue) => {
          const jsLiteral = _parseExpressionStringToJSLiteral(textValue);

          if (jsLiteral !== undefined) {
            return onChangeValue(jsLiteral);
          }
        }}
        returnKeyType="done"
        value={stringPropValue}
        style={styles.literalPropValueTextInput}
      />
    );
  }

  render() {
    const {
      isSelected,
      onPress,
      propName,
    } = this.props;
    const propHeaderSectionStyle = isSelected
      ? styles.selectedHeaderSection
      : null;
    const propTitleLabelStyle = isSelected
      ? styles.selectedTitleLabel
      : null;

    return (
      <CollapsibleListSection
        key={propName}
        headerSectionStyle={propHeaderSectionStyle}
        onPress={() => onPress(propName)}
        title={propName}
        titleLabelStyle={propTitleLabelStyle}
      >
        {this.renderPropValueInput()}
      </CollapsibleListSection>
    );
  }
}

// (Private helpers)
function _parseExpressionStringToJSLiteral(expressionString) {
  const valueExpressionString = `(${expressionString})`;

  try {
    return eval(valueExpressionString); // eslint-disable-line no-eval
  } catch (error) {
    console.log('Error parsing expressionString:', expressionString);
  }
}
