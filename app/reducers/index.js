import { combineReducers } from 'redux';
import editorModalRouteStack from './editorModalRouteStack';
import preview from './preview';
import tree from './tree';

const reducer = combineReducers({
  editorModalRouteStack,
  preview,
  tree,
});

export default reducer;
