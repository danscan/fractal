export default function reduceSelectElementPath(state, { elementPath }) {
  console.log(`TODO: Push route for element at path:`, elementPath);
  return {
    ...state,
    selectedElementPath: elementPath,
  };
}
