import {
  SET_PROP_SECTION_EXPANDED,
  SET_PROP_INPUT_TYPE,
} from '../../../constants/actionTypes';
import initialState from './initialState';

// (Action reducer functions)
import reduceSetPropSectionExpanded from './reduceSetPropSectionExpanded';
import reduceSetPropInputType from './reduceSetPropInputType';

export default function propsEditor(state = initialState, action) {
  switch (action.type) {
    case SET_PROP_SECTION_EXPANDED:
      return reduceSetPropSectionExpanded(state, action);
    case SET_PROP_INPUT_TYPE:
      return reduceSetPropInputType(state, action);
    default:
      return state;
  }
}
