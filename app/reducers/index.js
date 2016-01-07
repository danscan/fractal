import { combineReducers } from 'redux';
import editing from './editing';
import form from './form';
import showingTree from './showingTree';
import tree from './tree';

const reducer = combineReducers({
  editing,
  form,
  showingTree,
  tree,
});

export default reducer;
