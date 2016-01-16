export default function reduceChangeElementPath(state, { elementPath, newElementPath }) {
  const elementPathCursor = state.select(elementPath);
  const element = elementPathCursor.get();

  elementPathCursor.unset();
  state.set(newElementPath, element);

  return state;
}
