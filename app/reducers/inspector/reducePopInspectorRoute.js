export default function reducePopInspectorRoute(state) {
  return {
    ...state,
    routeStack: state.routeStack.pop(),
  };
}
