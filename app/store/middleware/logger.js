export default store => next => action => {
  // Polyfill for iOS
  console.group = console.group || console.log;
  console.info = console.info || console.log;
  console.groupEnd = console.groupEnd || function polyfill() {};

  console.group(action.type);
  console.info('dispatching', action);

  const result = next(action);

  console.log('next state', store.getState());
  console.groupEnd(action.type);

  return result;
};
