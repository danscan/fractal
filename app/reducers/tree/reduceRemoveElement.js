export default function reduceRemoveElement(state, { elementPath }) {
  state.unset(elementPath);

  return state;
}
