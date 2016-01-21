export default function reduceRemoveElement(state, { elementPath }) {
  return state.deleteIn(elementPath);
}
