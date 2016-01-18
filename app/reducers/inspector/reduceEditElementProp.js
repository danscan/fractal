export default function reduceEditElementProp(state, { elementPath, propName }) {
  console.log(`TODO: Push route to edit prop "${propName}" of element at path:`, elementPath);
  return {
    ...state,
    selectedElementPath: elementPath,
  };
}
