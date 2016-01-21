export default function reduceChangeElementPath(state, { elementPath, newElementPath }) {
  const element = state.getIn(elementPath);

  return state.setIn(newElementPath, element);
}
