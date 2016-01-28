import elementPropsTreePathByElementPath from './elementPropsTreePathByElementPath';

export default function elementPropTreePathByElementPathAndPropName(elementPath, propName) {
  const elementPropsTreePath = elementPropsTreePathByElementPath(elementPath);

  return elementPropsTreePath.push(propName);
}
