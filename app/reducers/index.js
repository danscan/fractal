import { combineReducers } from 'redux';
import editing from './editing';
import form from './form';
import peekBehindTree from './peekBehindTree';
import showingTree from './showingTree';
import tree from './tree';

const reducer = combineReducers({
  editing,
  form,
  peekBehindTree,
  showingTree,
  tree,
});

export default reducer;
