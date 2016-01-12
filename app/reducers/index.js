import { combineReducers } from 'redux';
import showEditor from './showEditor';
import navigation from './navigation';
import peekBehindEditorModal from './peekBehindEditorModal';
import tree from './tree';

const reducer = combineReducers({
  showEditor,
  navigation,
  peekBehindEditorModal,
  tree,
});

export default reducer;
