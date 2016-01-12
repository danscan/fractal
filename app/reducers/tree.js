import {
  ADD_ELEMENT,
  REMOVE_ELEMENT,
  CHANGE_CHILD_INDEX,
  ADD_ELEMENT_PROP,
  CHANGE_ELEMENT_PROP,
  REMOVE_ELEMENT_PROP,
} from '../constants/actionsTypes';
import { isEmpty } from 'underscore';

import { Text, View } from 'react-native';
const initialState = {
  displayName: 'Root',
  type: View,
  props: {
    children: [
      {
        type: Text,
        props: {
          children: [
            'Your app root',
          ],
          style: {
            color: '#666',
            fontFamily: 'Avenir',
            fontSize: 20,
          },
        },
      },
    ],
    style: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
  },
};

export default function tree(state = initialState, action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return reduceAddElement(state, action);
    case REMOVE_ELEMENT:
    case CHANGE_CHILD_INDEX:
    case ADD_ELEMENT_PROP:
    case CHANGE_ELEMENT_PROP:
    case REMOVE_ELEMENT_PROP:
    default:
      return state;
  }
}

function reduceAddElement(state, action) {
  const {
    element,
    parentElementPath = [],
  } = action;

  // If parentElementPath is empty, it's a path to the root
  if (isEmpty(parentElementPath)) {
    return {
      ...state,
      props: {
        ...state.props,
        children: [
          ...state.props.children,
          action.element,
        ],
      },
    };
  }

  return parentElementPath.reduce((newState, pathNode) => {

  }, {});
}
