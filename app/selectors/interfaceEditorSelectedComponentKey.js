// import { interfaceEditorComponents } from './interfaceEditorComponents';

export function interfaceEditorSelectedComponentKey(state) {
  return state.interfaceEditorSelectedComponentKey || 'App';
}

// (Private helpers)
// function _getFirstComponentKey(state) {
//   const components = interfaceEditorComponents(state);
//   const firstComponent = components.first();
//   const firstComponentKey = components.keyOf(firstComponent);
//
//   return firstComponentKey;
// }
