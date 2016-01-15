export function selectPresentState(state) {
  // Present value of undoable reducer state
  return state.present;
}

export function selectCanRedo(state) {
  const past = state.past || [];
  const canRedo = past.length > 0;

  return canRedo;
}

export function selectCanUndo(state) {
  const future = state.future || [];
  const canUndo = future.length > 0;

  return canUndo;
}
