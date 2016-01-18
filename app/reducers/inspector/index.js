import {
  SELECT_ELEMENT_PATH,
  EDIT_ELEMENT_PROP,
  CREATE_ELEMENT_CHILD,
} from '../../constants/actionTypes';
import initialState from './initialState';

// (Action reducer functions)
import reduceSelectElementPath from './reduceSelectElementPath';
import reduceEditElementProp from './reduceEditElementProp';
import reduceCreateElementChild from './reduceCreateElementChild';

export default function inspector(state = initialState, action) {
  switch (action.type) {
    case SELECT_ELEMENT_PATH:
      return reduceSelectElementPath(state, action);
    case EDIT_ELEMENT_PROP:
      return reduceEditElementProp(state, action);
    case CREATE_ELEMENT_CHILD:
      return reduceCreateElementChild(state, action);
    default:
      return state;
  }
}
