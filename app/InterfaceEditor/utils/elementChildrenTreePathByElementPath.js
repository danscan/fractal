import elementPropsTreePathByElementPath from './elementPropsTreePathByElementPath';

export default function elementChildrenTreePathByElementPath(elementPath) {
  const elementPropsTreePath = elementPropsTreePathByElementPath(elementPath);

  return elementPropsTreePath.push('children');
}
