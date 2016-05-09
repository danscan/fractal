export function interfaceEditorComponent(state) {
  return state.interfaceEditorComponent.present;
}

export function canRedoInterfaceEditorComponentAction(state) {
  const future = state.interfaceEditorComponent.future || [];

  return future.length > 0;
}

export function canUndoInterfaceEditorComponentAction(state) {
  const past = state.interfaceEditorComponent.past || [];

  return past.length > 0;
}
