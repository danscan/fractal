export default function reduceReplaceInspectorRoute(state, { route }) {
  return {
    ...state,
    routeStack: state.routeStack.pop().push(route),
  };
}
