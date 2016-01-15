import undoable from 'redux-undo';
import {
  ADD_ELEMENT_CHILD,
  REMOVE_ELEMENT,
  CHANGE_ELEMENT_CHILD_INDEX,
  APPLY_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
} from '../../constants/actionTypes';
import initialState from './initialState';

// (Action reducer functions)
import reduceAddElementChild from './reduceAddElementChild';
import reduceRemoveElement from './reduceRemoveElement';
import reduceChangeElementIndex from './reduceChangeElementIndex';
import reduceApplyElementProp from './reduceApplyElementProp';
import reduceRemoveElementProp from './reduceRemoveElementProp';

export default undoable(function tree(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT_CHILD:
      return reduceAddElementChild(state, action);
    case REMOVE_ELEMENT:
      return reduceRemoveElement(state, action);
    case CHANGE_ELEMENT_CHILD_INDEX:
      return reduceChangeElementIndex(state, action);
    case APPLY_ELEMENT_PROP:
      return reduceApplyElementProp(state, action);
    case REMOVE_ELEMENT_PROP:
      return reduceRemoveElementProp(state, action);
    default:
      return state;
  }
});
