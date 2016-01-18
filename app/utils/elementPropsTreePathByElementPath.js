import treePathByElementPath from './treePathByElementPath';

export default function elementPropsTreePathByElementPath(elementPath) {
  const elementTreePath = treePathByElementPath(elementPath);

  return elementTreePath.push('props');
}
