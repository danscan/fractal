import React from 'react-native';
// import * as KeyboardAwareView from './components/KeyboardAwareView';
// import * as AppToolbarNavigator from './components/AppToolbarNavigator';
// import InterfaceEditor from './InterfaceEditor';
import * as InterfaceEditorElement from './components/InterfaceEditorElement';
import Runner from './run';

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
import immutable from 'immutable';
console.log('immutable:', immutable);
export default function App() {
  return (
    <Runner
      ref={(runner) => console.log('runner:', runner)}
      Component={{
        ...InterfaceEditorElement,
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
        init: () => InterfaceEditorElement.init({
          tree: initialTree,
        }),
      }}
    />
  );
}
