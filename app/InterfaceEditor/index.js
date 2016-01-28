import React from 'react-native';
import Editor from './components/Editor';
import reducerMountPoint from './constants/reducerMountPoint';
import reducer from './reducers';

export default () => <Editor/>;
export { reducerMountPoint };
export { reducer };
