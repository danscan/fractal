import propValueByProp from './propValueByProp';

export default function elementPropValueByElementAndPropName(element, propName) {
  const elementProp = element.getIn(['props', propName]);

  // If element doesn't have prop with name propName, then the prop has no value
  if (!elementProp) {
    return undefined;
  }

  return propValueByProp(elementProp);
}
