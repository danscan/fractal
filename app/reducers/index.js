import { combineReducers } from 'redux';
import editing from './editing';
import form from './form';

const reducer = combineReducers({
  editing,
  form,
});

export default reducer;
