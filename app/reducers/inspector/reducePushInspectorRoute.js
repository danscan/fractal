export default function reducePushInspectorRoute(state, { route }) {
  return {
    ...state,
    routeStack: state.routeStack.push(route),
  };
}
