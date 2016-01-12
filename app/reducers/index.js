import { combineReducers } from 'redux';
import editorModalRouteStack from './editorModalRouteStack';
import showEditor from './showEditor';
import peekBehindEditorModal from './peekBehindEditorModal';
import tree from './tree';

const reducer = combineReducers({
  editorModalRouteStack,
  showEditor,
  peekBehindEditorModal,
  tree,
});

export default reducer;
