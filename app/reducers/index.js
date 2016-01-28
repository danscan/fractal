import { combineReducers } from 'redux';

// (App reducers)
import {
  reducerMountPoint as interfaceEditorReducerMountPoint,
  reducer as interfaceEditorReducer,
} from '../InterfaceEditor';

const reducer = combineReducers({
  [interfaceEditorReducerMountPoint]: interfaceEditorReducer,
});

export default reducer;
