import elementChildrenTreePathByElementPath from '../../utils/elementChildrenTreePathByElementPath';

export default function reduceAddElementChild(state, { elementPath, child }) {
  const elementChildrenTreePath = elementChildrenTreePathByElementPath(elementPath);
  const elementChildrenTreePathArray = elementChildrenTreePath.toArray();

  state.push(elementChildrenTreePathArray, child);

  return state;
}
