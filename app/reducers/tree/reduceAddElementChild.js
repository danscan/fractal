import elementChildrenTreePathByElementPath from '../../utils/elementChildrenTreePathByElementPath';

export default function reduceAddElementChild(state, { elementPath, child }) {
  const elementChildrenTreePath = elementChildrenTreePathByElementPath(elementPath);

  return state.push(elementChildrenTreePath, child);
}
