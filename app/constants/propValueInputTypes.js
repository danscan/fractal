import { Image, PropTypes, Text, View } from 'react-native';
import { Map } from 'immutable';

export const BOOLEAN = 'PROP_VALUE_INPUT_TYPE_BOOLEAN';
export const LITERAL = 'PROP_VALUE_INPUT_TYPE_LITERAL';
export const NUMBER = 'PROP_VALUE_INPUT_TYPE_NUMBER';
export const STRING = 'PROP_VALUE_INPUT_TYPE_STRING';
export const STYLES_LIST = 'PROP_VALUE_INPUT_TYPE_STYLES_LIST';

export default [
  BOOLEAN,
  LITERAL,
  NUMBER,
  STRING,
  STYLES_LIST,
];

export const defaultPropValueInputTypesByPropType = new Map([
  [PropTypes.bool, BOOLEAN],
  [PropTypes.bool.isRequired, BOOLEAN],

  [PropTypes.array, LITERAL],
  [PropTypes.array.isRequired, LITERAL],
  [PropTypes.func, LITERAL],
  [PropTypes.func.isRequired, LITERAL],
  [PropTypes.object, LITERAL],
  [PropTypes.object.isRequired, LITERAL],

  [PropTypes.number, NUMBER],
  [PropTypes.number.isRequired, NUMBER],

  [PropTypes.string, STRING],
  [PropTypes.string.isRequired, STRING],

  [Image.propTypes.style, STYLES_LIST],
  [Image.propTypes.style.isRequired, STYLES_LIST],
  [Text.propTypes.style, STYLES_LIST],
  [Text.propTypes.style.isRequired, STYLES_LIST],
  [View.propTypes.style, STYLES_LIST],
  [View.propTypes.style.isRequired, STYLES_LIST],
]);

export const propValueInputTypeDisplayNamesByPropValueInputType = new Map([
  [BOOLEAN, 'Boolean'],
  [LITERAL, 'Literal'],
  [NUMBER, 'Number'],
  [STRING, 'String'],
  [STYLES_LIST, 'Styles List'],
]);
