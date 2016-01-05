import { combineReducers } from 'redux';
import editing from './editing';
import form from './form';
import showingTree from './showingTree';

const reducer = combineReducers({
  editing,
  form,
  showingTree,
});

export default reducer;
