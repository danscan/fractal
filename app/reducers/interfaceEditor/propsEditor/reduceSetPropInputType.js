export default function reduceSetPropInputType(state, { propInputType, propName }) {
  return state.setIn(['propInputTypesByPropName', propName], propInputType);
}
