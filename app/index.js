// import * as KeyboardAwareView from './components/KeyboardAwareView';
// import * as AppToolbarNavigator from './components/AppToolbarNavigator';
// import InterfaceEditor from './InterfaceEditor';
import * as InterfaceEditorWorkspace from './components/InterfaceEditorWorkspace';
import run from './run';

// export default function App() {
//   return (
//     <Runner
//       Component={{
//         init: () => AppToolbarNavigator.init(InterfaceEditor),
//         update: (state, action) => AppToolbarNavigator.update(state, action),
//         view: (...args) => KeyboardAwareView.view({ children: AppToolbarNavigator.view(...args) }),
//       }}
//     />
//   );
// }

import initialTree from './constants/initialTree';

export default () => run({
  ...InterfaceEditorWorkspace,
  update: (state, action) => {
    switch (action.type) {
      case 'SET_SELECTED_ELEMENT_PATH':
        return {
          ...state,
          selectedElementPath: action.selectedElementPath,
        };
      default:
        return state;
    }
  },
  init: () => InterfaceEditorWorkspace.init({
    tree: initialTree,
  }),
});
