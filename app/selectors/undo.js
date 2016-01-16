export function presentState(state) {
  // Present value of undoable reducer state
  return state.present;
}

export function canRedo(state) {
  const future = state.future || [];

  return future.length > 0;
}

export function canUndo(state) {
  const past = state.past || [];

  return past.length > 0;
}
