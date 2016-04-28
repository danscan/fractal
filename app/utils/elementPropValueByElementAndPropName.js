export default function elementPropValueByElementAndPropName(element, propName) {
  return element.getIn(['props', propName, 'value'], undefined);
}
