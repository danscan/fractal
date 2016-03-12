export default store => next => action => {
  // Polyfill for iOS
  console.group = console.group || console.log;
  console.info = console.info || console.log;
  console.groupEnd = console.groupEnd || function noOp() {};

  console.group(action.type);
  console.info('dispatching', action);

  const result = next(action);

  console.log('next state', ...transformState(store.getState()));
  console.groupEnd(action.type);

  return result;
};

// (Private helpers)
function transformState(state) {
  if (state && typeof state.toJS === 'function') {
    return ['[immutable]', state.toJS()];
  }

  return [state];
}
