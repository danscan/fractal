import treePathByElementPath from './treePathByElementPath';

export default function elementPropValueTreePathByElementPathAndPropName(elementPath, propName) {
  const elementTreePath = treePathByElementPath(elementPath);

  return elementTreePath.push('props', propName, 'value');
}
