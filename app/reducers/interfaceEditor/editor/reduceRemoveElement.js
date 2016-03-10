export default function reduceRemoveElement(state, { elementPath }) {
  const selectedElementPath = state.get('selectedElementPath');
  const selectedElementWillBeRemoved = selectedElementPath.equals(elementPath);
  const nextSelectedElementPath = selectedElementWillBeRemoved
                                ? selectedElementPath.pop()
                                : selectedElementPath;

  return state.set('selectedElementPath', nextSelectedElementPath);
}
