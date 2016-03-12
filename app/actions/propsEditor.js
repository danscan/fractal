import {
  SET_PROP_SECTION_EXPANDED,
  SET_PROP_INPUT_TYPE,
} from '../constants/actionTypes';

export function setPropSectionExpanded(propName, expanded = true) {
  return {
    type: SET_PROP_SECTION_EXPANDED,
    propName,
    expanded,
  };
}

export function setPropInputType(propName, propInputType) {
  return {
    type: SET_PROP_INPUT_TYPE,
    propName,
    propInputType,
  };
}
