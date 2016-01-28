import React from 'react-native';
import EditorWorkspace from './components/EditorWorkspace';
import reducerMountPoint from './constants/reducerMountPoint';
import reducer from './reducers';

export default () => <EditorWorkspace/>;
export { reducerMountPoint };
export { reducer };
