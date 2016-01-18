export default function reduceCreateElementChild(state, { elementPath }) {
  console.log(`TODO: Push route to create child of element at path:`, elementPath);
  return {
    ...state,
    selectedElementPath: elementPath,
  };
}
