export default function reduceChangeElementPath(state, { elementPath, newElementPath }) {
  const element = state.getIn(elementPath);
  const treeWithElementAtNewElementPath = state.setIn(newElementPath, element);

  // Return tree with element at new element path, with value at old element path deleted
  return treeWithElementAtNewElementPath.deleteIn(elementPath);
}
